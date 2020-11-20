webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _components_NavToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavToggle */ \"./components/NavToggle.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/traviewhite/dev/ajainscough/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar menuBtn = {\n  open: {\n    opacity: 1,\n    overflow: 'no-scroll',\n    width: '350px',\n    //maxWidth: '350px',\n    height: '560px',\n    transition: {\n      width: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      },\n      height: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      }\n    }\n  },\n  closed: {\n    width: '60px',\n    height: '60px',\n    opacity: 1,\n    transition: {\n      width: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      },\n      height: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      }\n    }\n  }\n};\nvar menuVariants = {\n  open: {\n    opacity: 1,\n    display: 'block',\n    overflow: 'no-scroll',\n    width: 'auto',\n    height: 'auto',\n    transition: {\n      opacity: {\n        delay: 0.1,\n        duration: 0.3,\n        ease: \"easeIn\"\n      }\n    }\n  },\n  closed: {\n    opacity: 0,\n    display: 'none',\n    transition: {\n      opacity: {\n        duration: 0.07\n      }\n    }\n  }\n};\nvar backDim = {\n  open: {\n    opacity: 0.4,\n    overflow: 'no-scroll',\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'block',\n    backgroundColor: '#FB9271',\n    zIndex: 0,\n    //filter: 'blur(10px)',\n    transition: {\n      opacity: {\n        duration: 0.5\n      } //filter: {duration: 0.1, tween: 10}\n\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'none',\n    backgroundColor: 'none',\n    zIndex: -10,\n    transition: {\n      opacity: {\n        duration: 0.4\n      }\n    }\n  }\n};\n\nvar Nav = function Nav() {\n  _s();\n\n  /*\n   const [state, setState] = useState(false)\n  this.targetElement = document.querySelector('html')\n  const x = useSpring(0, { opacity: 0 })\n  useEffect(() => {\n    state\n    ? targetElement.classList.add(\"no-scroll\")\n    : targetElement.classList.remove(\"no-scroll\")\n  })\n  \n  useEffect(() => {\n    x.onChange(() => {\n      x.get() > 1 ? setState(false) : setState(true)\n    })\n  }, [x])\n  \n  */\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"])(false, true),\n      _useCycle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCycle, 2),\n      isOpen = _useCycle2[0],\n      toggleOpen = _useCycle2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      className: \"mobile_nav\",\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: menuBtn //ref={el => menu = el}\n      ,\n      onClick: function onClick() {\n        toggleOpen();\n      } //onClick={() => { menuToggle(), toggleOpen() }}\n      //toggle={() => { toggleOpen() }}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_NavToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        variants: menuVariants,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n          className: \"nav_menu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: backDim,\n      onClick: function onClick() {\n        toggleOpen();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Nav, \"+wbUvvGXeT7WCWUG5HoDDMwmX2w=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJtZW51QnRuIiwib3BlbiIsIm9wYWNpdHkiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInR3ZWVuIiwiZHVyYXRpb24iLCJlYXNlIiwiY2xvc2VkIiwibWVudVZhcmlhbnRzIiwiZGlzcGxheSIsImRlbGF5IiwiYmFja0RpbSIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiTmF2IiwidXNlQ3ljbGUiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsQ0FETDtBQUVKQyxZQUFRLEVBQUUsV0FGTjtBQUdKQyxTQUFLLEVBQUUsT0FISDtBQUlKO0FBQ0FDLFVBQU0sRUFBRSxPQUxKO0FBTUpDLGNBQVUsRUFBRTtBQUNWRixXQUFLLEVBQUU7QUFBQ0csYUFBSyxFQUFFLEdBQVI7QUFBYUMsZ0JBQVEsRUFBRSxJQUF2QjtBQUE2QkMsWUFBSSxFQUFFO0FBQW5DLE9BREc7QUFFVkosWUFBTSxFQUFFO0FBQUNFLGFBQUssRUFBRSxHQUFSO0FBQWFDLGdCQUFRLEVBQUUsSUFBdkI7QUFBNkJDLFlBQUksRUFBRTtBQUFuQztBQUZFO0FBTlIsR0FEUTtBQVlkQyxRQUFNLEVBQUU7QUFDTk4sU0FBSyxFQUFFLE1BREQ7QUFFTkMsVUFBTSxFQUFFLE1BRkY7QUFHTkgsV0FBTyxFQUFFLENBSEg7QUFJTkksY0FBVSxFQUFFO0FBQ1ZGLFdBQUssRUFBRTtBQUFDRyxhQUFLLEVBQUUsR0FBUjtBQUFhQyxnQkFBUSxFQUFFLEdBQXZCO0FBQTRCQyxZQUFJLEVBQUU7QUFBbEMsT0FERztBQUVWSixZQUFN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QUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBTyxFQUFFLEtBRFg7QUFFRSxhQUFPLEVBQUVhLE1BQU0sR0FBRyxNQUFILEdBQVksUUFGN0I7QUFHRSxjQUFRLEVBQUdWLE9BSGI7QUFJRSxhQUFPLEVBQUUsbUJBQU07QUFBRVcsa0JBQVU7QUFBSTtBQUpqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUEsa0JBREY7QUEyQkQsQ0FqREQ7O0dBQU1ILEc7VUFvQnlCQyxzRDs7O0tBcEJ6QkQsRztBQW1EU0Esa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlQ3ljbGUsIHVzZVNwcmluZyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgTmF2VG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2VG9nZ2xlJ1xuaW1wb3J0IExpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua3MnXG5cbmNvbnN0IG1lbnVCdG4gPSB7XG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIG92ZXJmbG93OiAnbm8tc2Nyb2xsJyxcbiAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAvL21heFdpZHRoOiAnMzUwcHgnLFxuICAgIGhlaWdodDogJzU2MHB4JyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB3aWR0aDoge3R3ZWVuOiAxMDAsIGR1cmF0aW9uOiAwLjE1LCBlYXNlOiAnZWFzZUluJ30sXG4gICAgICBoZWlnaHQ6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xNSwgZWFzZTogJ2Vhc2VJbid9ICAgICAgXG4gICAgfVxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICB3aWR0aDogJzYwcHgnLFxuICAgIGhlaWdodDogJzYwcHgnLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgd2lkdGg6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xLCBlYXNlOiAnZWFzZU91dCd9LFxuICAgICAgaGVpZ2h0OiB7dHdlZW46IDEwMCwgZHVyYXRpb246IDAuMSwgZWFzZTogJ2Vhc2VPdXQnfVxuICAgIH1cbiAgfVxufVxuY29uc3QgbWVudVZhcmlhbnRzID0ge1xuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnbm8tc2Nyb2xsJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHsgZGVsYXk6IDAuMSwgZHVyYXRpb246IDAuMywgZWFzZTogXCJlYXNlSW5cIiB9ICAgICAgXG4gICAgfVxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7IGR1cmF0aW9uOiAwLjA3IH1cbiAgICB9XG4gIH1cbn1cbmNvbnN0IGJhY2tEaW0gPSB7XG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAwLjQsXG4gICAgb3ZlcmZsb3c6ICduby1zY3JvbGwnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBib3R0b206ICcwcHgnLFxuICAgIHJpZ2h0OiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGQjkyNzEnLFxuICAgIHpJbmRleDogMCxcbiAgICAvL2ZpbHRlcjogJ2JsdXIoMTBweCknLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC41fVxuICAgICAgLy9maWx0ZXI6IHtkdXJhdGlvbjogMC4xLCB0d2VlbjogMTB9XG4gICAgfVxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBib3R0b206ICcwcHgnLFxuICAgIHJpZ2h0OiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnbm9uZScsXG4gICAgekluZGV4OiAtMTAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjR9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgLypcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcbiAgY29uc3QgeCA9IHVzZVNwcmluZygwLCB7IG9wYWNpdHk6IDAgfSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZVxuICAgID8gdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpXG4gICAgOiB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIilcbiAgfSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgeC5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICB4LmdldCgpID4gMSA/IHNldFN0YXRlKGZhbHNlKSA6IHNldFN0YXRlKHRydWUpXG4gICAgfSlcbiAgfSwgW3hdKVxuICBcbiAgKi9cblxuICBjb25zdCBbaXNPcGVuLCB0b2dnbGVPcGVuXSA9IHVzZUN5Y2xlKGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtb3Rpb24ubmF2XG4gICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZV9uYXZcIlxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICB2YXJpYW50cz17IG1lbnVCdG4gfVxuICAgICAgICAvL3JlZj17ZWwgPT4gbWVudSA9IGVsfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZU9wZW4oKSB9fVxuICAgICAgICAvL29uQ2xpY2s9eygpID0+IHsgbWVudVRvZ2dsZSgpLCB0b2dnbGVPcGVuKCkgfX1cbiAgICAgICAgLy90b2dnbGU9eygpID0+IHsgdG9nZ2xlT3BlbigpIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZUb2dnbGUgLz5cbiAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9eyBtZW51VmFyaWFudHMgfT5cbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJuYXZfbWVudVwiPlxuICAgICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21vdGlvbi5uYXY+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifSBcbiAgICAgICAgdmFyaWFudHM9eyBiYWNrRGltIH1cbiAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGVPcGVuKCkgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})