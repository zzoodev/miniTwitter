"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useUser */ \"./lib/useUser.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout */ \"./pages/components/layout.tsx\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var ref;\n    _s();\n    var user = (0,_lib_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().user;\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweets\").data;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data && data.ok) {\n            console.log(data);\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-white\",\n                children: \"Twitter\"\n            }, void 0, false, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-coldivide-y\",\n                children: data === null || data === void 0 ? void 0 : (ref = data.tweets) === null || ref === void 0 ? void 0 : ref.map(function(tweet) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/tweets/\".concat(tweet.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-gray-300 font-bold\",\n                                            children: tweet.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"text-sm text-gray-800\",\n                                            children: tweet.author.username\n                                        }, void 0, false, {\n                                            fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"text-[10px] text-green-500\",\n                                    children: [\n                                        tweet._count.Likes,\n                                        \" \\uD2B8\\uC717\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: tweet.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this)\n                    }, tweet.id, false, {\n                        fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/tweets/create\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"flex justify-center items-center absolute bottom-5 right-5 w-14 h-14 rounded-full bg-blue-500 text-white\",\n                    children: \"Tweet\"\n                }, void 0, false, {\n                    fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youngseokjoo/Documents/twitter/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"6sBLNF3XRvrAffPacKIVWOy/AsI=\", false, function() {\n    return [\n        _lib_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ1k7QUFDaEI7QUFDWTtBQUNJOztBQWlCMUIsU0FBU00sSUFBSSxHQUFHOztRQWN0QkMsR0FBWTs7SUFibkIsSUFBTSxJQUFNLEdBQUtILHdEQUFPLEVBQUUsQ0FBbEJJLElBQUk7SUFDWixJQUFNLElBQU0sR0FBS0wsK0NBQU0sQ0FBd0IsYUFBYSxDQUFDLENBQXJESSxJQUFJO0lBRVpMLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlLLElBQUksSUFBSUEsSUFBSSxDQUFDRSxFQUFFLEVBQUU7WUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUMsQ0FBQztTQUNuQjtLQUNGLEVBQUU7UUFBQ0EsSUFBSTtLQUFDLENBQUMsQ0FBQztJQUVYLHFCQUNFLDhEQUFDRiwwREFBTTs7MEJBQ0wsOERBQUNPLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxzQkFBc0I7MEJBQUMsU0FBTzs7Ozs7b0JBQUs7MEJBQ2pELDhEQUFDQyxTQUFPO2dCQUFDRCxTQUFTLEVBQUMsdUJBQXVCOzBCQUN2Q04sSUFBSSxhQUFKQSxJQUFJLFdBQVEsR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxDQUFBQSxHQUFZLEdBQVpBLElBQUksQ0FBRVEsTUFBTSxjQUFaUixHQUFZLGNBQVpBLEtBQUFBLENBQVksR0FBWkEsR0FBWSxDQUFFUyxHQUFHLENBQUMsU0FBQ0MsS0FBSzt5Q0FDdkIsOERBQUNqQixrREFBSTt3QkFBQ2tCLElBQUksRUFBRSxVQUFTLENBQVcsT0FBVEQsS0FBSyxDQUFDRSxFQUFFLENBQUU7a0NBQy9CLDRFQUFDQyxLQUFHOzRCQUFDUCxTQUFTLEVBQUMsZ0JBQWdCOzs4Q0FDN0IsOERBQUNPLEtBQUc7b0NBQUNQLFNBQVMsRUFBQyxzQkFBc0I7O3NEQUNuQyw4REFBQ1EsSUFBRTs0Q0FBQ1IsU0FBUyxFQUFDLHlCQUF5QjtzREFBRUksS0FBSyxDQUFDSyxLQUFLOzs7OztpREFBTTtzREFDMUQsOERBQUNDLElBQUU7NENBQUNWLFNBQVMsRUFBQyx1QkFBdUI7c0RBQ2xDSSxLQUFLLENBQUNPLE1BQU0sQ0FBQ0MsUUFBUTs7Ozs7aURBQ25COzs7Ozs7eUNBQ0Q7OENBQ04sOERBQUNDLFFBQU07b0NBQUNiLFNBQVMsRUFBQyw0QkFBNEI7O3dDQUMzQ0ksS0FBSyxDQUFDVSxNQUFNLENBQUNDLEtBQUs7d0NBQUMsZUFDdEI7Ozs7Ozt5Q0FBUzs4Q0FDVCw4REFBQ0MsR0FBQztvQ0FBQ2hCLFNBQVMsRUFBQyx1QkFBdUI7OENBQUVJLEtBQUssQ0FBQ2EsT0FBTzs7Ozs7eUNBQUs7Ozs7OztpQ0FDcEQ7dUJBWmdDYixLQUFLLENBQUNFLEVBQUU7Ozs7NkJBYXpDO2lCQUNSLENBQUM7Ozs7O29CQUNNOzBCQUNWLDhEQUFDbkIsa0RBQUk7Z0JBQUNrQixJQUFJLEVBQUcsZ0JBQWM7MEJBQ3pCLDRFQUFDYSxHQUFDO29CQUFDbEIsU0FBUyxFQUFDLDBHQUEwRzs4QkFBQyxPQUV4SDs7Ozs7d0JBQUk7Ozs7O29CQUNDOzs7Ozs7WUFDQSxDQUNUO0NBQ0g7R0F0Q3VCUCxJQUFJOztRQUNURixvREFBTztRQUNQRCwyQ0FBTTs7O0FBRkRHLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgdXNlVXNlciBmcm9tIFwiLi4vbGliL3VzZVVzZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuaW50ZXJmYWNlIFBvc3RXaXRoVXNlciBleHRlbmRzIFBvc3Qge1xuICBhdXRob3I6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICB9O1xuICBfY291bnQ6IHtcbiAgICBMaWtlczogbnVtYmVyO1xuICB9O1xufVxuaW50ZXJmYWNlIFBvc3RzUmVzcG9uc2VXaXRoVXNlciB7XG4gIG9rOiBib29sZWFuO1xuICB0d2VldHM6IFBvc3RXaXRoVXNlcltdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1I8UG9zdHNSZXNwb25zZVdpdGhVc2VyPihcIi9hcGkvdHdlZXRzXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5vaykge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPlR3aXR0ZXI8L2gxPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbGRpdmlkZS15XCI+XG4gICAgICAgIHtkYXRhPy50d2VldHM/Lm1hcCgodHdlZXQpID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXtgL3R3ZWV0cy8ke3R3ZWV0LmlkfWB9IGtleT17dHdlZXQuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgZm9udC1ib2xkXCI+e3R3ZWV0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAge3R3ZWV0LmF1dGhvci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWdyZWVuLTUwMFwiPlxuICAgICAgICAgICAgICAgIHt0d2VldC5fY291bnQuTGlrZXN9IO2KuOycl1xuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e3R3ZWV0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXRzL2NyZWF0ZWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBib3R0b20tNSByaWdodC01IHctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFR3ZWV0XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJ1c2VVc2VyIiwiTGF5b3V0IiwiSG9tZSIsImRhdGEiLCJ1c2VyIiwib2siLCJjb25zb2xlIiwibG9nIiwiaDEiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwidHdlZXRzIiwibWFwIiwidHdlZXQiLCJocmVmIiwiaWQiLCJkaXYiLCJoMyIsInRpdGxlIiwiaDQiLCJhdXRob3IiLCJ1c2VybmFtZSIsInN0cm9uZyIsIl9jb3VudCIsIkxpa2VzIiwicCIsImNvbnRlbnQiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});