"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symptomInfo = exports.parse = exports.misconceptionInfo = void 0;
var _enums = require("./doc-model/enums.js");
var _docinfo = require("./doc-model/docinfo.js");
var sortSymptoms = function sortSymptoms(a, b) {
  if (a.getLineNumber() === b.getLineNumber() && a.getID() === b.getID()) return 0;
  if (a.getLineNumber() < b.getLineNumber() || a.getLineNumber() === b.getLineNumber() && a.getID() < b.getID()) return -1;
  return 1;
};
var parse = function parse(pyString) {
  var showTree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var showGraph = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var showErrorDetail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  try {
    var doc = new _docinfo.DocInfo(pyString);
    var symptoms = doc.getSymptoms().sort(sortSymptoms).map(function (symptom) {
      try {
        var _JSON = symptom.toJSON();
        return _JSON;
      } catch (e) {
        return {
          error: "Could not process symptom",
          msg: e.toString()
        };
      }
    });
    var variables = Array.from(doc.getVariables().values()).flat().map(function (v) {
      try {
        var _JSON2 = v.toJSON();
        return _JSON2;
      } catch (e) {
        return {
          error: "Could not process variable",
          msg: e.toString()
        };
      }
    });
    var functions = Array.from(doc.getUserDefinedFunctions().values()).filter(function (f) {
      return f.is(_enums.ExpressionEntity.FunctionName);
    }).map(function (f) {
      try {
        var _JSON3 = f.toJSON();
        return _JSON3;
      } catch (e) {
        return {
          error: "Could not process function",
          msg: e.toString()
        };
      }
    });
    var classes = Array.from(doc.getUserDefinedClasses().values()).map(function (c) {
      return c.toJSON();
    });
    var misconceptions = Array.from(doc.getMisconceptions().values()).map(function (m) {
      try {
        var _JSON4 = m.toJSON();
        return _JSON4;
      } catch (e) {
        return {
          error: "Could not process misconception",
          msg: e.toString()
        };
      }
    });
    var blocks = doc.getBlocks();
    var retObj = {
      misconceptions: misconceptions,
      symptoms: symptoms,
      blocks: blocks.toJSON(),
      variables: variables,
      functions: functions,
      classes: classes
    };
    if (showTree) {
      var tree = blocks.toTree();
      retObj.tree = tree;
    }
    if (showGraph) {
      var graph = doc.getGraph();
      retObj.graph = graph.toJSON();
    }
    return retObj;
  } catch (e) {
    console.log("Unable to parse", e);
    var _retObj = {
      misconceptions: [],
      symptoms: [],
      blocks: [],
      variables: [],
      functions: [],
      classes: [],
      error: "Unable to parse!"
    };
    if (showErrorDetail) _retObj.errorDetail = e.toString();
    return _retObj;
  }
};

// Add functions that return info about misconceptions and symptoms defined in the library (symptom checker should be able to just pull from the misconceptions)
exports.parse = parse;
var symptomInfo = function symptomInfo() {
  var obj = {};
  for (var type in _enums.SymptomType) {
    obj[_enums.SymptomType[type].name] = _enums.SymptomType[type].description;
  }
  return obj;
};
exports.symptomInfo = symptomInfo;
var misconceptionInfo = function misconceptionInfo() {
  var obj = {};
  for (var type in _enums.MisconceptionType) {
    obj[_enums.MisconceptionType[type].name] = _enums.MisconceptionType[type].description;
  }
  return obj;
};
exports.misconceptionInfo = misconceptionInfo;