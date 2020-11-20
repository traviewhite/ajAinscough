webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NavToggle.js":
/*!*********************************!*\
  !*** ./components/NavToggle.js ***!
  \*********************************/
/*! exports provided: NavToggle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavToggle\", function() { return NavToggle; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/traviewhite/dev/ajainscough/components/NavToggle.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Path = function Path(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].path, _objectSpread({\n    fill: \"transparent\",\n    strokeWidth: \"3\",\n    stroke: \"#405773\",\n    strokeLinecap: \"square\"\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Path;\nvar NavToggle = function NavToggle(_ref) {\n  var toggle = _ref.toggle;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n    onClick: toggle,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n      width: \"30\",\n      height: \"30\",\n      viewBox: \"0 0 23 23\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Path, {\n        variants: {\n          closed: {\n            d: \"M 2 5 L 22 5\",\n            stroke: \"#405773\"\n          },\n          open: {\n            d: \"M 3 16.5 L 22 2.5\",\n            stroke: \"#FB9271\"\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Path, {\n        variants: {\n          closed: {\n            d: \"M 2 16.346 L 22 16.346\",\n            stroke: \"#405773\"\n          },\n          open: {\n            d: \"M 3 2.5 L 22 16.346\",\n            stroke: \"#FB9271\"\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 3\n  }, _this);\n};\n_c2 = NavToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavToggle);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Path\");\n$RefreshReg$(_c2, \"NavToggle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZUb2dnbGUuanM/NmVkNCJdLCJuYW1lcyI6WyJQYXRoIiwicHJvcHMiLCJOYXZUb2dnbGUiLCJ0b2dnbGUiLCJjbG9zZWQiLCJkIiwic3Ryb2tlIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxLQUFLO0FBQUEsc0JBQ2hCLHFFQUFDLG9EQUFELENBQVEsSUFBUjtBQUNFLFFBQUksRUFBQyxhQURQO0FBRUUsZUFBVyxFQUFDLEdBRmQ7QUFHRSxVQUFNLEVBQUMsU0FIVDtBQUlFLGlCQUFhLEVBQUM7QUFKaEIsS0FLTUEsS0FMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBQUEsQ0FBbEI7O0tBQU1ELEk7QUFVQyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLHNCQUN2QjtBQUFRLFdBQU8sRUFBRUEsTUFBakI7QUFBQSwyQkFDRTtBQUFLLFdBQUssRUFBQyxJQUFYO0FBQWdCLFlBQU0sRUFBQyxJQUF2QjtBQUE0QixhQUFPLEVBQUMsV0FBcEM7QUFBQSw4QkFDRSxxRUFBQyxJQUFEO0FBQ0UsZ0JBQVEsRUFBRTtBQUNSQyxnQkFBTSxFQUFFO0FBQUVDLGFBQUMsRUFBRSxjQUFMO0FBQXFCQyxrQkFBTSxFQUFFO0FBQTdCLFdBREE7QUFFUkMsY0FBSSxFQUFFO0FBQUVGLGFBQUMsRUFBRSxtQkFBTDtBQUEwQkMsa0JBQU0sRUFBRTtBQUFsQztBQUZFO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0UscUVBQUMsSUFBRDtBQUNFLGdCQUFRLEVBQUU7QUFDUkYsZ0JBQU0sRUFBRTtBQUFFQyxhQUFDLEVBQUUsd0JBQUw7QUFBK0JDLGtCQUFNLEVBQUU7QUFBdkMsV0FEQTtBQUVSQyxjQUFJLEVBQUU7QUFBRUYsYUFBQyxFQUFFLHFCQUFMO0FBQTRCQyxrQkFBTSxFQUFFO0FBQXBDO0FBRkU7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR1QjtBQUFBLENBQWxCO01BQU1KLFM7QUFtQkVBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZUb2dnbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBQYXRoID0gcHJvcHMgPT4gKFxuICA8bW90aW9uLnBhdGhcbiAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgc3Ryb2tlPVwiIzQwNTc3M1wiXG4gICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5leHBvcnQgY29uc3QgTmF2VG9nZ2xlID0gKHsgdG9nZ2xlIH0pID0+IChcbiAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9PlxuICAgIDxzdmcgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAyMyAyM1wiPlxuICAgICAgPFBhdGhcbiAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICBjbG9zZWQ6IHsgZDogXCJNIDIgNSBMIDIyIDVcIiwgc3Ryb2tlOiBcIiM0MDU3NzNcIiB9LFxuICAgICAgICAgIG9wZW46IHsgZDogXCJNIDMgMTYuNSBMIDIyIDIuNVwiLCBzdHJva2U6IFwiI0ZCOTI3MVwiIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8UGF0aFxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIGNsb3NlZDogeyBkOiBcIk0gMiAxNi4zNDYgTCAyMiAxNi4zNDZcIiwgc3Ryb2tlOiBcIiM0MDU3NzNcIiB9LFxuICAgICAgICAgIG9wZW46IHsgZDogXCJNIDMgMi41IEwgMjIgMTYuMzQ2XCIsIHN0cm9rZTogXCIjRkI5MjcxXCIgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9idXR0b24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdlRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavToggle.js\n");

/***/ })

})