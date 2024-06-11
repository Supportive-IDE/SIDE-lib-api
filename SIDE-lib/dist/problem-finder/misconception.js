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
};

//#region Misconception detectors

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
  });
  // Check for other variables with same name and different scope
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
var parenthesesOnlyIfArgument = function parenthesesOnlyIfArgument(symptoms, variables) {
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
    return s.getID() === _enums.SymptomType.VariableWithSameNameAsFunction.name && s.getAdditionalInfo().funcType === _constants.USER_DEFINED_FUNCTION && s.getAdditionalInfo().numArgsExpected === 0;
  });
  var occurrences = [];
  if (varsWithFunctionNames.length === 0 || undefinedVar.length === 0 && functionVars.length === 0) {
    return occurrences;
  }
  var _iterator22 = _createForOfIteratorHelper(varsWithFunctionNames),
    _step22;
  try {
    var _loop3 = function _loop3() {
      var funcNameVar = _step22.value;
      var name = funcNameVar.getAffectedText();
      var docIndex = funcNameVar.getDocIndex();
      var _iterator23 = _createForOfIteratorHelper(undefinedVar),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var u = _step23.value;
          if (u.getAffectedText() === name && u.getDocIndex() === docIndex) {
            var matchingSubscripted = subscriptedNonSubscriptable.filter(function (s) {
              return s.getAdditionalInfo().varName === name && s.getDocIndex() === docIndex;
            });
            if (matchingSubscripted.length === 0) {
              var reason = new Reason([u, funcNameVar], "The variable ".concat(name, " has not been assigned a value and the file contains a user-defined function of the same name, which does not expect any arguments."));
              occurrences.push(new MisconceptionOccurrence(u.getLineNumber(), u.getDocIndex(), reason));
            }
          }
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      var _iterator24 = _createForOfIteratorHelper(functionVars),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var funcVar = _step24.value;
          if (funcVar.getTextValue() === name && funcVar.getDocumentStartIndex() === docIndex) {
            var _matchingSubscripted2 = subscriptedNonSubscriptable.filter(function (s) {
              return s.getAdditionalInfo().varName === name && s.getDocIndex() === docIndex;
            });
            if (_matchingSubscripted2.length === 0) {
              var _reason6 = new Reason([funcNameVar], "The variable ".concat(name, " has not been assigned a value and the file contains a user-defined function of the same name, which does not expect any arguments."));
              occurrences.push(new MisconceptionOccurrence(funcNameVar.getLineNumber(), funcNameVar.getDocIndex(), _reason6));
            }
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    };
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      _loop3();
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
  var occurrences = [];
  // Assigning things that print but don't return
  var _iterator25 = _createForOfIteratorHelper(assignedNone),
    _step25;
  try {
    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
      var symptom = _step25.value;
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
    }
    // Not assigning things that print AND return
  } catch (err) {
    _iterator25.e(err);
  } finally {
    _iterator25.f();
  }
  var _iterator26 = _createForOfIteratorHelper(unusedReturn),
    _step26;
  try {
    var _loop4 = function _loop4() {
      var symptom = _step26.value;
      var sJSON = symptom.toJSON();
      var funcName = sJSON.unusedFunc.value;
      var funcPrints = functionPrints.filter(function (func) {
        return func.getAffectedText() === funcName;
      });
      var funcDoesPrint = funcPrints.length > 0;
      if (funcDoesPrint) {
        // Create a misconception occurrence
        var _reason7 = new Reason([symptom].concat(_toConsumableArray(funcPrints)), "User-defined function ".concat(funcName, " prints to the console and returns a value but the value is not used."));
        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), _reason7));
      }
    };
    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
      _loop4();
    }
  } catch (err) {
    _iterator26.e(err);
  } finally {
    _iterator26.f();
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
  var _iterator27 = _createForOfIteratorHelper(sequentialIfsWithMatches),
    _step27;
  try {
    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
      var conditional = _step27.value;
      var _iterator28 = _createForOfIteratorHelper(conditional.getAdditionalInfo().branchMatches),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var sequence = _step28.value;
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
  var _iterator29 = _createForOfIteratorHelper(variableOverwrite),
    _step29;
  try {
    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
      var symptom = _step29.value;
      var reason = new Reason([symptom], "The parameter ".concat(symptom.getAffectedText(), " is overwritten before use."));
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
 * Detector for the StringMethodsModifyTheString misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the StringMethodsModifyTheString misconception
 */
var stringMethodsModifyTheString = function stringMethodsModifyTheString(symptoms) {
  var unusedMethodReturns = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnusedReturn.name && s.getAdditionalInfo().expression.is(_enums.ExpressionCategory.BuiltInMethods) && _utils.stringMethodsLookup.has(s.getAdditionalInfo().expression.getEntity());
  });
  var occurrences = [];
  var _iterator30 = _createForOfIteratorHelper(unusedMethodReturns),
    _step30;
  try {
    for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
      var symptom = _step30.value;
      var reason = new Reason([symptom], "A String method, ".concat(symptom.getAdditionalInfo().expression.getTextValue(), ", that returns a new string is called but the return value is not assigned or passed."));
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
 * Detector for the TypeConversionModifiesArgument misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the TypeConversionModifiesArgument misconception
 */
var typeConversionModifiesArgument = function typeConversionModifiesArgument(symptoms) {
  var unusedTypeConversions = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnusedReturn.name && s.getAdditionalInfo().expression.isOneOf([_enums.ExpressionEntity.StrFunction, _enums.ExpressionEntity.IntFunction, _enums.ExpressionEntity.FloatFunction, _enums.ExpressionEntity.BoolFunction, _enums.ExpressionEntity.ListFunction, _enums.ExpressionEntity.TupleFunction, _enums.ExpressionEntity.SetFunction]);
  });
  var occurrences = [];
  var _iterator31 = _createForOfIteratorHelper(unusedTypeConversions),
    _step31;
  try {
    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
      var symptom = _step31.value;
      var reason = new Reason([symptom], "".concat(symptom.getAdditionalInfo().expression.getTextValue(), "() is called but the converted value returned by the function is not saved or passed."));
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator31.e(err);
  } finally {
    _iterator31.f();
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
  var _iterator32 = _createForOfIteratorHelper(whileVarNotModified),
    _step32;
  try {
    var _loop5 = function _loop5() {
      var notModified = _step32.value;
      var notModifiedEarlyExit = loopEarlyExit.filter(function (s) {
        return s.getBlock() === notModified.getBlock();
      });
      if (notModifiedEarlyExit.length > 0) {
        var reason = new Reason([notModified].concat(_toConsumableArray(notModifiedEarlyExit)), "No while loop variables are modified (excluding modifications in any nested loops) and the loop always exits on the first iteration.");
        occurrences.push(new MisconceptionOccurrence(notModified.getLineNumber(), notModified.getDocIndex(), reason));
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
  var _iterator33 = _createForOfIteratorHelper(whileTrue),
    _step33;
  try {
    var _loop6 = function _loop6() {
      var noVar = _step33.value;
      var noVarEarlyExit = loopEarlyExit.filter(function (s) {
        return s.getBlock() === noVar.getBlock();
      });
      if (noVarEarlyExit.length > 0) {
        var reason = new Reason([noVar].concat(_toConsumableArray(noVarEarlyExit)), "A \"while True\" loop always exits on the first iteration and therefore behaves as an if statement. Caution: the intention here may be to continue iteration, in which case the misconception lies elsewhere.");
        occurrences.push(new MisconceptionOccurrence(noVar.getLineNumber(), noVar.getDocIndex(), reason));
      }
    };
    for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
      _loop6();
    }
  } catch (err) {
    _iterator33.e(err);
  } finally {
    _iterator33.f();
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
  var _iterator34 = _createForOfIteratorHelper(typeUnnecessary),
    _step34;
  try {
    for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
      var symptom = _step34.value;
      var sJSON = symptom.toJSON();
      var reason = void 0;
      // string > list
      if (sJSON.argType === _constants.STRING && sJSON.convertedType === _constants.LIST) {
        reason = new Reason([symptom], "A string value, ".concat(sJSON.convertedValue, ", is converted to a list which may not be necessary. The programmer may not realise that much of the functionality provided by a list is also available to strings."));
      }
      // int
      // float
      // bool
      // list
      else {
        reason = new Reason([symptom], "".concat(sJSON.convertedValue, " is guaranteed to be a ").concat(sJSON.argType, " so there is no need to convert it to ").concat(sJSON.convertedType, "."));
      }
      if (reason !== undefined) occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator34.e(err);
  } finally {
    _iterator34.f();
  }
  return occurrences;
};

//#endregion

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
     * Gets the (String) name of the misconception.
     * @returns {string}
     */
  }, {
    key: "getName",
    value: function getName() {
      return _classPrivateFieldGet(this, _id);
    }

    /**
     * Checks if any of the contributing symptoms occur in the given range
     * @param {number} startIndex The starting doc index of a token in the document
     * @param {number} endIndex The ending doc index of a token in the document
     * @returns {boolean} True if a contributing symptom is present in the given range
     */
  }, {
    key: "isPresentInToken",
    value: function isPresentInToken(startIndex, endIndex) {
      var _iterator35 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _occurrences)),
        _step35;
      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var occurrence = _step35.value;
          var _iterator36 = _createForOfIteratorHelper(occurrence.getReason().getContributingSymptoms()),
            _step36;
          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var symptom = _step36.value;
              if (startIndex <= symptom.getDocIndex() && endIndex >= symptom.getDocIndex()) {
                return true;
              }
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
      return false;
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
var _reason8 = /*#__PURE__*/new WeakMap();
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
    _classPrivateFieldInitSpec(this, _reason8, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _line, line);
    _classPrivateFieldSet(this, _docIndex, docIndex);
    _classPrivateFieldSet(this, _reason8, reason);
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
      return _classPrivateFieldGet(this, _reason8);
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
        reason: _classPrivateFieldGet(this, _reason8).toJSON()
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
  _createClass(Reason, [{
    key: "getContributingSymptoms",
    value: function getContributingSymptoms() {
      return _classPrivateFieldGet(this, _contributingSymptoms);
    }

    /**
     * Creates a JSON representation of the reason.
     * @returns {Object} A JSON (or JSON-friendly) representation of the reason.
     */
  }, {
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