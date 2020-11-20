webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _components_NavToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavToggle */ \"./components/NavToggle.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/traviewhite/dev/ajainscough/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar menuBtn = {\n  open: {\n    opacity: 1\n  },\n  closed: {\n    opacity: 1\n  }\n};\nvar menuVariants = {\n  open: {\n    opacity: 1,\n    width: '100%',\n    height: '320px',\n    display: 'block',\n    position: 'fixed',\n    top: 0,\n    right: 0,\n    left: 0,\n    bottom: 0,\n    backgroundColor: '#e8e8e8',\n    overflow: 'no-scroll',\n    transition: {\n      opacity: {\n        duration: 0.2,\n        ease: \"easeIn\"\n      },\n      width: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      },\n      height: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      }\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '10px',\n    height: '10px',\n    display: 'none',\n    position: 'absolute',\n    top: 0,\n    backgroundColor: '#e8e8e8',\n    transition: {\n      opacity: {\n        duration: 0.07\n      },\n      width: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      },\n      height: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      }\n    }\n  }\n};\nvar backDim = {\n  open: {\n    opacity: 0.4,\n    overflow: 'no-scroll',\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'block',\n    backgroundColor: 'black',\n    zIndex: 1,\n    //filter: 'blur(10px)',\n    transition: {\n      opacity: {\n        duration: 0.5\n      } //filter: {duration: 0.1, tween: 10}\n\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'none',\n    backgroundColor: 'none',\n    zIndex: -10,\n    transition: {\n      opacity: {\n        duration: 0.4\n      }\n    }\n  }\n};\n\nvar Nav = function Nav() {\n  _s();\n\n  /*\n   const [state, setState] = useState(false)\n  this.targetElement = document.querySelector('html')\n  const x = useSpring(0, { opacity: 0 })\n  useEffect(() => {\n    state\n    ? targetElement.classList.add(\"no-scroll\")\n    : targetElement.classList.remove(\"no-scroll\")\n  })\n  \n  useEffect(() => {\n    x.onChange(() => {\n      x.get() > 1 ? setState(false) : setState(true)\n    })\n  }, [x])\n  \n  */\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"])(false, true),\n      _useCycle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCycle, 2),\n      isOpen = _useCycle2[0],\n      toggleOpen = _useCycle2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      className: \"mobile_nav\",\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: menuBtn //ref={el => menu = el}\n      ,\n      onClick: function onClick() {\n        toggleOpen();\n      } //onClick={() => { menuToggle(), toggleOpen() }}\n      //toggle={() => { toggleOpen() }}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_NavToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        variants: menuVariants,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n          className: \"nav_menu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: backDim,\n      onClick: function onClick() {\n        toggleOpen();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Nav, \"+wbUvvGXeT7WCWUG5HoDDMwmX2w=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJtZW51QnRuIiwib3BlbiIsIm9wYWNpdHkiLCJjbG9zZWQiLCJtZW51VmFyaWFudHMiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInR3ZWVuIiwiYmFja0RpbSIsInpJbmRleCIsIk5hdiIsInVzZUN5Y2xlIiwiaXNPcGVuIiwidG9nZ2xlT3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFO0FBREwsR0FEUTtBQUlkQyxRQUFNLEVBQUU7QUFDTkQsV0FBTyxFQUFFO0FBREg7QUFKTSxDQUFoQjtBQVFBLElBQU1FLFlBQVksR0FBRztBQUNuQkgsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxDQURMO0FBRUpHLFNBQUssRUFBRSxNQUZIO0FBR0pDLFVBQU0sRUFBRSxPQUhKO0FBSUpDLFdBQU8sRUFBRSxPQUpMO0FBS0pDLFlBQVEsRUFBRSxPQUxOO0FBTUpDLE9BQUcsRUFBRSxDQU5EO0FBT0pDLFNBQUssRUFBRSxDQVBIO0FBUUpDLFFBQUksRUFBRSxDQVJGO0FBU0pDLFVBQU0sRUFBRSxDQVRKO0FBVUpDLG1CQUFlLEVBQUUsU0FWYjtBQVdKQyxZQUFRLEVBQUUsV0FYTjtBQVlKQyxjQUFVLEVBQUU7QUFDVmIsYUFBTyxFQUFFO0FBQUVjLGdCQUFRLEVBQUUsR0FBWjtBQUFpQkMsWUFBSSxFQUFFO0FBQXZCLE9BREM7QUFFVlosV0FBSyxFQUFFO0FBQUNhLGFBQUssRUFBRSxHQUFSO0FBQWFGLGdCQUFRLEVBQUUsR0FBdkI7QUFBNEJD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QyxvREFBRCxDQUFRLEdBQVI7QUFBWSxtQkFBUyxFQUFDLFVBQXRCO0FBQUEsaUNBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBTyxFQUFFLEtBRFg7QUFFRSxhQUFPLEVBQUVtQixNQUFNLEdBQUcsTUFBSCxHQUFZLFFBRjdCO0FBR0UsY0FBUSxFQUFHSixPQUhiO0FBSUUsYUFBTyxFQUFFLG1CQUFNO0FBQUVLLGtCQUFVO0FBQUk7QUFKakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBLGtCQURGO0FBMkJELENBakREOztHQUFNSCxHO1VBb0J5QkMsc0Q7OztLQXBCekJELEc7QUFtRFNBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUN5Y2xlLCB1c2VTcHJpbmcgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IE5hdlRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL05hdlRvZ2dsZSdcbmltcG9ydCBMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtzJ1xuXG5jb25zdCBtZW51QnRuID0ge1xuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfVxufVxuY29uc3QgbWVudVZhcmlhbnRzID0ge1xuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzMyMHB4JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZThlOGU4JyxcbiAgICBvdmVyZmxvdzogJ25vLXNjcm9sbCcsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4yLCBlYXNlOiBcImVhc2VJblwiIH0sXG4gICAgICB3aWR0aDoge3R3ZWVuOiAxMDAsIGR1cmF0aW9uOiAwLjEsIGVhc2U6ICdlYXNlT3V0J30sXG4gICAgICBoZWlnaHQ6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xLCBlYXNlOiAnZWFzZU91dCd9IFxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2U4ZThlOCcsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4wNyB9LFxuICAgICAgd2lkdGg6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xNSwgZWFzZTogJ2Vhc2VJbid9LFxuICAgICAgaGVpZ2h0OiB7dHdlZW46IDEwMCwgZHVyYXRpb246IDAuMTUsIGVhc2U6ICdlYXNlSW4nfVxuICAgIH1cbiAgfVxufVxuY29uc3QgYmFja0RpbSA9IHtcbiAgb3Blbjoge1xuICAgIG9wYWNpdHk6IDAuNCxcbiAgICBvdmVyZmxvdzogJ25vLXNjcm9sbCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGJvdHRvbTogJzBweCcsXG4gICAgcmlnaHQ6ICcwcHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgIHpJbmRleDogMSxcbiAgICAvL2ZpbHRlcjogJ2JsdXIoMTBweCknLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC41fVxuICAgICAgLy9maWx0ZXI6IHtkdXJhdGlvbjogMC4xLCB0d2VlbjogMTB9XG4gICAgfVxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBib3R0b206ICcwcHgnLFxuICAgIHJpZ2h0OiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnbm9uZScsXG4gICAgekluZGV4OiAtMTAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjR9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgLypcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB0aGlzLnRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcbiAgY29uc3QgeCA9IHVzZVNwcmluZygwLCB7IG9wYWNpdHk6IDAgfSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGF0ZVxuICAgID8gdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpXG4gICAgOiB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIilcbiAgfSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgeC5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICB4LmdldCgpID4gMSA/IHNldFN0YXRlKGZhbHNlKSA6IHNldFN0YXRlKHRydWUpXG4gICAgfSlcbiAgfSwgW3hdKVxuICBcbiAgKi9cblxuICBjb25zdCBbaXNPcGVuLCB0b2dnbGVPcGVuXSA9IHVzZUN5Y2xlKGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtb3Rpb24ubmF2XG4gICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZV9uYXZcIlxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICB2YXJpYW50cz17IG1lbnVCdG4gfVxuICAgICAgICAvL3JlZj17ZWwgPT4gbWVudSA9IGVsfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZU9wZW4oKSB9fVxuICAgICAgICAvL29uQ2xpY2s9eygpID0+IHsgbWVudVRvZ2dsZSgpLCB0b2dnbGVPcGVuKCkgfX1cbiAgICAgICAgLy90b2dnbGU9eygpID0+IHsgdG9nZ2xlT3BlbigpIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZUb2dnbGUgLz5cbiAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9eyBtZW51VmFyaWFudHMgfT5cbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJuYXZfbWVudVwiPlxuICAgICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21vdGlvbi5uYXY+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifSBcbiAgICAgICAgdmFyaWFudHM9eyBiYWNrRGltIH1cbiAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGVPcGVuKCkgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})