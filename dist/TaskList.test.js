"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _TaskList = require("./TaskList.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("renders pinned tasks at the start of the list", function () {
  var div = document.createElement("div");

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_TaskList.WithPinnedTasks, null), div); // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end


  var lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  _reactDom.default.unmountComponentAtNode(div);
});