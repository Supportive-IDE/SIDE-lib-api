"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphNode = exports.Graph = void 0;
var _misconception = require("../problem-finder/misconception.js");
var _ast = require("./ast.js");
var _enums = require("./enums.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
var _text = /*#__PURE__*/new WeakMap();
var _category = /*#__PURE__*/new WeakMap();
var _entity = /*#__PURE__*/new WeakMap();
var _connectedTo = /*#__PURE__*/new WeakMap();
var _startDocIndex = /*#__PURE__*/new WeakMap();
var _endDocIndex = /*#__PURE__*/new WeakMap();
var _symptomForMisconceptions = /*#__PURE__*/new WeakMap();
var _isUniqueEntity = /*#__PURE__*/new WeakSet();
var GraphNode = /*#__PURE__*/function () {
  /** @type {String} */

  /** @type {ExpressionCategory} */

  /** @type {ExpressionEntity} */

  /** @type {ExpressionNode[]} */

  /** @type {number} */

  /** @type {number} */

  /** @type {Set<String>} */

  /**
   * Creates a new GraphNode
   * @param {ExpressionNode} expressionNode The original ExpressionNode that this GraphNode is created from
   */
  function GraphNode(expressionNode) {
    _classCallCheck(this, GraphNode);
    _classPrivateMethodInitSpec(this, _isUniqueEntity);
    _classPrivateFieldInitSpec(this, _text, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _category, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _entity, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _connectedTo, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _startDocIndex, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _endDocIndex, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _symptomForMisconceptions, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _text, expressionNode.getTextValue());
    _classPrivateFieldSet(this, _category, expressionNode.getCategory());
    _classPrivateFieldSet(this, _entity, expressionNode.getEntity());
    _classPrivateFieldSet(this, _startDocIndex, expressionNode.getDocumentStartIndex());
    _classPrivateFieldSet(this, _endDocIndex, expressionNode.getDocumentEndIndex());
    _classPrivateFieldSet(this, _connectedTo, expressionNode.getConnectedTo());
    _classPrivateFieldSet(this, _symptomForMisconceptions, new Set());
  }

  /**
   * Gets the text value of this node.
   * @returns {String}
   */
  _createClass(GraphNode, [{
    key: "getText",
    value: function getText() {
      return _classPrivateFieldGet(this, _text);
    }

    /**
     * Get the ExpressionEntity of this node.
     * @returns {ExpressionEntity}
     */
  }, {
    key: "getEntity",
    value: function getEntity() {
      return _classPrivateFieldGet(this, _entity);
    }

    /**
     * Gets the ExpressionCategory of this node,
     * @returns {ExpressionCategory}
     */
  }, {
    key: "getCategory",
    value: function getCategory() {
      return _classPrivateFieldGet(this, _category);
    }

    /**
     * Gets the connected ExpressionNodes.
     * @returns {ExpressionNode[]}
     */
  }, {
    key: "getConnectedTo",
    value: function getConnectedTo() {
      return _classPrivateFieldGet(this, _connectedTo);
    }

    /**
     * If this node has a symptom that contributes to an occurrence of a 
     * misconception, this method will add the misconception ID name for tracking.
     * @param {String} misconName The name of the misconception
     */
  }, {
    key: "addMisconception",
    value: function addMisconception(misconName) {
      _classPrivateFieldGet(this, _symptomForMisconceptions).add(misconName);
    }
  }, {
    key: "getID",
    value: function getID() {
      var id = "".concat(_classPrivateFieldGet(this, _entity).name, "_").concat(_classPrivateFieldGet(this, _category).name, " ").concat(_classPrivateFieldGet(this, _text));
      if (_classPrivateMethodGet(this, _isUniqueEntity, _isUniqueEntity2).call(this)) {
        return id;
      }
      return "".concat(_classPrivateFieldGet(this, _startDocIndex), "_").concat(_classPrivateFieldGet(this, _endDocIndex), "_").concat(id);
    }
  }, {
    key: "getStartIndex",
    value: function getStartIndex() {
      return _classPrivateFieldGet(this, _startDocIndex);
    }
  }, {
    key: "getEndIndex",
    value: function getEndIndex() {
      return _classPrivateFieldGet(this, _endDocIndex);
    }
  }, {
    key: "toJSON",
    value:
    /**
     * Converts this node to a JSON object.
     * @returns {Object}
     */
    function toJSON() {
      return {
        id: this.getID(),
        text: _classPrivateFieldGet(this, _text),
        entity: _classPrivateFieldGet(this, _entity).name,
        category: _classPrivateFieldGet(this, _category).name,
        startDocIndex: _classPrivateFieldGet(this, _startDocIndex),
        endDocIndex: _classPrivateFieldGet(this, _endDocIndex),
        misconceptions: Array.from(_classPrivateFieldGet(this, _symptomForMisconceptions))
      };
    }
  }]);
  return GraphNode;
}();
exports.GraphNode = GraphNode;
function _isUniqueEntity2() {
  return _classPrivateFieldGet(this, _entity) === _enums.ExpressionEntity.FunctionName && _classPrivateFieldGet(this, _category) === _enums.ExpressionCategory.Identifiers || _classPrivateFieldGet(this, _category) === _enums.ExpressionCategory.BuiltInFunctions || _classPrivateFieldGet(this, _category) === _enums.ExpressionCategory.BuiltInMethods || _classPrivateFieldGet(this, _category) === _enums.ExpressionCategory.BuiltInModules || _classPrivateFieldGet(this, _category) === _enums.ExpressionCategory.BuiltInExceptions;
}
var _nodes = /*#__PURE__*/new WeakMap();
var _edges = /*#__PURE__*/new WeakMap();
var _matchSymptomsToNode = /*#__PURE__*/new WeakSet();
var _addNode = /*#__PURE__*/new WeakSet();
var _makeEdges = /*#__PURE__*/new WeakSet();
var _connect = /*#__PURE__*/new WeakSet();
var Graph = /*#__PURE__*/function () {
  /** @type {Map<String, GraphNode>} */

  /** @type {Map<String, Set<String> >} */

  /**
   * 
   * @param {GraphNode[]} allNodes 
   * @param {Map<MisconceptionType, Misconception>} misconceptions
   */
  function Graph(allNodes, misconceptions) {
    _classCallCheck(this, Graph);
    _classPrivateMethodInitSpec(this, _connect);
    _classPrivateMethodInitSpec(this, _makeEdges);
    _classPrivateMethodInitSpec(this, _addNode);
    _classPrivateMethodInitSpec(this, _matchSymptomsToNode);
    _classPrivateFieldInitSpec(this, _nodes, {
      writable: true,
      value: new Map()
    });
    _classPrivateFieldInitSpec(this, _edges, {
      writable: true,
      value: new Map()
    });
    var _misconObjects = Array.from(misconceptions.values());
    var _iterator = _createForOfIteratorHelper(allNodes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        _classPrivateMethodGet(this, _matchSymptomsToNode, _matchSymptomsToNode2).call(this, _misconObjects, node);
        _classPrivateMethodGet(this, _addNode, _addNode2).call(this, node);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    _classPrivateMethodGet(this, _makeEdges, _makeEdges2).call(this);
  }

  /**
   * Checks if any of the misconceptions have symptoms that occur in the node. If so, 
   * the misonception ID is added to the node
   * @param {Misconception[]} misconObjects 
   * @param {GraphNode} node 
   */

  /**
   * 
   * @param {GraphNode} node 
   */

  /**
   * 
   * @param {String} fromNode The ID of the node
   * @param {String} toNode The node to connect to
   */
  _createClass(Graph, [{
    key: "toJSON",
    value: function toJSON() {
      var retObj = {
        nodes: {},
        edges: {}
      };
      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _nodes)),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            nodeID = _step2$value[0],
            node = _step2$value[1];
          retObj.nodes[nodeID] = node.toJSON();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _edges)),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            _nodeID = _step3$value[0],
            edges = _step3$value[1];
          retObj.edges[_nodeID] = Array.from(edges);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return retObj;
    }
  }]);
  return Graph;
}();
exports.Graph = Graph;
function _matchSymptomsToNode2(misconObjects, node) {
  var misconsInNode = misconObjects.filter(function (m) {
    return m.isPresentInToken(node.getStartIndex(), node.getEndIndex());
  });
  var _iterator4 = _createForOfIteratorHelper(misconsInNode),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var m = _step4.value;
      node.addMisconception(m.getName());
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}
function _addNode2(node) {
  var nodeID = node.getID();
  if (!_classPrivateFieldGet(this, _nodes).has(nodeID)) {
    _classPrivateFieldGet(this, _nodes).set(nodeID, node);
    _classPrivateFieldGet(this, _edges).set(nodeID, new Set());
  }
}
function _makeEdges2() {
  var _iterator5 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _nodes)),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = _slicedToArray(_step5.value, 2),
        id = _step5$value[0],
        node = _step5$value[1];
      var connections = node.getConnectedTo();
      var _iterator6 = _createForOfIteratorHelper(connections),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var connection = _step6.value;
          var tempNode = new GraphNode(connection);
          if (!_classPrivateFieldGet(this, _nodes).has(tempNode.getID())) {
            _classPrivateMethodGet(this, _addNode, _addNode2).call(this, tempNode);
          }
          if (id !== tempNode.getID()) {
            _classPrivateMethodGet(this, _connect, _connect2).call(this, id, tempNode.getID());
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}
function _connect2(fromNode, toNode) {
  _classPrivateFieldGet(this, _edges).get(fromNode).add(toNode);
}