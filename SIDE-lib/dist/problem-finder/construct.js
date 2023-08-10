"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Construct = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _id = /*#__PURE__*/new WeakMap();

var _line = /*#__PURE__*/new WeakMap();

var _docIndex = /*#__PURE__*/new WeakMap();

var _lineIndex = /*#__PURE__*/new WeakMap();

var _text = /*#__PURE__*/new WeakMap();

var _additionalInfo = /*#__PURE__*/new WeakMap();

var _blockId = /*#__PURE__*/new WeakMap();

var _symptom = /*#__PURE__*/new WeakMap();

var Construct = /*#__PURE__*/_createClass(
/** @type {String} */
// The logging ID of the construct

/** @type {Number} */

/** @type {Number} */
// index in full document raw text

/** @type {Number} */
// index in the raw text of the given line

/** @type {String} */
// The text to highlight

/** @type {Object} */
// Properties vary by construct

/** @type {String} */

/** @type {Symptom | undefined} */
// If this instance of the construct is connected to a symptom, add here

/**
 * Creates a new Construct
 * @param {String} id The string id for the construct
 * @param {Number} lineNum The document line number
 * @param {String} blockId The id of the block containing the symptom
 * @param {Number} docIndex The index in the raw text of the document
 * @param {Number} lineIndex The index in the raw text of the line
 * @param {String} text The text of the source code
 * @param {Object} additionalInfo An optional object containing more information about the construct
 */
function Construct(id, lineNum, blockId, docIndex, lineIndex) {
  var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
  var additionalInfo = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

  _classCallCheck(this, Construct);

  _classPrivateFieldInitSpec(this, _id, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _line, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _docIndex, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _lineIndex, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _text, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _additionalInfo, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _blockId, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _symptom, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldSet(this, _id, id);

  _classPrivateFieldSet(this, _line, lineNum);

  _classPrivateFieldSet(this, _blockId, blockId);

  _classPrivateFieldSet(this, _docIndex, docIndex);

  _classPrivateFieldSet(this, _lineIndex, lineIndex);

  _classPrivateFieldSet(this, _text, text);

  _classPrivateFieldSet(this, _additionalInfo, additionalInfo);
});

exports.Construct = Construct;