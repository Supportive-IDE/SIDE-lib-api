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

_defineProperty(ExpressionCategory, "ClassAttributes", new ExpressionCategory("ClassAttributes"));

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

_defineProperty(ExpressionEntity, "MethodDefinitionStatement", new ExpressionEntity("MethodDefinitionStatement"));

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

  // Reserved for unknown classes
  // For entities that don't have a type e.g. maths operators
  // Default starting type
  // Reserved for cases where an operation would result in a TypeError e.g. string / int
  // Reserved for cases where a variable is used before it is declared
  // Built in modules
  function DataType(name) {
    var _this;

    var isCustom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Map();
    var methods = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Map();

    _classCallCheck(this, DataType);

    _this = _super4.call(this, name);
    _this.isCustom = isCustom;
    _this.attributes = attributes;
    _this.methods = methods;
    return _this;
  }

  _createClass(DataType, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        attributes: Array.from(this.attributes.values()).map(function (v) {
          return v.toJSON();
        }),
        methods: Array.from(this.methods.values()).map(function (m) {
          return m.toJSON();
        })
      };
    }
  }], [{
    key: "createCustomType",
    value: function createCustomType(name) {
      DataType[name] = new DataType(name, true);
      return DataType[name];
    }
  }]);

  return DataType;
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
    var _this2;

    _classCallCheck(this, MisconceptionType);

    _this2 = _super5.call(this, name);

    _defineProperty(_assertThisInitialized(_this2), "description", void 0);

    _this2.description = desc;
    return _this2;
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
    var _this3;

    _classCallCheck(this, SymptomType);

    _this3 = _super6.call(this, name);

    _defineProperty(_assertThisInitialized(_this3), "description", void 0);

    _this3.description = desc;
    return _this3;
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