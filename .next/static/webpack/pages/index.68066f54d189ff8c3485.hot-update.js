webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _components_NavToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavToggle */ \"./components/NavToggle.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/traviewhite/dev/ajainscough/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar menuBtn = {\n  open: {\n    opacity: 1\n  },\n  closed: {\n    opacity: 1\n  }\n};\nvar menuVariants = {\n  open: {\n    opacity: 1,\n    width: '100%',\n    height: '360px',\n    display: 'block',\n    position: 'fixed',\n    top: 0,\n    right: 0,\n    left: 0,\n    backgroundColor: '#e8e8e8',\n    overflow: 'no-scroll',\n    transition: {\n      opacity: {\n        duration: 0.2,\n        ease: \"easeIn\"\n      },\n      width: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      },\n      height: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      }\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '10px',\n    height: '10px',\n    display: 'none',\n    position: 'absolute',\n    top: 0,\n    backgroundColor: '#e8e8e8',\n    transition: {\n      opacity: {\n        duration: 0.07\n      },\n      width: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      },\n      height: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      }\n    }\n  }\n};\nvar backDim = {\n  open: {\n    opacity: 0.4,\n    overflow: 'no-scroll',\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'block',\n    backgroundColor: 'black',\n    zIndex: 1,\n    //filter: 'blur(10px)',\n    transition: {\n      opacity: {\n        duration: 0.5\n      } //filter: {duration: 0.1, tween: 10}\n\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'none',\n    backgroundColor: 'none',\n    zIndex: -10,\n    transition: {\n      opacity: {\n        duration: 0.4\n      }\n    }\n  }\n};\n\nvar Nav = function Nav() {\n  _s();\n\n  /*\n   const [state, setState] = useState(false)\n  this.targetElement = document.querySelector('html')\n  const x = useSpring(0, { opacity: 0 })\n  useEffect(() => {\n    state\n    ? targetElement.classList.add(\"no-scroll\")\n    : targetElement.classList.remove(\"no-scroll\")\n  })\n  \n  useEffect(() => {\n    x.onChange(() => {\n      x.get() > 1 ? setState(false) : setState(true)\n    })\n  }, [x])\n  \n  */\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"])(false, true),\n      _useCycle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCycle, 2),\n      isOpen = _useCycle2[0],\n      toggleOpen = _useCycle2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      className: \"mobile_nav\",\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: menuBtn //ref={el => menu = el}\n      ,\n      onClick: function onClick() {\n        toggleOpen();\n      } //onClick={() => { menuToggle(), toggleOpen() }}\n      //toggle={() => { toggleOpen() }}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_NavToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        variants: menuVariants,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"mobile_social\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \"instagram\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            children: \"@ajainscoughstudio\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: backDim,\n      onClick: function onClick() {\n        toggleOpen();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Nav, \"+wbUvvGXeT7WCWUG5HoDDMwmX2w=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJtZW51QnRuIiwib3BlbiIsIm9wYWNpdHkiLCJjbG9zZWQiLCJtZW51VmFyaWFudHMiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInR3ZWVuIiwiYmFja0RpbSIsImJvdHRvbSIsInpJbmRleCIsIk5hdiIsInVzZUN5Y2xlIiwiaXNPcGVuIiwidG9nZ2xlT3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFO0FBREwsR0FEUTtBQUlkQyxRQUFNLEVBQUU7QUFDTkQsV0FBTyxFQUFFO0FBREg7QUFKTSxDQUFoQjtBQVFBLElBQU1FLFlBQVksR0FBRztBQUNuQkgsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxDQURMO0FBRUpHLFNBQUssRUFBRSxNQUZIO0FBR0pDLFVBQU0sRUFBRSxPQUhKO0FBSUpDLFdBQU8sRUFBRSxPQUpMO0FBS0pDLFlBQVEsRUFBRSxPQUxOO0FBTUpDLE9BQUcsRUFBRSxDQU5EO0FBT0pDLFNBQUssRUFBRSxDQVBIO0FBUUpDLFFBQUksRUFBRSxDQVJGO0FBU0pDLG1CQUFlLEVBQUUsU0FUYjtBQVVKQyxZQUFRLEVBQUUsV0FWTjtBQVdKQyxjQUFVLEVBQUU7QUFDVlosYUFBTyxFQUFFO0FBQUVhLGdCQUFRLEVBQUUsR0FBWjtBQUFpQkMsWUFBSSxFQUFFO0FBQXZCLE9BREM7QUFFVlgsV0FBSyxFQUFFO0FBQUNZLGFBQUssRUFBRSxHQUFSO0FBQWFGLGdCQUFRLEVBQUUsR0FBdkI7QUFBNEJDLFlBQUksRUFBRTtBQUFsQyxPQUZH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QTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQW9CRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFPLEVBQUUsS0FEWDtBQUVFLGFBQU8sRUFBRW1CLE1BQU0sR0FBRyxNQUFILEdBQVksUUFGN0I7QUFHRSxjQUFRLEVBQUdMLE9BSGI7QUFJRSxhQUFPLEVBQUUsbUJBQU07QUFBRU0sa0JBQVU7QUFBSTtBQUpqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGO0FBQUEsa0JBREY7QUE2QkQsQ0FuREQ7O0dBQU1ILEc7VUFvQnlCQyxzRDs7O0tBcEJ6QkQsRztBQXFEU0Esa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlQ3ljbGUsIHVzZVNwcmluZyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgTmF2VG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2VG9nZ2xlJ1xuaW1wb3J0IExpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua3MnXG5cbmNvbnN0IG1lbnVCdG4gPSB7XG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAxLFxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICBvcGFjaXR5OiAxLFxuICB9XG59XG5jb25zdCBtZW51VmFyaWFudHMgPSB7XG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMzYwcHgnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2U4ZThlOCcsXG4gICAgb3ZlcmZsb3c6ICduby1zY3JvbGwnLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMiwgZWFzZTogXCJlYXNlSW5cIiB9LFxuICAgICAgd2lkdGg6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xLCBlYXNlOiAnZWFzZU91dCd9LFxuICAgICAgaGVpZ2h0OiB7dHdlZW46IDEwMCwgZHVyYXRpb246IDAuMSwgZWFzZTogJ2Vhc2VPdXQnfSBcbiAgICB9XG4gIH0sXG4gIGNsb3NlZDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlOGU4ZTgnLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMDcgfSxcbiAgICAgIHdpZHRoOiB7dHdlZW46IDEwMCwgZHVyYXRpb246IDAuMTUsIGVhc2U6ICdlYXNlSW4nfSxcbiAgICAgIGhlaWdodDoge3R3ZWVuOiAxMDAsIGR1cmF0aW9uOiAwLjE1LCBlYXNlOiAnZWFzZUluJ31cbiAgICB9XG4gIH1cbn1cbmNvbnN0IGJhY2tEaW0gPSB7XG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAwLjQsXG4gICAgb3ZlcmZsb3c6ICduby1zY3JvbGwnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBib3R0b206ICcwcHgnLFxuICAgIHJpZ2h0OiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgLy9maWx0ZXI6ICdibHVyKDEwcHgpJyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuNX1cbiAgICAgIC8vZmlsdGVyOiB7ZHVyYXRpb246IDAuMSwgdHdlZW46IDEwfVxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzBweCcsXG4gICAgYm90dG9tOiAnMHB4JyxcbiAgICByaWdodDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ25vbmUnLFxuICAgIHpJbmRleDogLTEwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC40fVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIC8qXG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdGhpcy50YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gIGNvbnN0IHggPSB1c2VTcHJpbmcoMCwgeyBvcGFjaXR5OiAwIH0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGVcbiAgICA/IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKVxuICAgIDogdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpXG4gIH0pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHgub25DaGFuZ2UoKCkgPT4ge1xuICAgICAgeC5nZXQoKSA+IDEgPyBzZXRTdGF0ZShmYWxzZSkgOiBzZXRTdGF0ZSh0cnVlKVxuICAgIH0pXG4gIH0sIFt4XSlcbiAgXG4gICovXG5cbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLm5hdlxuICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGVfbmF2XCJcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgdmFyaWFudHM9eyBtZW51QnRuIH1cbiAgICAgICAgLy9yZWY9e2VsID0+IG1lbnUgPSBlbH1cbiAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGVPcGVuKCkgfX1cbiAgICAgICAgLy9vbkNsaWNrPXsoKSA9PiB7IG1lbnVUb2dnbGUoKSwgdG9nZ2xlT3BlbigpIH19XG4gICAgICAgIC8vdG9nZ2xlPXsoKSA9PiB7IHRvZ2dsZU9wZW4oKSB9fVxuICAgICAgPlxuICAgICAgICA8TmF2VG9nZ2xlIC8+XG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXsgbWVudVZhcmlhbnRzIH0+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVfc29jaWFsXCI+XG4gICAgICAgICAgICA8aDU+aW5zdGFncmFtPC9oNT5cbiAgICAgICAgICAgIDxoMj5AYWphaW5zY291Z2hzdHVkaW88L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21vdGlvbi5uYXY+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifSBcbiAgICAgICAgdmFyaWFudHM9eyBiYWNrRGltIH1cbiAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGVPcGVuKCkgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})