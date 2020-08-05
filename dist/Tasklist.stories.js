"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = exports.Loading = exports.WithPinnedTasks = exports.Default = exports.withPinnedTasksData = exports.defaultTasksData = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TaskList = _interopRequireDefault(require("./TaskList"));

var _Task = require("./Task.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _TaskList.default,
  title: "TaskList",
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: "3rem"
      }
    }, story());
  }],
  excludeStories: /.*Data$/
};
exports.default = _default;
var defaultTasksData = [_objectSpread({}, _Task.taskData, {
  id: "1",
  title: "Task 1"
}), _objectSpread({}, _Task.taskData, {
  id: "2",
  title: "Task 2"
}), _objectSpread({}, _Task.taskData, {
  id: "3",
  title: "Task 3"
}), _objectSpread({}, _Task.taskData, {
  id: "4",
  title: "Task 4"
}), _objectSpread({}, _Task.taskData, {
  id: "5",
  title: "Task 5"
}), _objectSpread({}, _Task.taskData, {
  id: "6",
  title: "Task 6"
})];
exports.defaultTasksData = defaultTasksData;
var withPinnedTasksData = [].concat(_toConsumableArray(defaultTasksData.slice(0, 5)), [{
  id: "6",
  title: "Task 6 (pinned)",
  state: "TASK_PINNED"
}]);
exports.withPinnedTasksData = withPinnedTasksData;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_TaskList.default, _extends({
    tasks: defaultTasksData
  }, _Task.actionsData));
};

exports.Default = Default;

var WithPinnedTasks = function WithPinnedTasks() {
  return /*#__PURE__*/_react.default.createElement(_TaskList.default, _extends({
    tasks: withPinnedTasksData
  }, _Task.actionsData));
};

exports.WithPinnedTasks = WithPinnedTasks;

var Loading = function Loading() {
  return /*#__PURE__*/_react.default.createElement(_TaskList.default, _extends({
    loading: true,
    tasks: []
  }, _Task.actionsData));
};

exports.Loading = Loading;

var Empty = function Empty() {
  return /*#__PURE__*/_react.default.createElement(_TaskList.default, _extends({
    tasks: []
  }, _Task.actionsData));
};

exports.Empty = Empty;