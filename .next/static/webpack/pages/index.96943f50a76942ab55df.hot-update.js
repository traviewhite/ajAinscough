webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _components_NavToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavToggle */ \"./components/NavToggle.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/traviewhite/dev/ajainscough/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar menuBtn = {\n  open: {\n    opacity: 1,\n    overflow: 'no-scroll',\n    width: '100%',\n    //maxWidth: '350px',\n    height: '360px',\n    backgroundColor: 'pink',\n    position: 'fixed',\n    transition: {\n      width: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      },\n      height: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      }\n    }\n  },\n  closed: {\n    width: '50px',\n    height: '50px',\n    position: 'relative',\n    backgroundColor: 'pink',\n    opacity: 1,\n    transition: {\n      width: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      },\n      height: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      }\n    }\n  }\n};\nvar menuVariants = {\n  open: {\n    opacity: 1,\n    display: 'block',\n    overflow: 'no-scroll',\n    width: 'auto',\n    height: 'auto',\n    transition: {\n      opacity: {\n        delay: 0.1,\n        duration: 0.3,\n        ease: \"easeIn\"\n      }\n    }\n  },\n  closed: {\n    opacity: 0,\n    display: 'none',\n    transition: {\n      opacity: {\n        duration: 0.07\n      }\n    }\n  }\n};\nvar backDim = {\n  open: {\n    opacity: 0.2,\n    overflow: 'no-scroll',\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'block',\n    backgroundColor: '#FB9271',\n    zIndex: 1,\n    //filter: 'blur(10px)',\n    transition: {\n      opacity: {\n        duration: 0.5\n      } //filter: {duration: 0.1, tween: 10}\n\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'none',\n    backgroundColor: 'none',\n    zIndex: -10,\n    transition: {\n      opacity: {\n        duration: 0.4\n      }\n    }\n  }\n};\n\nvar Nav = function Nav() {\n  _s();\n\n  /*\n   const [state, setState] = useState(false)\n  this.targetElement = document.querySelector('html')\n  const x = useSpring(0, { opacity: 0 })\n  useEffect(() => {\n    state\n    ? targetElement.classList.add(\"no-scroll\")\n    : targetElement.classList.remove(\"no-scroll\")\n  })\n  \n  useEffect(() => {\n    x.onChange(() => {\n      x.get() > 1 ? setState(false) : setState(true)\n    })\n  }, [x])\n  \n  */\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"])(false, true),\n      _useCycle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCycle, 2),\n      isOpen = _useCycle2[0],\n      toggleOpen = _useCycle2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      className: \"mobile_nav\",\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: menuBtn //ref={el => menu = el}\n      ,\n      onClick: function onClick() {\n        toggleOpen();\n      } //onClick={() => { menuToggle(), toggleOpen() }}\n      //toggle={() => { toggleOpen() }}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_NavToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        variants: menuVariants,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n          className: \"nav_menu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: backDim,\n      onClick: function onClick() {\n        toggleOpen();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Nav, \"+wbUvvGXeT7WCWUG5HoDDMwmX2w=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJtZW51QnRuIiwib3BlbiIsIm9wYWNpdHkiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHdlZW4iLCJkdXJhdGlvbiIsImVhc2UiLCJjbG9zZWQiLCJtZW51VmFyaWFudHMiLCJkaXNwbGF5IiwiZGVsYXkiLCJiYWNrRGltIiwidG9wIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwiekluZGV4IiwiTmF2IiwidXNlQ3ljbGUiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsQ0FETDtBQUVKQyxZQUFRLEVBQUUsV0FGTjtBQUdKQyxTQUFLLEVBQUUsTUFISDtBQUlKO0FBQ0FDLFVBQU0sRUFBRSxPQUxKO0FBTUpDLG1CQUFlLEVBQUUsTUFOYjtBQU9KQyxZQUFRLEVBQUUsT0FQTjtBQVFKQyxjQUFVLEVBQUU7QUFDVkosV0FBSyxFQUFFO0FBQUNLLGFBQUssRUFBRSxHQUFSO0FBQWFDLGdCQUFRLEVBQUUsSUFBdkI7QUFBNkJDLFlBQUksRUFBRTtBQUFuQyxPQURHO0FBRVZOLFlBQU0sRUFBRTtBQUFDSSxhQUFLLEVBQUUsR0FBUjtBQUFhQyxnQkFBUSxFQUFFLElBQXZCO0FBQTZCQyxZQUFJLEVBQUU7QUFBbkM7QUFGRTtBQVJSLEdBRFE7QUFjZEMsUUFBTSxFQUFFO0FBQ05SLFNBQUssRUFBRSxNQUREO0FBRU5DLFVBQU0sRUFBRSxNQUZGO0FBR05FLFlBQVEsRUFBRSxVQUhKO0FBSU5ELG1CQUFlLEVBQUUsTUFKWDtBQUtOSixXQUFPLEVBQUUsQ0FMSDtBQU1OTSxjQUFVLEVBQUU7QUFDVkosV0FBSyxFQUFFO0FBQUNLLGFBQUssRUFBRSxHQUFSO0FBQWFDLGdCQUFRLEVBQUUsR0FBdkI7QUFBNEJDLFlBQUksRUFBRTtBQUFsQyxPQURHO0FBRVZOLFlBQU0sRUFBRTtBQUFDSSxhQUFLLEVBQUUsR0FBUjtBQUFhQyxnQkFBUSxFQUFFLEdBQXZCO0FBQTRCQyxZQUFJLEVBQUU7QUFBbEM7QUFGRTtBQU5OO0FBZE0sQ0FBaEI7QUEwQkEsSUFBTUUsWUFBWSxHQUFHO0FBQ25CWixNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLENBREw7QUFFSlksV0FBTyxFQUFFLE9BRkw7QUFHSlgsWUFBUSxFQUFFLFdBSE47QUFJSkMsU0FBSyxFQUFFLE1BSkg7QUFLSkMsVUFBTSxFQUFFLE1BTEo7QUFNSkcsY0FBVSxFQUFFO0FBQ1ZOLGFBQU8sRUFBRTtBQUFFYSxhQUFLLEVBQUUsR0FBVDtBQUFjTCxnQkFBUSxFQUFFLEdBQXhCO0FBQTZCQyxZQUFJLEVBQUU7QUFBbkM7QUFEQztBQU5SLEdBRGE7QUFXbkJDLFFBQU0sRUFBRTtBQUNOVixXQUFPLEVBQUUsQ0FESDtBQUVOWSxXQUFPLEVBQUUsTUFGSDtBQUdOTixjQUFVLEVBQUU7QUFDVk4sYUFBTyxFQUFFO0FBQUVRLGdCQUFRLEVBQUU7QUFBWjtBQURDO0FBSE47QUFYVyxDQUFyQjtBQW1CQSxJQUFNTSxPQUFPLEdBQUc7QUFDZGYsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxHQURMO0FBRUpDLFlBQVEsRUFBRSxXQUZOO0FBR0pDLFNBQUssRUFBRSxNQUhIO0FBSUpDLFVBQU0sRUFBRSxNQUpKO0FBS0pFLFlBQVEsRUFBRSxPQUxOO0FBTUpVLE9BQUcsRUFBRSxLQU5EO0FBT0pDLFVBQU0sRUFBRSxLQVBKO0FBUUpDLFNBQUssRUFBRSxLQVJIO0FBU0pDLFFBQUksRUFBRSxLQVRGO0FBVUpOLFdBQU8sRUFBRSxPQVZMO0FBV0pSLG1CQUFlLEVBQUUsU0FYYjtBQVlKZSxVQUFNLEVBQUUsQ0FaSjtBQWFKO0FBQ0FiLGNBQVUsRUFBRTtBQUNWTixhQUFPLEVBQUU7QUFBQ1EsZ0JBQVEsRUFBRTtBQUFYLE9BREMsQ0FFVjs7QUFGVTtBQWRSLEdBRFE7QUFvQmRFLFFBQU0sRUFBRTtBQUNOVixXQUFPLEVBQUUsQ0FESDtBQUVORSxTQUFLLEVBQUUsTUFGRDtBQUdOQyxVQUFNLEVBQUUsTUFIRjtBQUlORSxZQUFRLEVBQUUsT0FKSjtBQUtOVSxPQUFHLEVBQUUsS0FMQztBQU1OQyxVQUFNLEVBQUUsS0FORjtBQU9OQyxTQUFLLEVBQUUsS0FQRDtBQVFOQyxRQUFJLEVBQUUsS0FSQTtBQVNOTixXQUFPLEVBQUUsTUFUSDtBQVVOUixtQkFBZSxFQUFFLE1BVlg7QUFXTmUsVUFBTSxFQUFFLENBQUMsRUFYSDtBQVlOYixjQUFVLEVBQUU7QUFDVk4sYUFBTyxFQUFFO0FBQUNRLGdCQUFRLEVBQUU7QUFBWDtBQURDO0FBWk47QUFwQk0sQ0FBaEI7O0FBc0NBLElBQU1ZLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDaEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCa0Isa0JBb0JhQyw4REFBUSxDQUFDLEtBQUQsRUFBUSxJQUFSLENBcEJyQjtBQUFBO0FBQUEsTUFvQlRDLE1BcEJTO0FBQUEsTUFvQkRDLFVBcEJDOztBQXNCaEIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxlQUFTLEVBQUMsWUFEWjtBQUVFLGFBQU8sRUFBRSxLQUZYO0FBR0UsYUFBTyxFQUFFRCxNQUFNLEdBQUcsTUFBSCxHQUFZLFFBSDdCO0FBSUUsY0FBUSxFQUFHeEIsT0FKYixDQUtFO0FBTEY7QUFNRSxhQUFPLEVBQUUsbUJBQU07QUFBRXlCLGtCQUFVO0FBQUksT0FOakMsQ0FPRTtBQUNBO0FBUkY7QUFBQSw4QkFVRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFXRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxnQkFBUSxFQUFHWixZQUF2QjtBQUFBLCtCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLG1CQUFTLEVBQUMsVUFBdEI7QUFBQSxpQ0FDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtCRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFPLEVBQUUsS0FEWDtBQUVFLGFBQU8sRUFBRVcsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQUY3QjtBQUdFLGNBQVEsRUFBR1IsT0FIYjtBQUlFLGFBQU8sRUFBRSxtQkFBTTtBQUFFUyxrQkFBVTtBQUFJO0FBSmpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQSxrQkFERjtBQTJCRCxDQWpERDs7R0FBTUgsRztVQW9CeUJDLHNEOzs7S0FwQnpCRCxHO0FBbURTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VDeWNsZSwgdXNlU3ByaW5nIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBOYXZUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZUb2dnbGUnXG5pbXBvcnQgTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rcydcblxuY29uc3QgbWVudUJ0biA9IHtcbiAgb3Blbjoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgb3ZlcmZsb3c6ICduby1zY3JvbGwnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgLy9tYXhXaWR0aDogJzM1MHB4JyxcbiAgICBoZWlnaHQ6ICczNjBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncGluaycsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgd2lkdGg6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xNSwgZWFzZTogJ2Vhc2VJbid9LFxuICAgICAgaGVpZ2h0OiB7dHdlZW46IDEwMCwgZHVyYXRpb246IDAuMTUsIGVhc2U6ICdlYXNlSW4nfSAgICAgIFxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgd2lkdGg6ICc1MHB4JyxcbiAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwaW5rJyxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHdpZHRoOiB7dHdlZW46IDEwMCwgZHVyYXRpb246IDAuMSwgZWFzZTogJ2Vhc2VPdXQnfSxcbiAgICAgIGhlaWdodDoge3R3ZWVuOiAxMDAsIGR1cmF0aW9uOiAwLjEsIGVhc2U6ICdlYXNlT3V0J31cbiAgICB9XG4gIH1cbn1cbmNvbnN0IG1lbnVWYXJpYW50cyA9IHtcbiAgb3Blbjoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ25vLXNjcm9sbCcsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7IGRlbGF5OiAwLjEsIGR1cmF0aW9uOiAwLjMsIGVhc2U6IFwiZWFzZUluXCIgfSAgICAgIFxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4wNyB9XG4gICAgfVxuICB9XG59XG5jb25zdCBiYWNrRGltID0ge1xuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMC4yLFxuICAgIG92ZXJmbG93OiAnbm8tc2Nyb2xsJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzBweCcsXG4gICAgYm90dG9tOiAnMHB4JyxcbiAgICByaWdodDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkI5MjcxJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgLy9maWx0ZXI6ICdibHVyKDEwcHgpJyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuNX1cbiAgICAgIC8vZmlsdGVyOiB7ZHVyYXRpb246IDAuMSwgdHdlZW46IDEwfVxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzBweCcsXG4gICAgYm90dG9tOiAnMHB4JyxcbiAgICByaWdodDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ25vbmUnLFxuICAgIHpJbmRleDogLTEwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC40fVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIC8qXG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdGhpcy50YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gIGNvbnN0IHggPSB1c2VTcHJpbmcoMCwgeyBvcGFjaXR5OiAwIH0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGVcbiAgICA/IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKVxuICAgIDogdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpXG4gIH0pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHgub25DaGFuZ2UoKCkgPT4ge1xuICAgICAgeC5nZXQoKSA+IDEgPyBzZXRTdGF0ZShmYWxzZSkgOiBzZXRTdGF0ZSh0cnVlKVxuICAgIH0pXG4gIH0sIFt4XSlcbiAgXG4gICovXG5cbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLm5hdlxuICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGVfbmF2XCJcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgdmFyaWFudHM9eyBtZW51QnRuIH1cbiAgICAgICAgLy9yZWY9e2VsID0+IG1lbnUgPSBlbH1cbiAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGVPcGVuKCkgfX1cbiAgICAgICAgLy9vbkNsaWNrPXsoKSA9PiB7IG1lbnVUb2dnbGUoKSwgdG9nZ2xlT3BlbigpIH19XG4gICAgICAgIC8vdG9nZ2xlPXsoKSA9PiB7IHRvZ2dsZU9wZW4oKSB9fVxuICAgICAgPlxuICAgICAgICA8TmF2VG9nZ2xlIC8+XG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXsgbWVudVZhcmlhbnRzIH0+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibmF2X21lbnVcIj5cbiAgICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24ubmF2PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0gXG4gICAgICAgIHZhcmlhbnRzPXsgYmFja0RpbSB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlT3BlbigpIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdiAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})