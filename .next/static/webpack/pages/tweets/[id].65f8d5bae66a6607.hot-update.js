"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweets/[id]",{

/***/ "./pages/tweets/[id].tsx":
/*!*******************************!*\
  !*** ./pages/tweets/[id].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweetDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_cls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/cls */ \"./lib/cls.ts\");\n/* harmony import */ var _lib_useMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/useMutation */ \"./lib/useMutation.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./pages/components/layout.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweetDetail() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref4 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/tweets/\".concat(router.query.id ? router.query.id : null)), data = ref4.data, mutate = ref4.mutate;\n    var ref5 = _slicedToArray((0,_lib_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/tweets/\".concat(router.query.id, \"/like\")), 1), likeTweet = ref5[0];\n    var toggleLike = function() {\n        if (!data) return;\n        mutate(_objectSpread({}, data, {\n            data: {\n                tweet: tweet\n            }\n        }));\n        likeTweet({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : ref.title\n            }, void 0, false, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/tweets/[id].tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data === null || data === void 0 ? void 0 : (ref1 = data.tweet) === null || ref1 === void 0 ? void 0 : ref1.content\n            }, void 0, false, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/tweets/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: toggleLike,\n                className: (0,_lib_cls__WEBPACK_IMPORTED_MODULE_3__.cls)(\"px-2 py-1 font-bold bg-gray-200 cursor-pointer rounded-md\", (data === null || data === void 0 ? void 0 : data.isLiked) ? \"text-red-500\" : \"text-blue-500\"),\n                children: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"UnLike\" : \"Like\"\n            }, void 0, false, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/tweets/[id].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                children: [\n                    data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : (ref3 = ref2._count) === null || ref3 === void 0 ? void 0 : ref3.Likes,\n                    \" \\uD2B8\\uC717\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/tweets/[id].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youngseokjoo/Documents/twitter/pages/tweets/[id].tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n_s(tweetDetail, \"laB4aYu4aXYxDiWsIOImSdxKDd0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldHMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNmO0FBQ1c7QUFDWTtBQUNOOztBQWEzQixTQUFTSyxXQUFXLEdBQUc7UUFlM0JDLEdBQVcsRUFDWkEsSUFBVyxFQVVWQSxJQUFXOztJQXpCcEIsSUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBQzFCLElBQXlCQyxJQUV4QixHQUZ3QkEsK0NBQU0sQ0FDN0IsY0FBYSxDQUEyQyxPQUF6Q00sTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsR0FBR0YsTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsR0FBRyxJQUFJLENBQUUsQ0FDMUQsRUFGT0gsSUFBSSxHQUFhTCxJQUV4QixDQUZPSyxJQUFJLEVBQUVJLE1BQU0sR0FBS1QsSUFFeEIsQ0FGYVMsTUFBTTtJQUdwQixJQUFvQlAsSUFBa0Qsa0JBQWxEQSw0REFBVyxDQUFDLGNBQWEsQ0FBa0IsTUFBSyxDQUFyQkksTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsRUFBQyxPQUFLLENBQUMsQ0FBQyxNQUEvREUsU0FBUyxHQUFJUixJQUFrRCxHQUF0RDtJQUVoQixJQUFNUyxVQUFVLEdBQUcsV0FBTTtRQUN2QixJQUFJLENBQUNOLElBQUksRUFBRSxPQUFPO1FBQ2xCSSxNQUFNLENBQUMsa0JBQUtKLElBQUk7WUFBRUEsSUFBSSxFQUFFO2dCQUFFTyxLQUFLLEVBQUxBLEtBQUs7YUFBRTtVQUFFLENBQUMsQ0FBQztRQUNyQ0YsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2Y7SUFFRCxxQkFDRSw4REFBQ1AsMERBQU07OzBCQUNMLDhEQUFDVSxJQUFFOzBCQUFFUixJQUFJLGFBQUpBLElBQUksV0FBTyxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLENBQUFBLEdBQVcsR0FBWEEsSUFBSSxDQUFFTyxLQUFLLGNBQVhQLEdBQVcsY0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxHQUFXLENBQUVTLEtBQUs7Ozs7O29CQUFNOzBCQUM3Qiw4REFBQ0MsR0FBQzswQkFBRVYsSUFBSSxhQUFKQSxJQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxDQUFBQSxJQUFXLEdBQVhBLElBQUksQ0FBRU8sS0FBSyxjQUFYUCxJQUFXLGNBQVhBLEtBQUFBLENBQVcsR0FBWEEsSUFBVyxDQUFFVyxPQUFPOzs7OztvQkFBSzswQkFDN0IsOERBQUNDLE1BQUk7Z0JBQ0hDLE9BQU8sRUFBRVAsVUFBVTtnQkFDbkJRLFNBQVMsRUFBRWxCLDZDQUFHLENBQ1osMkRBQTJELEVBQzNESSxDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRWUsT0FBTyxJQUFHLGNBQWMsR0FBRyxlQUFlLENBQ2pEOzBCQUVBZixDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRWUsT0FBTyxJQUFHLFFBQVEsR0FBRyxNQUFNOzs7OztvQkFDN0I7MEJBQ1AsOERBQUNDLElBQUU7O29CQUFFaEIsSUFBSSxhQUFKQSxJQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxDQUFBQSxJQUFXLEdBQVhBLElBQUksQ0FBRU8sS0FBSyxjQUFYUCxJQUFXLGNBQVhBLEtBQUFBLENBQVcsR0FBWEEsUUFBQUEsSUFBVyxDQUFFaUIsTUFBTSw2QkFBUixHQUFYakIsS0FBQUEsQ0FBVyxRQUFVa0IsS0FBSztvQkFBQyxlQUFHOzs7Ozs7b0JBQUs7Ozs7OztZQUNqQyxDQUNUO0NBQ0g7R0E3QnVCbkIsV0FBVzs7UUFDbEJMLGtEQUFTO1FBQ0NDLDJDQUFNO1FBR1hFLHdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0cy9baWRdLnRzeD9kYzMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3QsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBjbHMgfSBmcm9tIFwiLi4vLi4vbGliL2Nsc1wiO1xuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi8uLi9saWIvdXNlTXV0YXRpb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5cbmludGVyZmFjZSBQb3N0V2l0aFVzZXIgZXh0ZW5kcyBQb3N0IHtcbiAgYXV0aG9yOiBVc2VyO1xuICBfY291bnQ6IHtcbiAgICBMaWtlczogbnVtYmVyO1xuICB9O1xufVxuaW50ZXJmYWNlIFR3ZWV0UmVzcG9uc2Uge1xuICBvazogYm9vbGVhbjtcbiAgdHdlZXQ6IFBvc3RXaXRoVXNlcjtcbiAgaXNMaWtlZDogYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZWV0RGV0YWlsKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVNXUjxUd2VldFJlc3BvbnNlPihcbiAgICBgL2FwaS90d2VldHMvJHtyb3V0ZXIucXVlcnkuaWQgPyByb3V0ZXIucXVlcnkuaWQgOiBudWxsfWBcbiAgKTtcbiAgY29uc3QgW2xpa2VUd2VldF0gPSB1c2VNdXRhdGlvbihgL2FwaS90d2VldHMvJHtyb3V0ZXIucXVlcnkuaWR9L2xpa2VgKTtcblxuICBjb25zdCB0b2dnbGVMaWtlID0gKCkgPT4ge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIG11dGF0ZSh7IC4uLmRhdGEsIGRhdGE6IHsgdHdlZXQgfSB9KTtcbiAgICBsaWtlVHdlZXQoe30pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT57ZGF0YT8udHdlZXQ/LnRpdGxlfTwvaDE+XG4gICAgICA8cD57ZGF0YT8udHdlZXQ/LmNvbnRlbnR9PC9wPlxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17dG9nZ2xlTGlrZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHMoXG4gICAgICAgICAgXCJweC0yIHB5LTEgZm9udC1ib2xkIGJnLWdyYXktMjAwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbWRcIixcbiAgICAgICAgICBkYXRhPy5pc0xpa2VkID8gXCJ0ZXh0LXJlZC01MDBcIiA6IFwidGV4dC1ibHVlLTUwMFwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtkYXRhPy5pc0xpa2VkID8gXCJVbkxpa2VcIiA6IFwiTGlrZVwifVxuICAgICAgPC9zcGFuPlxuICAgICAgPGVtPntkYXRhPy50d2VldD8uX2NvdW50Py5MaWtlc30g7Yq47JyXPC9lbT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJjbHMiLCJ1c2VNdXRhdGlvbiIsIkxheW91dCIsInR3ZWV0RGV0YWlsIiwiZGF0YSIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJtdXRhdGUiLCJsaWtlVHdlZXQiLCJ0b2dnbGVMaWtlIiwidHdlZXQiLCJoMSIsInRpdGxlIiwicCIsImNvbnRlbnQiLCJzcGFuIiwib25DbGljayIsImNsYXNzTmFtZSIsImlzTGlrZWQiLCJlbSIsIl9jb3VudCIsIkxpa2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweets/[id].tsx\n");

/***/ })

});