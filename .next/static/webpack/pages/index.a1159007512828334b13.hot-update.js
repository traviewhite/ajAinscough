webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _components_NavToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavToggle */ \"./components/NavToggle.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/traviewhite/dev/ajainscough/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar menuBtn = {\n  open: {\n    opacity: 1,\n    transition: {\n      width: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      },\n      height: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      }\n    }\n  },\n  closed: {\n    opacity: 1,\n    transition: {\n      width: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      },\n      height: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      }\n    }\n  }\n};\nvar menuVariants = {\n  open: {\n    opacity: 1,\n    width: 'auto',\n    height: '360px',\n    display: 'block',\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    left: 0,\n    bottom: 0,\n    backgroundColor: 'pink',\n    overflow: 'no-scroll',\n    transition: {\n      opacity: {\n        delay: 0.1,\n        duration: 0.3,\n        ease: \"easeIn\"\n      }\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: 'auto',\n    height: 'auto',\n    display: 'none',\n    position: 'none',\n    backgroundColor: 'pink',\n    transition: {\n      opacity: {\n        duration: 0.07\n      }\n    }\n  }\n};\nvar backDim = {\n  open: {\n    opacity: 0.2,\n    overflow: 'no-scroll',\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'block',\n    backgroundColor: '#FB9271',\n    zIndex: 1,\n    //filter: 'blur(10px)',\n    transition: {\n      opacity: {\n        duration: 0.5\n      } //filter: {duration: 0.1, tween: 10}\n\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'none',\n    backgroundColor: 'none',\n    zIndex: -10,\n    transition: {\n      opacity: {\n        duration: 0.4\n      }\n    }\n  }\n};\n\nvar Nav = function Nav() {\n  _s();\n\n  /*\n   const [state, setState] = useState(false)\n  this.targetElement = document.querySelector('html')\n  const x = useSpring(0, { opacity: 0 })\n  useEffect(() => {\n    state\n    ? targetElement.classList.add(\"no-scroll\")\n    : targetElement.classList.remove(\"no-scroll\")\n  })\n  \n  useEffect(() => {\n    x.onChange(() => {\n      x.get() > 1 ? setState(false) : setState(true)\n    })\n  }, [x])\n  \n  */\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"])(false, true),\n      _useCycle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCycle, 2),\n      isOpen = _useCycle2[0],\n      toggleOpen = _useCycle2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      className: \"mobile_nav\",\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: menuBtn //ref={el => menu = el}\n      ,\n      onClick: function onClick() {\n        toggleOpen();\n      } //onClick={() => { menuToggle(), toggleOpen() }}\n      //toggle={() => { toggleOpen() }}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_NavToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        variants: menuVariants,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n          className: \"nav_menu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: backDim,\n      onClick: function onClick() {\n        toggleOpen();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Nav, \"+wbUvvGXeT7WCWUG5HoDDMwmX2w=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJtZW51QnRuIiwib3BlbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJ0d2VlbiIsImR1cmF0aW9uIiwiZWFzZSIsImhlaWdodCIsImNsb3NlZCIsIm1lbnVWYXJpYW50cyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93IiwiZGVsYXkiLCJiYWNrRGltIiwiekluZGV4IiwiTmF2IiwidXNlQ3ljbGUiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsQ0FETDtBQUVKQyxjQUFVLEVBQUU7QUFDVkMsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRSxHQUFSO0FBQWFDLGdCQUFRLEVBQUUsSUFBdkI7QUFBNkJDLFlBQUksRUFBRTtBQUFuQyxPQURHO0FBRVZDLFlBQU0sRUFBRTtBQUFDSCxhQUFLLEVBQUUsR0FBUjtBQUFhQyxnQkFBUSxFQUFFLElBQXZCO0FBQTZCQyxZQUFJLEVBQUU7QUFBbkM7QUFGRTtBQUZSLEdBRFE7QUFRZEUsUUFBTSxFQUFFO0FBQ05QLFdBQU8sRUFBRSxDQURIO0FBRU5DLGNBQVUsRUFBRTtBQUNWQyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFFLEdBQVI7QUFBYUMsZ0JBQVEsRUFBRSxHQUF2QjtBQUE0QkMsWUFBSSxFQUFFO0FBQWxDLE9BREc7QUFFVkMsWUFBTSxFQUFFO0FBQUNILGFBQUssRUFBRSxHQUFSO0FBQWFDLGdCQUFRLEVBQUUsR0FBdkI7QUFBNEJDLFlBQUksRUFBRTtBQUFsQztBQUZFO0FBRk47QUFSTSxDQUFoQjtBQWdCQSxJQUFNRyxZQUFZ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QyxvREFBRCxDQUFRLEdBQVI7QUFBWSxnQkFBUSxFQUFHZixZQUF2QjtBQUFBLCtCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLG1CQUFTLEVBQUMsVUFBdEI7QUFBQSxpQ0FDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtCRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFPLEVBQUUsS0FEWDtBQUVFLGFBQU8sRUFBRWMsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQUY3QjtBQUdFLGNBQVEsRUFBR0osT0FIYjtBQUlFLGFBQU8sRUFBRSxtQkFBTTtBQUFFSyxrQkFBVTtBQUFJO0FBSmpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQSxrQkFERjtBQTJCRCxDQWpERDs7R0FBTUgsRztVQW9CeUJDLHNEOzs7S0FwQnpCRCxHO0FBbURTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VDeWNsZSwgdXNlU3ByaW5nIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBOYXZUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZUb2dnbGUnXG5pbXBvcnQgTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rcydcblxuY29uc3QgbWVudUJ0biA9IHtcbiAgb3Blbjoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgd2lkdGg6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xNSwgZWFzZTogJ2Vhc2VJbid9LFxuICAgICAgaGVpZ2h0OiB7dHdlZW46IDEwMCwgZHVyYXRpb246IDAuMTUsIGVhc2U6ICdlYXNlSW4nfSAgICAgIFxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB3aWR0aDoge3R3ZWVuOiAxMDAsIGR1cmF0aW9uOiAwLjEsIGVhc2U6ICdlYXNlT3V0J30sXG4gICAgICBoZWlnaHQ6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xLCBlYXNlOiAnZWFzZU91dCd9XG4gICAgfVxuICB9XG59XG5jb25zdCBtZW51VmFyaWFudHMgPSB7XG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaGVpZ2h0OiAnMzYwcHgnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3BpbmsnLFxuICAgIG92ZXJmbG93OiAnbm8tc2Nyb2xsJyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7IGRlbGF5OiAwLjEsIGR1cmF0aW9uOiAwLjMsIGVhc2U6IFwiZWFzZUluXCIgfSAgICAgIFxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3BpbmsnLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMDcgfVxuICAgIH1cbiAgfVxufVxuY29uc3QgYmFja0RpbSA9IHtcbiAgb3Blbjoge1xuICAgIG9wYWNpdHk6IDAuMixcbiAgICBvdmVyZmxvdzogJ25vLXNjcm9sbCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGJvdHRvbTogJzBweCcsXG4gICAgcmlnaHQ6ICcwcHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZCOTI3MScsXG4gICAgekluZGV4OiAxLFxuICAgIC8vZmlsdGVyOiAnYmx1cigxMHB4KScsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjV9XG4gICAgICAvL2ZpbHRlcjoge2R1cmF0aW9uOiAwLjEsIHR3ZWVuOiAxMH1cbiAgICB9XG4gIH0sXG4gIGNsb3NlZDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGJvdHRvbTogJzBweCcsXG4gICAgcmlnaHQ6ICcwcHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyxcbiAgICB6SW5kZXg6IC0xMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuNH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAvKlxuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHRoaXMudGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuICBjb25zdCB4ID0gdXNlU3ByaW5nKDAsIHsgb3BhY2l0eTogMCB9KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlXG4gICAgPyB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxcIilcbiAgICA6IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKVxuICB9KVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB4Lm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgIHguZ2V0KCkgPiAxID8gc2V0U3RhdGUoZmFsc2UpIDogc2V0U3RhdGUodHJ1ZSlcbiAgICB9KVxuICB9LCBbeF0pXG4gIFxuICAqL1xuXG4gIGNvbnN0IFtpc09wZW4sIHRvZ2dsZU9wZW5dID0gdXNlQ3ljbGUoZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5uYXZcbiAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlX25hdlwiXG4gICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgIHZhcmlhbnRzPXsgbWVudUJ0biB9XG4gICAgICAgIC8vcmVmPXtlbCA9PiBtZW51ID0gZWx9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlT3BlbigpIH19XG4gICAgICAgIC8vb25DbGljaz17KCkgPT4geyBtZW51VG9nZ2xlKCksIHRvZ2dsZU9wZW4oKSB9fVxuICAgICAgICAvL3RvZ2dsZT17KCkgPT4geyB0b2dnbGVPcGVuKCkgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdlRvZ2dsZSAvPlxuICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17IG1lbnVWYXJpYW50cyB9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm5hdl9tZW51XCI+XG4gICAgICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvbW90aW9uLm5hdj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9IFxuICAgICAgICB2YXJpYW50cz17IGJhY2tEaW0gfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZU9wZW4oKSB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXYgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})