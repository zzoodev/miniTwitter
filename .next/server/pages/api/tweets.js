"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tweets";
exports.ids = ["pages/api/tweets"];
exports.modules = {

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./lib/withHandler.ts":
/*!****************************!*\
  !*** ./lib/withHandler.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , handler , isPrivate =true  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(400).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(404).json({\n                ok: false,\n                error: \"plz login\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvd2l0aEhhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQWVlLFNBQVNBLFdBQVcsQ0FBQyxFQUNsQ0MsT0FBTyxHQUNQQyxPQUFPLEdBQ1BDLFNBQVMsRUFBRyxJQUFJLEdBQ0wsRUFBRTtJQUNiLE9BQU8sZUFBZ0JDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7UUFDaEUsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxRQUFRLENBQUNILEdBQUcsQ0FBQ0UsTUFBTSxDQUFRLEVBQUU7WUFDdEQsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSU4sU0FBUyxJQUFJLENBQUNDLEdBQUcsQ0FBQ00sT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDbEMsT0FBT04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBRUMsRUFBRSxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxXQUFXO2FBQUUsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSTtZQUNGLE1BQU1aLE9BQU8sQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLE9BQU9TLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBT1QsR0FBRyxDQUFDTyxJQUFJLENBQUM7Z0JBQUVFLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDNUI7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLy4vbGliL3dpdGhIYW5kbGVyLnRzPzM1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmludGVyZmFjZSBDb25maWdUeXBlIHtcbiAgbWV0aG9kczogTWV0aG9kW107XG4gIGhhbmRsZXI6IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZDtcbiAgaXNQcml2YXRlPzogYm9vbGVhbjtcbn1cblxudHlwZSBNZXRob2QgPSBcIlBPU1RcIiB8IFwiR0VUXCIgfCBcIkRFTEVURVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XG4gIG9rOiBib29sZWFuO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIYW5kbGVyKHtcbiAgbWV0aG9kcyxcbiAgaGFuZGxlcixcbiAgaXNQcml2YXRlID0gdHJ1ZSxcbn06IENvbmZpZ1R5cGUpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmIChyZXEubWV0aG9kICYmICFtZXRob2RzLmluY2x1ZGVzKHJlcS5tZXRob2QgYXMgYW55KSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcbiAgICB9XG4gICAgaWYgKGlzUHJpdmF0ZSAmJiAhcmVxLnNlc3Npb24udXNlcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgb2s6IGZhbHNlLCBlcnJvcjogXCJwbHogbG9naW5cIiB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGhhbmRsZXIocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLmpzb24oeyBlcnJvciB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaGFuZGxlciIsImlzUHJpdmF0ZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImluY2x1ZGVzIiwic3RhdHVzIiwiZW5kIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwib2siLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/withHandler.ts\n");

/***/ }),

/***/ "(api)/./lib/withSession.ts":
/*!****************************!*\
  !*** ./lib/withSession.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"twitterSession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvd2l0aFNlc3Npb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEQ7QUFVNUQsTUFBTUMsYUFBYSxHQUFHO0lBQ3BCQyxVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0NBQ3RDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUU7SUFDdEMsT0FBT1IsMEVBQXVCLENBQUNRLEVBQUUsRUFBRVAsYUFBYSxDQUFDLENBQUM7Q0FDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLy4vbGliL3dpdGhTZXNzaW9uLnRzPzRlNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uQXBpUm91dGUgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJpcm9uLXNlc3Npb25cIiB7XG4gIGludGVyZmFjZSBJcm9uU2Vzc2lvbkRhdGEge1xuICAgIHVzZXI/OiB7XG4gICAgICBpZDogbnVtYmVyO1xuICAgIH07XG4gIH1cbn1cblxuY29uc3QgY29va2llT3B0aW9ucyA9IHtcbiAgY29va2llTmFtZTogXCJ0d2l0dGVyU2Vzc2lvblwiLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuQ09PS0lFX1BBU1NXT1JEISxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQXBpU2Vzc2lvbihmbjogYW55KSB7XG4gIHJldHVybiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShmbiwgY29va2llT3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsid2l0aElyb25TZXNzaW9uQXBpUm91dGUiLCJjb29raWVPcHRpb25zIiwiY29va2llTmFtZSIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIkNPT0tJRV9QQVNTV09SRCIsIndpdGhBcGlTZXNzaW9uIiwiZm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/withSession.ts\n");

/***/ }),

