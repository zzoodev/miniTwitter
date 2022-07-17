"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateAccount; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_useMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useMutation */ \"./lib/useMutation.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout */ \"./pages/components/layout.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CreateAccount() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, errors = ref.formState.errors, setError = ref.setError, setValue = ref.setValue;\n    var ref1 = _slicedToArray((0,_lib_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/create-account\"), 2), createAccount = ref1[0], ref2 = ref1[1], data = ref2.data, loading = ref2.loading;\n    var onValid = function(form) {\n        if (loading) return;\n        createAccount(form);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.ok) && (data === null || data === void 0 ? void 0 : data.message)) {\n            setError(\"username\", {\n                message: \"already taken username\"\n            });\n        }\n        if (data === null || data === void 0 ? void 0 : data.ok) {\n            router.push(\"/login\");\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-white text-xl mb-5\",\n                children: \"Sigh-up\"\n            }, void 0, false, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                className: \"flex flex-col space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"mr-3 text-md text-white\",\n                                htmlFor: \"username\",\n                                children: \"username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"username\", {\n                                required: {\n                                    value: true,\n                                    message: \"required\"\n                                },\n                                minLength: {\n                                    value: 3,\n                                    message: \"minLength is 3\"\n                                },\n                                maxLength: {\n                                    value: 12,\n                                    message: \"maxLength is 12\"\n                                }\n                            }), {\n                                type: \"text\",\n                                placeholder: \"username\",\n                                className: \"w-full p-2\"\n                            }), void 0, false, {\n                                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-red-500\",\n                        children: errors.username && errors.username.message\n                    }, void 0, false, {\n                        fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"p-2 bg-gray-800 text-whte\",\n                                children: \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"p-2 w-full bg-gray-300 text-center mt-3\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youngseokjoo/Documents/twitter/pages/create-account.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n};\n_s(CreateAccount, \"wIrDwKqO+8i87jIRF/cLChDuzNE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm,\n        _lib_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = CreateAccount;\nvar _c;\n$RefreshReg$(_c, \"CreateAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQ047QUFDUTtBQUNHO0FBQ0o7O0FBTTFCLFNBQVNNLGFBQWEsR0FBRzs7SUFDdEMsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLElBTUlFLEdBQXdCLEdBQXhCQSx3REFBTyxFQUFpQixFQUwxQkssUUFBUSxHQUtOTCxHQUF3QixDQUwxQkssUUFBUSxFQUNSQyxZQUFZLEdBSVZOLEdBQXdCLENBSjFCTSxZQUFZLEVBQ1pDLE1BQW1CLEdBR2pCUCxHQUF3QixDQUgxQk8sU0FBUyxDQUFJQyxNQUFNLEVBQ25CQyxRQUFRLEdBRU5ULEdBQXdCLENBRjFCUyxRQUFRLEVBQ1JDLFFBQVEsR0FDTlYsR0FBd0IsQ0FEMUJVLFFBQVE7SUFFVixJQUEyQ1QsSUFBa0Msa0JBQWxDQSw0REFBVyxDQUFDLHFCQUFxQixDQUFDLE1BQXRFVSxhQUFhLEdBQXVCVixJQUFrQyxHQUF6RCxTQUF1QkEsSUFBa0MsS0FBckRXLElBQUksUUFBSkEsSUFBSSxFQUFFQyxPQUFPLFFBQVBBLE9BQU87SUFDckMsSUFBTUMsT0FBTyxHQUFHLFNBQUNDLElBQW1CLEVBQUs7UUFDdkMsSUFBSUYsT0FBTyxFQUFFLE9BQU87UUFDcEJGLGFBQWEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7S0FDckI7SUFFRGhCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ2EsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQUksR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxJQUFJLENBQUVJLEVBQUUsS0FBSUosQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVLLE9BQU8sR0FBRTtZQUM5QlIsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFBRVEsT0FBTyxFQUFFLHdCQUF3QjthQUFFLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUlMLElBQUksYUFBSkEsSUFBSSxXQUFJLEdBQVJBLEtBQUFBLENBQVEsR0FBUkEsSUFBSSxDQUFFSSxFQUFFLEVBQUU7WUFDWlosTUFBTSxDQUFDYyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7S0FDRixFQUFFO1FBQUNOLElBQUk7S0FBQyxDQUFDLENBQUM7SUFFWCxxQkFDRSw4REFBQ1YsMERBQU07OzBCQUNMLDhEQUFDaUIsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLG1DQUFtQzswQkFBQyxTQUFPOzs7OztvQkFBSzswQkFDOUQsOERBQUNMLE1BQUk7Z0JBQ0hNLFFBQVEsRUFBRWYsWUFBWSxDQUFDUSxPQUFPLENBQUM7Z0JBQy9CTSxTQUFTLEVBQUMseUJBQXlCOztrQ0FFbkMsOERBQUNFLEtBQUc7d0JBQUNGLFNBQVMsRUFBQyxrQ0FBa0M7OzBDQUMvQyw4REFBQ0csT0FBSztnQ0FBQ0gsU0FBUyxFQUFDLHlCQUF5QjtnQ0FBQ0ksT0FBTyxFQUFDLFVBQVU7MENBQUMsVUFFOUQ7Ozs7O29DQUFROzBDQUNSLDhEQUFDQyxPQUFLLG9CQUNBcEIsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQ0FDdkJxQixRQUFRLEVBQUU7b0NBQUVDLEtBQUssRUFBRSxJQUFJO29DQUFFVixPQUFPLEVBQUUsVUFBVTtpQ0FBRTtnQ0FDOUNXLFNBQVMsRUFBRTtvQ0FBRUQsS0FBSyxFQUFFLENBQUM7b0NBQUVWLE9BQU8sRUFBRSxnQkFBZ0I7aUNBQUU7Z0NBQ2xEWSxTQUFTLEVBQUU7b0NBQUVGLEtBQUssRUFBRSxFQUFFO29DQUFFVixPQUFPLEVBQUUsaUJBQWlCO2lDQUFFOzZCQUNyRCxDQUFDO2dDQUNGYSxJQUFJLEVBQUMsTUFBTTtnQ0FDWEMsV0FBVyxFQUFDLFVBQVU7Z0NBQ3RCWCxTQUFTLEVBQUMsWUFBWTs7Ozs7b0NBQ3RCOzs7Ozs7NEJBQ0U7a0NBQ04sOERBQUNZLE1BQUk7d0JBQUNaLFNBQVMsRUFBQyxjQUFjO2tDQUMzQlosTUFBTSxDQUFDeUIsUUFBUSxJQUFJekIsTUFBTSxDQUFDeUIsUUFBUSxDQUFDaEIsT0FBTzs7Ozs7NEJBQ3RDO2tDQUNQLDhEQUFDSyxLQUFHO3dCQUFDRixTQUFTLEVBQUMsZUFBZTs7MENBQzVCLDhEQUFDYyxRQUFNO2dDQUFDZCxTQUFTLEVBQUMsMkJBQTJCOzBDQUFDLGdCQUFjOzs7OztvQ0FBUzswQ0FDckUsOERBQUN2QixrREFBSTtnQ0FBQ3NDLElBQUksRUFBRSxRQUFROzBDQUNsQiw0RUFBQ0MsR0FBQztvQ0FBQ2hCLFNBQVMsRUFBQyx5Q0FBeUM7OENBQUMsT0FBSzs7Ozs7d0NBQUk7Ozs7O29DQUMzRDs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7Ozs7OztZQUNBLENBQ1Q7Q0FDSDtHQTFEdUJqQixhQUFhOztRQUNwQkwsa0RBQVM7UUFPcEJFLG9EQUFPO1FBQ2dDQyx3REFBVzs7O0FBVGhDRSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1hY2NvdW50LnRzeD80NTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi9saWIvdXNlTXV0YXRpb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuaW50ZXJmYWNlIEZvcm1JbnRlcmZhY2Uge1xuICB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVBY2NvdW50KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgc2V0RXJyb3IsXG4gICAgc2V0VmFsdWUsXG4gIH0gPSB1c2VGb3JtPEZvcm1JbnRlcmZhY2U+KCk7XG4gIGNvbnN0IFtjcmVhdGVBY2NvdW50LCB7IGRhdGEsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihcIi9hcGkvY3JlYXRlLWFjY291bnRcIik7XG4gIGNvbnN0IG9uVmFsaWQgPSAoZm9ybTogRm9ybUludGVyZmFjZSkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XG4gICAgY3JlYXRlQWNjb3VudChmb3JtKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGF0YT8ub2sgJiYgZGF0YT8ubWVzc2FnZSkge1xuICAgICAgc2V0RXJyb3IoXCJ1c2VybmFtZVwiLCB7IG1lc3NhZ2U6IFwiYWxyZWFkeSB0YWtlbiB1c2VybmFtZVwiIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YT8ub2spIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC14bCBtYi01XCI+U2lnaC11cDwvaDE+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXItMyB0ZXh0LW1kIHRleHQtd2hpdGVcIiBodG1sRm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgIHVzZXJuYW1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJuYW1lXCIsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwicmVxdWlyZWRcIiB9LFxuICAgICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IDMsIG1lc3NhZ2U6IFwibWluTGVuZ3RoIGlzIDNcIiB9LFxuICAgICAgICAgICAgICBtYXhMZW5ndGg6IHsgdmFsdWU6IDEyLCBtZXNzYWdlOiBcIm1heExlbmd0aCBpcyAxMlwiIH0sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lLm1lc3NhZ2V9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgYmctZ3JheS04MDAgdGV4dC13aHRlXCI+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9sb2dpblwifT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB3LWZ1bGwgYmctZ3JheS0zMDAgdGV4dC1jZW50ZXIgbXQtM1wiPkxvZ2luPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZUZvcm0iLCJ1c2VNdXRhdGlvbiIsIkxheW91dCIsIkNyZWF0ZUFjY291bnQiLCJyb3V0ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInNldEVycm9yIiwic2V0VmFsdWUiLCJjcmVhdGVBY2NvdW50IiwiZGF0YSIsImxvYWRpbmciLCJvblZhbGlkIiwiZm9ybSIsIm9rIiwibWVzc2FnZSIsInB1c2giLCJoMSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJyZXF1aXJlZCIsInZhbHVlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3BhbiIsInVzZXJuYW1lIiwiYnV0dG9uIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ })

});