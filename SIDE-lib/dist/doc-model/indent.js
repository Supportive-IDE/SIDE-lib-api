"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Indent = void 0;
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
var _rawText = /*#__PURE__*/new WeakMap();
var _spaceCount = /*#__PURE__*/new WeakMap();
var _tabCount = /*#__PURE__*/new WeakMap();
var Indent = /*#__PURE__*/function () {
  /** @type {String} */

  /** @type {Number} */

  /** @type {Number} */

  function Indent(rawText) {
    _classCallCheck(this, Indent);
    _classPrivateFieldInitSpec(this, _rawText, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _spaceCount, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _tabCount, {
      writable: true,
      value: 0
    });
    _classPrivateFieldSet(this, _rawText, rawText);
    for (var i = 0; i < rawText.length; i++) {
      var _this$tabCount, _this$tabCount2, _this$spaceCount, _this$spaceCount2;
      if (rawText.charAt(i) === "\t") _classPrivateFieldSet(this, _tabCount, (_this$tabCount = _classPrivateFieldGet(this, _tabCount), _this$tabCount2 = _this$tabCount++, _this$tabCount)), _this$tabCount2;else _classPrivateFieldSet(this, _spaceCount, (_this$spaceCount = _classPrivateFieldGet(this, _spaceCount), _this$spaceCount2 = _this$spaceCount++, _this$spaceCount)), _this$spaceCount2;
    }
  }

  /**
   * Gets the raw text of the indentation
   * @returns {String}
   */
  _createClass(Indent, [{
    key: "getText",
    value: function getText() {
      return _classPrivateFieldGet(this, _rawText);
    }

    /**
     * Gets the number of spaces in the indentation
     * @returns {Number}
     */
  }, {
    key: "getSpaceCount",
    value: function getSpaceCount() {
      return _classPrivateFieldGet(this, _spaceCount);
    }

    /**
     * Gets the number of tabs in the indentation
     * @returns {Number}
     */
  }, {
    key: "getTabCount",
    value: function getTabCount() {
      return _classPrivateFieldGet(this, _tabCount);
    }

    /**
     * Checks whether this indentation is empty (length of 0)
     * @returns {Boolean}
     */
  }, {
    key: "noIndentation",
    value: function noIndentation() {
      return _classPrivateFieldGet(this, _rawText).length === 0;
    }

    /**
     * Checks whether this indentation is made up of only spaces.
     * @returns {Boolean}
     */
  }, {
    key: "isAllSpaces",
    value: function isAllSpaces() {
      return _classPrivateFieldGet(this, _spaceCount) > 0 && _classPrivateFieldGet(this, _tabCount) === 0;
    }

    /**
     * Checks whether this indentation is made up of only tabs.
     * @returns {Boolean}
     */
  }, {
    key: "isAllTabs",
    value: function isAllTabs() {
      return _classPrivateFieldGet(this, _tabCount) > 0 && _classPrivateFieldGet(this, _spaceCount) === 0;
    }

    /**
     * Checks whether this indentation mixes tabs and spaces
     * @returns {Boolean}
     */
  }, {
    key: "isMixed",
    value: function isMixed() {
      return _classPrivateFieldGet(this, _tabCount) > 0 && _classPrivateFieldGet(this, _spaceCount) > 0;
    }
  }]);
  return Indent;
}();
exports.Indent = Indent;