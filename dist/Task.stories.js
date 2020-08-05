"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Archived = exports.Pinned = exports.Default = exports.actionsData = exports.taskData = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _Task.default,
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};
exports.default = _default;
var taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};
exports.taskData = taskData;
var actionsData = {
  onPinTask: (0, _addonActions.action)("onPinTask"),
  onArchiveTask: (0, _addonActions.action)("onArchiveTask")
};
exports.actionsData = actionsData;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_Task.default, _extends({
    task: _objectSpread({}, taskData)
  }, actionsData));
};

exports.Default = Default;

var Pinned = function Pinned() {
  return /*#__PURE__*/_react.default.createElement(_Task.default, _extends({
    task: _objectSpread({}, taskData, {
      state: "TASK_PINNED"
    })
  }, actionsData));
};

exports.Pinned = Pinned;

var Archived = function Archived() {
  return /*#__PURE__*/_react.default.createElement(_Task.default, _extends({
    task: _objectSpread({}, taskData, {
      state: "TASK_ARCHIVED"
    })
  }, actionsData));
};

exports.Archived = Archived;