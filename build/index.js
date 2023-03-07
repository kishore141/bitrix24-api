"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bitrix24Api = void 0;
var _activity = require("./activity");
var _timelineComment = require("./timeline-comment");
var _contact = require("./contact");
var _deal = require("./deal");
var _department = require("./department");
var _user = require("./user");
var _driveAttachedObject = require("./drive-attached-object");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Bitrix24Api = /*#__PURE__*/function () {
  function Bitrix24Api(hookUrl) {
    _classCallCheck(this, Bitrix24Api);
    this.hookUrl = hookUrl;
    this.Activity = _activity.Activity.withHook(hookUrl);
    this.TimeLineComment = _timelineComment.TimeLineComment.withHook(hookUrl);
    this.Contact = _contact.Contact.withHook(hookUrl);
    this.Deal = _deal.Deal.withHook(hookUrl);
    this.Department = _department.Department.withHook(hookUrl);
    this.User = _user.User.withHook(hookUrl);
    this.DriveAttachedObject = _driveAttachedObject.DriveAttachedObject.withHook(hookUrl);
  }
  _createClass(Bitrix24Api, null, [{
    key: "withHook",
    value: function withHook(url) {
      return new Bitrix24Api(url);
    }
  }]);
  return Bitrix24Api;
}();
exports.Bitrix24Api = Bitrix24Api;