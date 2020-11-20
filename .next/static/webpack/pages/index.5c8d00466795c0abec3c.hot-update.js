webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _components_NavToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavToggle */ \"./components/NavToggle.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/traviewhite/dev/ajainscough/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar menuBtn = {\n  open: {\n    opacity: 1\n  },\n  closed: {\n    opacity: 1\n  }\n};\nvar menuVariants = {\n  open: {\n    opacity: 1,\n    width: 'auto',\n    height: '360px',\n    display: 'block',\n    position: 'fixed',\n    top: 0,\n    right: 0,\n    left: 0,\n    bottom: 0,\n    backgroundColor: 'pink',\n    overflow: 'no-scroll',\n    transition: {\n      opacity: {\n        delay: 0.1,\n        duration: 0.3,\n        ease: \"easeIn\"\n      },\n      width: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      },\n      height: {\n        tween: 100,\n        duration: 0.1,\n        ease: 'easeOut'\n      }\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '10px',\n    height: '10px',\n    display: 'none',\n    position: 'none',\n    top: 0,\n    right: 0,\n    backgroundColor: 'pink',\n    transition: {\n      opacity: {\n        duration: 0.07\n      },\n      width: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      },\n      height: {\n        tween: 100,\n        duration: 0.15,\n        ease: 'easeIn'\n      }\n    }\n  }\n};\nvar backDim = {\n  open: {\n    opacity: 0.2,\n    overflow: 'no-scroll',\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'block',\n    backgroundColor: '#FB9271',\n    zIndex: 1,\n    //filter: 'blur(10px)',\n    transition: {\n      opacity: {\n        duration: 0.5\n      } //filter: {duration: 0.1, tween: 10}\n\n    }\n  },\n  closed: {\n    opacity: 0,\n    width: '100%',\n    height: '100%',\n    position: 'fixed',\n    top: '0px',\n    bottom: '0px',\n    right: '0px',\n    left: '0px',\n    display: 'none',\n    backgroundColor: 'none',\n    zIndex: -10,\n    transition: {\n      opacity: {\n        duration: 0.4\n      }\n    }\n  }\n};\n\nvar Nav = function Nav() {\n  _s();\n\n  /*\n   const [state, setState] = useState(false)\n  this.targetElement = document.querySelector('html')\n  const x = useSpring(0, { opacity: 0 })\n  useEffect(() => {\n    state\n    ? targetElement.classList.add(\"no-scroll\")\n    : targetElement.classList.remove(\"no-scroll\")\n  })\n  \n  useEffect(() => {\n    x.onChange(() => {\n      x.get() > 1 ? setState(false) : setState(true)\n    })\n  }, [x])\n  \n  */\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"])(false, true),\n      _useCycle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCycle, 2),\n      isOpen = _useCycle2[0],\n      toggleOpen = _useCycle2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      className: \"mobile_nav\",\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: menuBtn //ref={el => menu = el}\n      ,\n      onClick: function onClick() {\n        toggleOpen();\n      } //onClick={() => { menuToggle(), toggleOpen() }}\n      //toggle={() => { toggleOpen() }}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_NavToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        variants: menuVariants,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n          className: \"nav_menu\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      initial: false,\n      animate: isOpen ? \"open\" : \"closed\",\n      variants: backDim,\n      onClick: function onClick() {\n        toggleOpen();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Nav, \"+wbUvvGXeT7WCWUG5HoDDMwmX2w=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"]];\n});\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJtZW51QnRuIiwib3BlbiIsIm9wYWNpdHkiLCJjbG9zZWQiLCJtZW51VmFyaWFudHMiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIiwidHdlZW4iLCJiYWNrRGltIiwiekluZGV4IiwiTmF2IiwidXNlQ3ljbGUiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUU7QUFETCxHQURRO0FBSWRDLFFBQU0sRUFBRTtBQUNORCxXQUFPLEVBQUU7QUFESDtBQUpNLENBQWhCO0FBUUEsSUFBTUUsWUFBWSxHQUFHO0FBQ25CSCxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLENBREw7QUFFSkcsU0FBSyxFQUFFLE1BRkg7QUFHSkMsVUFBTSxFQUFFLE9BSEo7QUFJSkMsV0FBTyxFQUFFLE9BSkw7QUFLSkMsWUFBUSxFQUFFLE9BTE47QUFNSkMsT0FBRyxFQUFFLENBTkQ7QUFPSkMsU0FBSyxFQUFFLENBUEg7QUFRSkMsUUFBSSxFQUFFLENBUkY7QUFTSkMsVUFBTSxFQUFFLENBVEo7QUFVSkMsbUJBQWUsRUFBRSxNQVZiO0FBV0pDLFlBQVEsRUFBRSxXQVhOO0FBWUpDLGNBQVUsRUFBRTtBQUNWYixhQUFPLEVBQUU7QUFBRWMsYUFBSyxFQUFFLEdBQVQ7QUFBY0MsZ0JBQVEsRUFBRSxHQUF4QjtBQUE2QkMsWUFBSSxFQUFFO0FBQW5DLE9BREM7QUFFVmIsV0FBSyxFQUFFO0FBQUNjLGFBQUssRUFBRSxHQUFS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RCxDQUFRLEdBQVI7QUFBWSxnQkFBUSxFQUFHckIsWUFBdkI7QUFBQSwrQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxtQkFBUyxFQUFDLFVBQXRCO0FBQUEsaUNBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBTyxFQUFFLEtBRFg7QUFFRSxhQUFPLEVBQUVvQixNQUFNLEdBQUcsTUFBSCxHQUFZLFFBRjdCO0FBR0UsY0FBUSxFQUFHSixPQUhiO0FBSUUsYUFBTyxFQUFFLG1CQUFNO0FBQUVLLGtCQUFVO0FBQUk7QUFKakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBLGtCQURGO0FBMkJELENBakREOztHQUFNSCxHO1VBb0J5QkMsc0Q7OztLQXBCekJELEc7QUFtRFNBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUN5Y2xlLCB1c2VTcHJpbmcgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IE5hdlRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL05hdlRvZ2dsZSdcbmltcG9ydCBMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtzJ1xuXG5jb25zdCBtZW51QnRuID0ge1xuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfVxufVxuY29uc3QgbWVudVZhcmlhbnRzID0ge1xuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJzM2MHB4JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwaW5rJyxcbiAgICBvdmVyZmxvdzogJ25vLXNjcm9sbCcsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgb3BhY2l0eTogeyBkZWxheTogMC4xLCBkdXJhdGlvbjogMC4zLCBlYXNlOiBcImVhc2VJblwiIH0sXG4gICAgICB3aWR0aDoge3R3ZWVuOiAxMDAsIGR1cmF0aW9uOiAwLjEsIGVhc2U6ICdlYXNlT3V0J30sXG4gICAgICBoZWlnaHQ6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xLCBlYXNlOiAnZWFzZU91dCd9IFxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ25vbmUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwaW5rJyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7IGR1cmF0aW9uOiAwLjA3IH0sXG4gICAgICB3aWR0aDoge3R3ZWVuOiAxMDAsIGR1cmF0aW9uOiAwLjE1LCBlYXNlOiAnZWFzZUluJ30sXG4gICAgICBoZWlnaHQ6IHt0d2VlbjogMTAwLCBkdXJhdGlvbjogMC4xNSwgZWFzZTogJ2Vhc2VJbid9XG4gICAgfVxuICB9XG59XG5jb25zdCBiYWNrRGltID0ge1xuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMC4yLFxuICAgIG92ZXJmbG93OiAnbm8tc2Nyb2xsJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzBweCcsXG4gICAgYm90dG9tOiAnMHB4JyxcbiAgICByaWdodDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkI5MjcxJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgLy9maWx0ZXI6ICdibHVyKDEwcHgpJyxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuNX1cbiAgICAgIC8vZmlsdGVyOiB7ZHVyYXRpb246IDAuMSwgdHdlZW46IDEwfVxuICAgIH1cbiAgfSxcbiAgY2xvc2VkOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzBweCcsXG4gICAgYm90dG9tOiAnMHB4JyxcbiAgICByaWdodDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ25vbmUnLFxuICAgIHpJbmRleDogLTEwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC40fVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIC8qXG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdGhpcy50YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gIGNvbnN0IHggPSB1c2VTcHJpbmcoMCwgeyBvcGFjaXR5OiAwIH0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdGVcbiAgICA/IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKVxuICAgIDogdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpXG4gIH0pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHgub25DaGFuZ2UoKCkgPT4ge1xuICAgICAgeC5nZXQoKSA+IDEgPyBzZXRTdGF0ZShmYWxzZSkgOiBzZXRTdGF0ZSh0cnVlKVxuICAgIH0pXG4gIH0sIFt4XSlcbiAgXG4gICovXG5cbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLm5hdlxuICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGVfbmF2XCJcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgdmFyaWFudHM9eyBtZW51QnRuIH1cbiAgICAgICAgLy9yZWY9e2VsID0+IG1lbnUgPSBlbH1cbiAgICAgICAgb25DbGljaz17KCkgPT4geyB0b2dnbGVPcGVuKCkgfX1cbiAgICAgICAgLy9vbkNsaWNrPXsoKSA9PiB7IG1lbnVUb2dnbGUoKSwgdG9nZ2xlT3BlbigpIH19XG4gICAgICAgIC8vdG9nZ2xlPXsoKSA9PiB7IHRvZ2dsZU9wZW4oKSB9fVxuICAgICAgPlxuICAgICAgICA8TmF2VG9nZ2xlIC8+XG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXsgbWVudVZhcmlhbnRzIH0+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibmF2X21lbnVcIj5cbiAgICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24ubmF2PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0gXG4gICAgICAgIHZhcmlhbnRzPXsgYmFja0RpbSB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlT3BlbigpIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdiAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})