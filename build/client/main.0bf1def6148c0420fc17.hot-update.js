"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemy_app"]("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsList\": () => (/* binding */ CardsList)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cardslist_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\nfunction CardsList() {\r\n    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.token);\r\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\r\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\r\n    const [errorLoading, setErrorLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\r\n    const [nextAfter, setNextAfter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\r\n    const bottomOfList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\r\n        // if (token) {\r\n        // }\r\n        function load() {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                setLoading(true);\r\n                setErrorLoading('');\r\n                try {\r\n                    const { data: { data: { after, children } } } = yield axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('https://oauth.reddit.com/rising/', {\r\n                        headers: { Authorization: `bearer ${token}` },\r\n                        params: {\r\n                            limit: 10,\r\n                            after: nextAfter,\r\n                        }\r\n                    });\r\n                    setNextAfter(after);\r\n                    setPosts(prevChildren => prevChildren.concat(...children));\r\n                }\r\n                catch (error) {\r\n                    //console.log(error);\r\n                    setErrorLoading(String(error));\r\n                }\r\n                setLoading(false);\r\n            });\r\n        }\r\n        const observer = new IntersectionObserver((entries) => {\r\n            if (entries[0].isIntersecting) {\r\n                load();\r\n                console.log('load more');\r\n            }\r\n        }, {\r\n            rootMargin: '10px',\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return () => {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, nextAfter, token]);\r\n    const title = '';\r\n    const cards = [];\r\n    for (let i = 0; i < 10; i++) {\r\n        cards.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.Card, { key: i, title: title }));\r\n    }\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", { className: _cardslist_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cardsList },\r\n        posts.length === 0 && !loading && !errorLoading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n        posts.length > 0 ? posts.map(post => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.Card, { key: post.data.id, title: post.data.title }))) : cards,\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { ref: bottomOfList }),\r\n        loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n        errorLoading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { role: \"alert\", style: { textAlign: 'center' } }, errorLoading))));\r\n}\r\n\n\n//# sourceURL=webpack://my-app/./src/shared/CardsList/CardsList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d02d96f3d875d2cab5b2")
/******/ })();
/******/ 
/******/ }
);