/***/ "(api)/./pages/api/tweets/index.ts":
/*!***********************************!*\
  !*** ./pages/api/tweets/index.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/withHandler */ \"(api)/./lib/withHandler.ts\");\n/* harmony import */ var _lib_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/withSession */ \"(api)/./lib/withSession.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_withSession__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    const tweets = await db?.post.findMany({\n        include: {\n            author: {\n                select: {\n                    username: true\n                }\n            },\n            _count: {\n                select: {\n                    Likes: true\n                }\n            }\n        }\n    });\n    res.json({\n        ok: true,\n        tweets\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withSession__WEBPACK_IMPORTED_MODULE_1__.withApiSession)((0,_lib_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"GET\"\n    ],\n    handler,\n    isPrivate: true\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXRzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUNPO0FBTTFELGVBQWVFLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLE1BQU1DLE1BQU0sR0FBRyxNQUFNQyxFQUFFLEVBQUVDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1FBQ3JDQyxPQUFPLEVBQUU7WUFDUEMsTUFBTSxFQUFFO2dCQUNOQyxNQUFNLEVBQUU7b0JBQ05DLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2FBQ0Y7WUFDREMsTUFBTSxFQUFFO2dCQUNORixNQUFNLEVBQUU7b0JBQ05HLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFDRlYsR0FBRyxDQUFDVyxJQUFJLENBQUM7UUFDUEMsRUFBRSxFQUFFLElBQUk7UUFDUlgsTUFBTTtLQUNQLENBQUMsQ0FBQztDQUNKO0FBRUQsaUVBQWVKLGdFQUFjLENBQzNCRCw0REFBVyxDQUFDO0lBQUVpQixPQUFPLEVBQUU7UUFBQyxLQUFLO0tBQUM7SUFBRWYsT0FBTztJQUFFZ0IsU0FBUyxFQUFFLElBQUk7Q0FBRSxDQUFDLENBQzVELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLy4vcGFnZXMvYXBpL3R3ZWV0cy9pbmRleC50cz8wMjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHdpdGhIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9saWIvd2l0aEhhbmRsZXJcIjtcbmltcG9ydCB7IHdpdGhBcGlTZXNzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi93aXRoU2Vzc2lvblwiO1xuXG5pbnRlcmZhY2UgUmVzcG9uc2VUeXBlIHtcbiAgb2s6IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlVHlwZT5cbikge1xuICBjb25zdCB0d2VldHMgPSBhd2FpdCBkYj8ucG9zdC5maW5kTWFueSh7XG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHVzZXJuYW1lOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIF9jb3VudDoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBMaWtlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5qc29uKHtcbiAgICBvazogdHJ1ZSxcbiAgICB0d2VldHMsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBpU2Vzc2lvbihcbiAgd2l0aEhhbmRsZXIoeyBtZXRob2RzOiBbXCJHRVRcIl0sIGhhbmRsZXIsIGlzUHJpdmF0ZTogdHJ1ZSB9KVxuKTtcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIndpdGhBcGlTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInR3ZWV0cyIsImRiIiwicG9zdCIsImZpbmRNYW55IiwiaW5jbHVkZSIsImF1dGhvciIsInNlbGVjdCIsInVzZXJuYW1lIiwiX2NvdW50IiwiTGlrZXMiLCJqc29uIiwib2siLCJtZXRob2RzIiwiaXNQcml2YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweets/index.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(context.req, context.res, sessionOptions);\n    Object.defineProperty(context.req, \"session\", getPropertyDescriptorForReqSession(session));\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLy4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzP2I5MmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcSwgXCJzZXNzaW9uXCIsIGdldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24oc2Vzc2lvbikpO1xuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhJcm9uU2Vzc2lvblNzcihoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBuZXh0R2V0U2VydmVyU2lkZVByb3BzSGFuZGxlcldyYXBwZWRXaXRoSXJvblNlc3Npb24oY29udGV4dCkge1xuICAgIGxldCBzZXNzaW9uT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IGF3YWl0IG9wdGlvbnMoY29udGV4dC5yZXEsIGNvbnRleHQucmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb24oY29udGV4dC5yZXEsIGNvbnRleHQucmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnRleHQucmVxLCBcInNlc3Npb25cIiwgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKSk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweets/index.ts"));
module.exports = __webpack_exports__;

})();