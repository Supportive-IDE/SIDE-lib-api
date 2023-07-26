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