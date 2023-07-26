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
        _varsWithTypeNames = _ref$varsWithTypeName === void 0 ? [] : _ref$varsWithTypeName,
        _ref$classDefinitionI = _ref.classDefinitionInProgress,
        _classDefinitionInProgress = _ref$classDefinitionI === void 0 ? false : _ref$classDefinitionI;

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

    if (_classPrivateFieldGet(this, _text).length > 0) _classPrivateMethodGet(this, _parseLine, _parseLine2).call(this, _startFrom > 0 ? _startFrom : _classPrivateFieldGet(this, _indentSize), _varsWithTypeNames, _moduleNames, _classDefinitionInProgress);else _classPrivateMethodGet(this, _checkIfContinues, _checkIfContinues2).call(this);
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

function _parseLine2(startFrom, varsWithTypeNames, moduleNames, classDefinitionInProgress) {
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
      i = _classPrivateMethodGet(this, _processIdentifierOrKeyword, _processIdentifierOrKeyword2).call(this, i, varsWithTypeNames, moduleNames, classDefinitionInProgress);
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
  var _iterator8 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _expressions)),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var expression = _step8.value;

      if (expression.is(entity)) {
        return true;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
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

function _processIdentifierOrKeyword2(localIndex, varsWithTypeNames, moduleNames, classDefinitionInProgress) {
  var name = _classPrivateMethodGet(this, _getIdentifierOrKeyword, _getIdentifierOrKeyword2).call(this, localIndex);

  var info = _classPrivateMethodGet(this, _getIdentifierInfo, _getIdentifierInfo2).call(this, name, _classPrivateMethodGet(this, _getNextNonSpaceCharacter, _getNextNonSpaceCharacter2).call(this, localIndex + name.length), varsWithTypeNames, moduleNames, classDefinitionInProgress);

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

function _getIdentifierInfo2(identifier, nextCharacter, varsWithTypeNames, moduleNames, classDefinitionInProgress) {
  var knownEntity = (0, _utils.keywordLookup)(identifier);

  if (_classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this)) {
    var priorExpression = _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this);

    if (priorExpression.is(_enums.ExpressionEntity.FunctionDefinition)) {
      return classDefinitionInProgress ? new _utils.ExpressionInfo(_enums.ExpressionEntity.MethodName, _enums.ExpressionCategory.Identifiers) : new _utils.ExpressionInfo(_enums.ExpressionEntity.FunctionName, _enums.ExpressionCategory.Identifiers);
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
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _combineStringLiterals).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _combinePropertyCalls).call(this, expressionTree);
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
      var scopeBlock = block.getScope();

      if (!statement.isBlank() && statement.getFirstExpression().is(_enums.ExpressionEntity.ImportStatement)) {
        _classStaticPrivateMethodGet(StatementProcessor, StatementProcessor, _trackImports).call(StatementProcessor, statement, scopeBlock);
      }

      if (statement.isBlockStatement() && !statement.isBlank()) {
        if (statement.getFirstExpression().is(_enums.ExpressionEntity.ForDefinitionStatement)) {
          block = _classStaticPrivateMethodGet(StatementProcessor, StatementProcessor, _updateForLoopBlock).call(StatementProcessor, block);
        }
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

          if (block.getBlockEntity() === _enums.ExpressionEntity.ClassDefinition && usages.length > 0) {
            if (usages[0].getParent() === undefined || usages[0].getParent().is(_enums.ExpressionEntity.AssignmentStatement) && usages[0].getParent().getTargetVariables().includes(usages[0])) {
              _classStaticPrivateMethodGet(this, StatementProcessor, _connectAttributeUsages).call(this, usages[0], block.getClassType(), statement, block, scopeBlock);

              continue;
            }
          }

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

            var _iterator2 = _createForOfIteratorHelper(usageInfos),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _vInfo = _step2.value;

                var varParent = _vInfo.getVariable().getParent();

                if (varParent && varParent.is(_enums.ExpressionEntity.PropertyCallExpression) && varParent.getObject().getDataType().isCustom) {
                  var classType = varParent.getObject().getDataType();

                  _classStaticPrivateMethodGet(this, StatementProcessor, _connectAttributeUsages).call(this, varParent.getProperty(), classType, statement, block, scopeBlock);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Tracks usage of a custom attribute 
     * @param {PropertyExpression} attributeNode The instance of a class attribute
     * @param {DataType} classType The custom datatype the attribute appears to belong to
     * @param {Statement} statment The statement that the attribute is used in
     * @param {StatementBlock} currentBlock The current block that the attribute is used in
     * @param {ScopeBlock} scopeBlock The scope that the attribute is used in
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
      var classes = scopeBlock.getRootBlock().getUserDefinedClasses();
      var statementExpressions = statement.getExpressions();

      var _iterator3 = _createForOfIteratorHelper(statementExpressions),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          var funcCalls = e.getExpressionsOfKind(_enums.ExpressionEntity.UserDefinedFunctionCall);

          var _iterator4 = _createForOfIteratorHelper(funcCalls),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var call = _step4.value;
              var callName = call.getFunctionName();

              if (functions.has(callName)) {
                var funcDef = functions.get(callName);
                call.setDataType(funcDef.getDataType());
                funcDef.addObserver(call);
              } else if (classes.has(callName)) {
                var classDef = classes.get(callName);
                call.setDataType(classDef);
              } else {
                scopeBlock.addUnconnectedFunctionCall(call);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * Connects calls to user defined methods to the method expression that stores
     * return type information
     * @param {Statement} statement
     * @param {ScopeBlock} scopeBlock
     */

  }, {
    key: "connectUserDefinedMethods",
    value: function connectUserDefinedMethods(statement, scopeBlock) {
      var methods = scopeBlock.findAllFunctions();

      var _iterator5 = _createForOfIteratorHelper(methods.entries()),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
              k = _step5$value[0],
              m = _step5$value[1];

          if (!m.is(_enums.ExpressionEntity.MethodName)) {
            methods["delete"](k);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var statementExpressions = statement.getExpressions();

      var _iterator6 = _createForOfIteratorHelper(statementExpressions),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          // Add methods?
          var funcCalls = e.getExpressionsOfKind(_enums.ExpressionEntity.UserDefinedMethodCall);

          var _iterator7 = _createForOfIteratorHelper(funcCalls),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var call = _step7.value;
              var callName = call.getMethodName();

              if (methods.has(callName)) {
                var funcDef = methods.get(callName);
                call.setDataType(funcDef.getDataType());
                funcDef.addObserver(call);
              } else {
                scopeBlock.addUnconnectedMethodCall(call);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
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

function _connectAttributeUsages(attributeNode, classType, statement, currentBlock, scopeBlock) {
  var attName = attributeNode.getTextValue();
  /**
   * Cases to handle
   * 1. The attribute is referenced from inside the class
   *  a. The class does not have an attribute of the same name > create and track a new VariableInfo
   *  b. The class does have an attribute of the same name > add a new UsageInfo to tracking
   * 2. The attribute is referenced from outside the class
   *  a. The object it is called on is not parsed / unknown > set data type to Unknown and put in unconnected attribute tracking at the document level
   *  b. The object it is called on is known > add a new UsageInfo to tracking
   */

  var attUsage = new _identifiers.UsageInfo(attributeNode, currentBlock);

  if (classType.attributes.has(attName)) {
    // Should only happen if this is a known attribute called on a known class
    classType.attributes.get(attName).addUsage(attUsage);
  } else {
    var parentClass = scopeBlock.getNearestParentOfAny([_enums.ExpressionEntity.ClassDefinition]);
    var attributeInfo = new _identifiers.VariableInfo(attUsage, statement, currentBlock);

    if (parentClass && parentClass.getClassType().name === classType.name) {
      // add new attribute to current class
      classType.attributes.set(attName, attributeInfo);
    } else {
      // add to unconnected class tracking - shouldn't ever end up here?
      console.log("add to unconnected attribute tracking");
    }
  }
}

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

  var _iterator9 = _createForOfIteratorHelper(expressions),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var e = _step9.value;

      if (e.isOneOf([_enums.ExpressionEntity.ModuleName, _enums.ExpressionCategory.BuiltInModules])) {
        if (!asFound) {
          var moduleInfo = new _identifiers.ModuleInfo(e.getTextValue(), e.getEntity());
          modules.push(moduleInfo);
        } else {
          var _iterator10 = _createForOfIteratorHelper(modules),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _m = _step10.value;

              if (_m.getEntity() === e.getEntity()) {
                _m.setAlias(e.getTextValue());
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      } else if (e.is(_enums.ExpressionEntity.AsKeyword)) {
        asFound = e;
      } else if (e.isOneOf([_enums.ExpressionCategory.ModuleProperties, _enums.ExpressionEntity.NamedImport])) {
        var _iterator11 = _createForOfIteratorHelper(modules),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _m2 = _step11.value;

            _m2.addDirectImport(e.getTextValue(), (0, _identifiers.directImport)(e.getEntity(), e.getCategory()));
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      } else if (e.is(_enums.ExpressionEntity.ImportAll)) {
        var _iterator12 = _createForOfIteratorHelper(modules),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var _m3 = _step12.value;

            _m3.setImportAll();
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
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
      return _classStaticPrivateMethodGet(this, StatementProcessor, _functionOrMethod).call(this, textValue, expressions);

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

    case _enums.ExpressionEntity.ClassDefinition:
      return new _ast.ClassDefinitionStatement(textValue, expressions);

    case _enums.ExpressionEntity.LambdaDefinition:
      return new _ast.LambdaExpression(textValue, expressions);

    case _enums.ExpressionEntity.WithKeyword:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.WithDefinitionStatement);

    default:
      return expressions;
  }
}

function _functionOrMethod(textValue, expressions) {
  if (expressions.length < 2 || expressions[1].is(_enums.ExpressionEntity.FunctionName)) {
    return new _ast.FunctionDefinitionStatement(textValue, expressions);
  } else {
    return new _ast.MethodDefinitionStatement(textValue, expressions);
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

    while (start >= 0 && !expressions[start].isOneOf([_enums.ExpressionCategory.Identifiers, _enums.ExpressionCategory.BuiltInFunctions, _enums.ExpressionCategory.CompoundTypes, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionEntity.BuiltInMethodCall, _enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionEntity.UserDefinedMethodCall, _enums.ExpressionEntity.SubscriptedExpression, _enums.ExpressionEntity.PropertyCallExpression])) {
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

    var _iterator13 = _createForOfIteratorHelper(entries),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var entry = _step13.value;
        var kV = this.split(entry, _enums.ExpressionEntity.Colon);

        if (kV.length === 2) {
          keyValues.push(kV);
        }
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
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
  // negative entities
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
    if (expressions[i].is(_enums.ExpressionEntity.Dot) && expressions[i + 1].isOneOf([_enums.ExpressionEntity.PropertyName, _enums.ExpressionCategory.ModuleProperties])) {
      var newTextValue = (0, _utils.getTextOfExpressions)([expressions[i - 1], expressions[i], expressions[i + 1]]);
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