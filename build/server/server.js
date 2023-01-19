/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 853:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap\" rel=\"stylesheet\");"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: #333333;\n    --white: #ffffff;\n    --orange: #CC6633;\n    --green: #A4CC33;\n    --whiteLightness: 100%;\n    --greyF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\n    --greyF3: #f3f3f3;;\n    --greyD9: #d9d9d9;\n    --greyC4: #c4c4c4;\n    --gray99: #999999;\n    --grey66: #666666;\n    --greyEC: #ECECEC;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: var(--greyF4);\n    font-size: 14px;\n    line-height: 16px;\n    font-family: 'Roboto', sans-serif;;\n}\n\n* {\n    color: var(--black);\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    \n}\n\nbutton {\n    padding: 0;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n}\n\n", ""]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 613:
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
    var list = [];
    // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = "";
            var needLayer = typeof item[5] !== "undefined";
            if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
            }
            if (item[2]) {
                content += "@media ".concat(item[2], " {");
            }
            if (needLayer) {
                content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
                content += "}";
            }
            if (item[2]) {
                content += "}";
            }
            if (item[4]) {
                content += "}";
            }
            return content;
        }).join("");
    };
    // import a list of modules into the list
    list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === "string") {
            modules = [[null, modules, undefined]];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
            }
            if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                    item[5] = layer;
                }
                else {
                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                    item[5] = layer;
                }
            }
            if (media) {
                if (!item[2]) {
                    item[2] = media;
                }
                else {
                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                    item[2] = media;
                }
            }
            if (supports) {
                if (!item[4]) {
                    item[4] = "".concat(supports);
                }
                else {
                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                    item[4] = supports;
                }
            }
            list.push(item);
        }
    };
    return list;
};


/***/ }),

/***/ 580:
/***/ ((module) => {


module.exports = function (i) {
    return i[1];
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
// EXTERNAL MODULE: ./src/main.global.css
var main_global = __webpack_require__(853);
;// CONCATENATED MODULE: external "react-hot-loader/root"
const root_namespaceObject = require("react-hot-loader/root");
;// CONCATENATED MODULE: ./src/shared/Header/header.css
// Exports
/* harmony default export */ const header = ({
	"header": "header__header__StEJO"
});

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/searchblock.css
// Exports
/* harmony default export */ const searchblock = ({
	"searchBlock": "searchblock__searchBlock__AiDOf"
});

;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/Break/break.css
// Exports
/* harmony default export */ const Break_break = ({
	"s4": "break__s4__O8iW2",
	"s8": "break__s8__b3aQF",
	"s12": "break__s12__syxHR",
	"s16": "break__s16__RkXwz",
	"s20": "break__s20__YTb2A",
	"inline": "break__inline__zuayT",
	"top": "break__top__XfTe4",
	"mobile_s4": "break__mobile_s4__IySaH",
	"mobile_s8": "break__mobile_s8__sXgDi",
	"mobile_s12": "break__mobile_s12__V4QLC",
	"mobile_s16": "break__mobile_s16__maxIn",
	"mobile_s20": "break__mobile_s20__uyxL0",
	"tablet_s4": "break__tablet_s4__xt7Uv",
	"tablet_s8": "break__tablet_s8__v3yPG",
	"tablet_s12": "break__tablet_s12__pCtU0",
	"tablet_s16": "break__tablet_s16__yz2qx",
	"tablet_s20": "break__tablet_s20__v1xvo",
	"desktop_s4": "break__desktop_s4__VXtX6",
	"desktop_s8": "break__desktop_s8__65Tsd",
	"desktop_s12": "break__desktop_s12__kKzTr",
	"desktop_s16": "break__desktop_s16__TMSvh",
	"desktop_s20": "break__desktop_s20__Ty2lW"
});

;// CONCATENATED MODULE: ./src/shared/Break/Break.tsx



function Break(props) {
    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;
    return (external_react_default().createElement("div", { className: external_classnames_default()(Break_break[`s${size}`], { [Break_break[`mobile_s${mobileSize}`]]: mobileSize }, { [Break_break[`tablet_s${tabletSize}`]]: tabletSize }, { [Break_break[`desktop_s${desktopSize}`]]: desktopSize }, { [Break_break.inline]: inline }, { [Break_break.top]: top }) }));
}

;// CONCATENATED MODULE: ./src/shared/Break/index.ts


;// CONCATENATED MODULE: ./src/shared/Icons/MenuIcon.tsx

function MenuIcon() {
    return (external_react_default().createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M12 5L12 5.01M12 12L12 12.01M12 19L12 19.01M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13ZM12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z", stroke: "#4A5568", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/BlockIcon.tsx

function BlockIcon() {
    return (external_react_default().createElement("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "14", height: "12", viewBox: "0 0 512.000000 512.000000", preserveAspectRatio: "xMidYMid meet" },
        external_react_default().createElement("g", { transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)", fill: "#999999", stroke: "none" },
            external_react_default().createElement("path", { d: "M2321 5110 c-497 -48 -990 -251 -1376 -565 -114 -92 -294 -274 -384\n            -387 -229 -287 -417 -675 -495 -1023 -49 -218 -60 -325 -60 -575 0 -250 11\n            -357 60 -575 79 -355 272 -749 509 -1040 92 -114 274 -294 387 -384 287 -229\n            675 -417 1023 -495 218 -49 325 -60 575 -60 250 0 357 11 575 60 261 58 603\n            204 828 353 389 259 688 599 893 1016 125 255 196 484 241 775 24 161 24 539\n            0 700 -45 291 -116 520 -241 775 -134 272 -283 480 -498 692 -211 209 -404\n            346 -673 478 -252 124 -486 197 -765 240 -126 19 -468 27 -599 15z m389 -510\n            c374 -29 739 -161 1033 -374 l69 -49 -1434 -1434 -1433 -1433 -23 27 c-101\n            124 -248 406 -307 588 -238 743 -48 1533 499 2081 336 336 784 548 1251 593\n            129 12 193 12 345 1z m1561 -920 c75 -112 191 -352 234 -485 238 -743 48\n            -1533 -499 -2081 -487 -487 -1179 -696 -1850 -559 -278 56 -557 177 -779 339\n            l-69 49 1434 1434 1433 1433 23 -27 c12 -16 45 -62 73 -103z" }))));
}

;// CONCATENATED MODULE: ./src/shared/Icons/WarningIcon.tsx

function WarninIcon() {
    return (external_react_default().createElement("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "14", height: "12", viewBox: "0 0 512.000000 512.000000", preserveAspectRatio: "xMidYMid meet" },
        external_react_default().createElement("g", { transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)", fill: "#999999", stroke: "none" },
            external_react_default().createElement("path", { d: "M2402 4865 c-184 -42 -353 -152 -456 -299 -55 -77 -1826 -3143 -1872 -3240 -53 -113 -69 -185 -68 -321 0 -94 5 -137 22 -199 68 -240 242 -433 465\n            -516 138 -52 54 -50 2059 -50 2021 0 1941 -2 2078 53 103 42 172 89 260 177 96 96 141 166 181 279 72 203 62 394 -30 586 -43 91 -1766 3079 -1843 3198\n            -101 154 -268 276 -443 323 -83 22 -273 27 -353 9z m284 -1380 c84 -41 138 -117 153 -217 6 -32 -2 -219 -20 -522 -16 -259 -33 -564 -38 -679 -8 -190 -10\n            -211 -33 -255 -34 -67 -92 -105 -168 -110 -104 -8 -179 35 -216 123 -16 39 -24 149 -90 1305 -8 136 7 203 59 272 35 45 121 104 166 112 54 9 134 -3 187\n            -29z m0 -2020 c161 -79 204 -301 85 -437 -173 -196 -492 -74 -492 187 0 212 215 344 407 250z" }))));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconAnon.tsx

function IconAnon() {
    return (external_react_default().createElement("svg", { version: "1.0", width: "50", height: "50", viewBox: "0 0 512.000000 512.000000", preserveAspectRatio: "xMidYMid meet" },
        external_react_default().createElement("g", { transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)", fill: "#999999", stroke: "none" },
            external_react_default().createElement("path", { d: "M2257 5105 c-581 -73 -1107 -333 -1514 -746 -207 -210 -342 -398\n        -472 -660 -171 -342 -255 -680 -268 -1069 -28 -878 404 -1708 1147 -2205 128\n        -86 383 -215 534 -270 138 -51 376 -110 531 -131 159 -23 520 -25 665 -5 583\n        81 1080 325 1484 727 394 394 645 888 733 1444 26 163 25 586 0 748 -87 541\n        -322 1017 -697 1405 -386 401 -889 661 -1455 753 -138 22 -543 28 -688 9z\n        m556 -250 c382 -45 718 -167 1029 -376 265 -176 509 -428 678 -699 69 -109\n        180 -340 220 -455 89 -256 125 -474 125 -765 0 -237 -14 -357 -65 -560 -41\n        -163 -81 -274 -159 -435 -125 -259 -248 -432 -451 -635 -202 -202 -373 -324\n        -634 -451 -463 -227 -1010 -287 -1520 -168 -317 73 -654 237 -921 447 -172\n        136 -389 381 -513 579 -482 771 -467 1750 39 2505 176 265 427 508 695 676\n        312 194 643 305 1034 345 93 10 328 5 443 -8z" }),
            external_react_default().createElement("path", { d: "M2420 4375 c-350 -56 -627 -304 -731 -650 -30 -101 -37 -303 -15\n        -416 69 -339 325 -610 661 -701 115 -31 336 -31 450 0 279 76 508 278 614 542\n        93 235 81 514 -34 740 -176 349 -564 547 -945 485z m336 -270 c103 -32 168\n        -71 248 -146 101 -94 171 -219 196 -347 19 -96 9 -251 -23 -340 -90 -257 -314\n        -424 -587 -439 -310 -17 -593 195 -665 500 -19 80 -19 224 0 305 28 120 97\n        235 195 326 96 88 205 142 338 166 77 14 211 3 298 -25z" }),
            external_react_default().createElement("path", { d: "M1910 2295 c-224 -35 -426 -136 -594 -295 -189 -179 -303 -396 -341\n        -650 -27 -176 -15 -239 54 -275 91 -46 181 21 181 135 0 30 9 96 19 145 36\n        176 111 316 235 440 134 134 272 210 453 246 89 19 132 20 677 17 566 -4 583\n        -4 661 -26 367 -102 626 -417 652 -792 7 -98 21 -133 66 -160 59 -36 130 -18\n        167 43 24 39 25 96 6 227 -38 252 -150 466 -338 646 -174 166 -371 264 -605\n        299 -134 20 -1164 20 -1293 0z" }))));
}

;// CONCATENATED MODULE: ./src/shared/Icons/index.ts





;// CONCATENATED MODULE: ./src/shared/Text/text.css
// Exports
/* harmony default export */ const Text_text = ({
	"s28": "text__s28__vWk_Z",
	"s20": "text__s20__WkBzB",
	"s16": "text__s16__m384Y",
	"s14": "text__s14__Byg5u",
	"s12": "text__s12__a8D6A",
	"s10": "text__s10__JLRe9",
	"bold": "text__bold__nf1wG",
	"black": "text__black__HTnbj",
	"orange": "text__orange__MlRVH",
	"green": "text__green__zEinV",
	"white": "text__white__SmhPe",
	"greyF4": "text__greyF4__gHgQk",
	"greyF3": "text__greyF3__jaC2S",
	"greyD9": "text__greyD9__LmIDn",
	"greyC4": "text__greyC4__xzbpm",
	"grey99": "text__grey99__hnpe2",
	"grey66": "text__grey66__Llrpi",
	"m28": "text__m28__QsuLD",
	"m20": "text__m20__zrLCf",
	"m16": "text__m16__kioX4",
	"m14": "text__m14__uPREK",
	"m12": "text__m12___DXJM",
	"m10": "text__m10__b_JMj",
	"t28": "text__t28__lN8UK",
	"t20": "text__t20__qXHjP",
	"t16": "text__t16__byNHS",
	"t14": "text__t14__aBgGX",
	"t12": "text__t12__bI_Mq",
	"t10": "text__t10__UC7n1",
	"d28": "text__d28__kaTcK",
	"d20": "text__d20__iSlar",
	"d16": "text__d16__RDaL8",
	"d14": "text__d14__qsDc6",
	"d12": "text__d12__xbIkA",
	"d10": "text__d10__tsQb2"
});

;// CONCATENATED MODULE: ./src/shared/Text/Text.tsx



/**
 * font-size: 28px;
 * line-height: 33px;
 *
 * font-size: 20px;
 * line-height: 23px;
 *
 * font-size: 16px;
 * line-height: 19px;
 *
 * font-size: 14px;
 * line-height: 16px;
 *
 * font-size: 12px;
 * line-height: 14px;
 *
 * font-size: 10px;
 * line-height: 12px;
 *
 * span, h1234, p, div
 *
 * colors: 10
 */
var EColors;
(function (EColors) {
    EColors["black"] = "black";
    EColors["white"] = "white";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["greyF4"] = "greyF4";
    EColors["greyF3"] = "greyF3";
    EColors["greyD9"] = "greyD9";
    EColors["greyC4"] = "greyC4";
    EColors["gray99"] = "gray99";
    EColors["grey66"] = "gray66";
})(EColors || (EColors = {}));
function Text(props) {
    const { As = 'span', color = EColors.black, bold = false, children, size, mobileSize, tabletSize, desktopSize } = props;
    const classes = external_classnames_default()(Text_text[`s${size}`], Text_text[color], { [Text_text.bold]: bold }, { [Text_text[`m${mobileSize}`]]: mobileSize }, { [Text_text[`t${tabletSize}`]]: tabletSize }, { [Text_text[`d${desktopSize}`]]: desktopSize });
    return (external_react_default().createElement(As, { className: classes }, children));
}

;// CONCATENATED MODULE: ./src/shared/Text/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/userblock.css
// Exports
/* harmony default export */ const userblock = ({
	"userBox": "userblock__userBox__Nm25r",
	"avatarBox": "userblock__avatarBox__x3w7E",
	"avatarImage": "userblock__avatarImage__rrs9K",
	"username": "userblock__username__f8XW1"
});

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx





function UserBlock({ avatarSrc, username, loading }) {
    console.log('undefined');
    return (external_react_default().createElement("a", { href: `https://www.reddit.com/api/v1/authorize?client_id=HTWtjH1kBxmOarlapoMQow&response_type=code&state=random_string&redirect_uri=http://localhost:3000/profile&duration=permanent&scope=identity read submit`, className: userblock.userBox },
        external_react_default().createElement("div", { className: userblock.avatarBox }, avatarSrc
            ? external_react_default().createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock.avatarImage })
            : external_react_default().createElement(IconAnon, null)),
        external_react_default().createElement("div", { className: userblock.username },
            external_react_default().createElement(Break, { size: 12 }),
            loading ? (external_react_default().createElement(Text, { size: 20, color: EColors.gray99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (external_react_default().createElement(Text, { size: 20, color: username ? EColors.black : EColors.gray99 }, username || 'Аноним')))));
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/index.ts


;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/store/me/actions.ts

const ME_REQUEST = 'ME_REQUEST';
const meRequest = () => ({
    type: ME_REQUEST,
});
const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
const meRequestSuccess = (data) => ({
    type: ME_REQUEST_SUCCESS,
    data,
});
const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
const meRequestError = (error) => ({
    type: ME_REQUEST_ERROR,
    error,
});
const meRequestAsync = () => (dispatch, getState) => {
    dispatch(meRequest());
    external_axios_default().get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${getState().token}`,
        }
    })
        .then((resp) => {
        const userData = resp.data;
        //const myUserData = ({ name: userData.name, iconImg: userData.profileImg });
        console.log('UserData:', userData);
        //setData(myUserData);
        dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.profileImg }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(meRequestError(String(error)));
    });
};

;// CONCATENATED MODULE: ./src/hooks/useUserData.ts



// interface IUserData {
//     name?: string;
//     iconImg?: string;
//   }
function useUserData() {
    //const [data, setData] = useState<IUserData>({});
    const data = (0,external_react_redux_namespaceObject.useSelector)(state => state.me.data);
    const loading = (0,external_react_redux_namespaceObject.useSelector)(state => state.me.loading);
    const token = (0,external_react_redux_namespaceObject.useSelector)(state => state.token);
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    (0,external_react_namespaceObject.useEffect)(() => {
        if (!token)
            return;
        dispatch(meRequestAsync());
    }, [token]);
    return {
        data,
        loading,
    };
}
// useEffect(() => {
//   const sendPostRequest = async () => {
//       const resp = await axios.get('https://oauth.reddit.com/api/v1/me', {
//         headers: { Authorization: `bearer ${token}` }
//       })
//       .then((resp) => {
//         const userData = resp.data;
//         setData({ name: userData.name, iconImg: userData.icon_img });
//       })
//      }
//       }, [token])

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/SearchBlock.tsx




function SearchBlock() {
    const { data, loading } = useUserData();
    //const {iconImg, name} = useContext(userContext)
    return (external_react_default().createElement("div", { className: searchblock.searchBlock },
        external_react_default().createElement(UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/sortblock.css
// Exports
/* harmony default export */ const sortblock = ({
	"sortBlock": "sortblock__sortBlock__Z8cCd"
});

;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/SortBlock.tsx


function SortBlock() {
    return (external_react_default().createElement("div", { className: sortblock.sortBlock }, "sorting dropdown"));
}

;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/threadtitle.css
// Exports
/* harmony default export */ const threadtitle = ({
	"threadTitle": "threadtitle__threadTitle__BSyHO"
});

;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/ThreadTitle.tsx


function ThreadTitle() {
    return (external_react_default().createElement("h1", { className: threadtitle.threadTitle }, "Header"));
}

;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/Header.tsx





function Header() {
    return (external_react_default().createElement("header", { className: header.header },
        external_react_default().createElement(SearchBlock, null),
        external_react_default().createElement(ThreadTitle, null),
        external_react_default().createElement(SortBlock, null)));
}

;// CONCATENATED MODULE: ./src/shared/Header/index.ts


;// CONCATENATED MODULE: ./src/shared/Layout/layout.css
// Exports
/* harmony default export */ const layout = ({
	"layout": "layout__layout__TomHf"
});

;// CONCATENATED MODULE: ./src/shared/Layout/Layout.tsx


function Layout({ children }) {
    return (external_react_default().createElement("div", { className: layout.layout }, children));
}

;// CONCATENATED MODULE: ./src/shared/Layout/index.ts


;// CONCATENATED MODULE: ./src/shared/Content/content.css
// Exports
/* harmony default export */ const content = ({
	"content": "content__content__LaQEL"
});

;// CONCATENATED MODULE: ./src/shared/Content/Content.tsx


function Content({ children }) {
    return (external_react_default().createElement("main", { className: content.content }, children));
}

;// CONCATENATED MODULE: ./src/shared/Content/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/cardslist.css
// Exports
/* harmony default export */ const cardslist = ({
	"cardsList": "cardslist__cardsList__dIjIi"
});

;// CONCATENATED MODULE: ./src/shared/Dropdown/dropdown.css
// Exports
/* harmony default export */ const dropdown = ({
	"container": "dropdown__container__dt6ns",
	"listContainer": "dropdown__listContainer__Q6YJw",
	"list": "dropdown__list__dSmoa"
});

;// CONCATENATED MODULE: ./src/shared/Dropdown/Dropdown.tsx


const NOOP = () => { };
function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }) {
    const [isDropdownOpen, setIsDropdownOpen] = external_react_default().useState(isOpen);
    external_react_default().useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    external_react_default().useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
    const handleClick = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    return (external_react_default().createElement("div", { className: dropdown.container },
        external_react_default().createElement("div", { onClick: (handleClick) }, button),
        isDropdownOpen && (external_react_default().createElement("div", { className: dropdown.listContainer },
            external_react_default().createElement("div", { className: dropdown.list, onClick: () => setIsDropdownOpen(false) }, children)))));
}

;// CONCATENATED MODULE: ./src/shared/Dropdown/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/menu.css
// Exports
/* harmony default export */ const menu = ({
	"menu": "menu__menu__YnZJb",
	"menuButton": "menu__menuButton__MQlXM",
	"dropdown": "menu__dropdown__dbmJv",
	"closeButton": "menu__closeButton__bSQll"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css
// Exports
/* harmony default export */ const menuitemslist = ({
	"menuItemsList": "menuitemslist__menuItemsList__jLxk5",
	"menuItem": "menuitemslist__menuItem__F4Mjc",
	"divider": "menuitemslist__divider__NSfrl"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx




function MenuItemsList({ postId }) {
    return (external_react_default().createElement("ul", { className: menuitemslist.menuItemsList },
        external_react_default().createElement("li", { className: menuitemslist.menuItem, onClick: () => console.log(postId) },
            external_react_default().createElement(BlockIcon, null),
            external_react_default().createElement(Text, { size: 14, mobileSize: 12, color: EColors.gray99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        external_react_default().createElement("div", { className: menuitemslist.divider }),
        external_react_default().createElement("li", { className: menuitemslist.menuItem },
            external_react_default().createElement(WarninIcon, null),
            external_react_default().createElement(Text, { size: 12, color: EColors.gray99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/Menu.tsx






function Menu() {
    return (external_react_default().createElement("div", { className: menu.menu },
        external_react_default().createElement(Dropdown, { button: external_react_default().createElement("button", { className: menu.menuButton },
                external_react_default().createElement(MenuIcon, null)) },
            external_react_default().createElement("div", { className: menu.dropdown },
                external_react_default().createElement(MenuItemsList, { postId: '1234' }),
                external_react_default().createElement("button", { className: menu.closeButton },
                    external_react_default().createElement(Text, { mobileSize: 12, size: 14, color: EColors.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Menu/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Preview/preview.css
// Exports
/* harmony default export */ const preview = ({
	"preview": "preview__preview__RIuWJ",
	"previewImg": "preview__previewImg__zqJm3"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Preview/Preview.tsx


function Preview() {
    return (external_react_default().createElement("div", { className: preview.preview },
        external_react_default().createElement("img", { className: preview.previewImg, src: "https://cdn.dribbble.com/userupload/4103731/file/original-ab820d798d635bc4e28233d358833a3f.jpg?compress=1&resize=600x450" })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Preview/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/textcontent.css
// Exports
/* harmony default export */ const textcontent = ({
	"textContent": "textcontent__textContent__Sn_2j",
	"metaData": "textcontent__metaData__oQdZE",
	"userLink": "textcontent__userLink__YWiTH",
	"avatar": "textcontent__avatar__gSD62",
	"username": "textcontent__username__kJdQv",
	"createdAt": "textcontent__createdAt__OIehr",
	"publishedLabel": "textcontent__publishedLabel__zzjjS",
	"title": "textcontent__title__nLTlo",
	"postLink": "textcontent__postLink__F2Ov2"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/Title/title.css
// Exports
/* harmony default export */ const Title_title = ({
	"title": "title__title__GddAU",
	"postLink": "title__postLink__S9H0N"
});

;// CONCATENATED MODULE: external "react-router-dom"
const external_react_router_dom_namespaceObject = require("react-router-dom");
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/Title/Title.tsx



const Title = ({ title }) => {
    return (external_react_default().createElement("div", null,
        external_react_default().createElement("h2", { className: Title_title.title },
            external_react_default().createElement(external_react_router_dom_namespaceObject.Link, { to: "/posts/1", className: Title_title.postLink }, "\u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))));
};
/* harmony default export */ const Title_Title = (Title);

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/TextContent.tsx



function TextContent({ title }) {
    return (external_react_default().createElement("div", { className: textcontent.textContent },
        external_react_default().createElement("div", { className: textcontent.metaData },
            external_react_default().createElement("div", { className: textcontent.userLink },
                external_react_default().createElement("img", { className: textcontent.avatar, src: "https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=800x600&vertical=top", alt: "avatar" }),
                external_react_default().createElement("a", { href: "#user-url", className: textcontent.username }, "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0413\u0440\u0438\u0448\u0438\u043D")),
            external_react_default().createElement("span", { className: textcontent.createdAt },
                external_react_default().createElement("span", { className: textcontent.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
                "4 \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434")),
        external_react_default().createElement(Title_Title, { title: title })));
}
// onClick={ () => {console.log('clicked!!!')} }

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/TextContent/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/card.css
// Exports
/* harmony default export */ const card = ({
	"card": "card__card__dPIIn"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/controls.css
// Exports
/* harmony default export */ const controls = ({
	"controls": "controls__controls__QwWTA",
	"karmaCounter": "controls__karmaCounter__eqNQ5",
	"karmaValue": "controls__karmaValue__X1lkv",
	"down": "controls__down__U1c6u",
	"commentsButton": "controls__commentsButton__DotKf",
	"commentsNumber": "controls__commentsNumber__iDq09",
	"sharedButton": "controls__sharedButton__Yurto",
	"saveButton": "controls__saveButton__WqnJE",
	"actions": "controls__actions__RIsv2",
	"up": "controls__up__zKF6i"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/Controls.tsx


function Controls() {
    return (external_react_default().createElement("div", { className: controls.controls },
        external_react_default().createElement("div", { className: controls.karmaCounter },
            external_react_default().createElement("button", { className: controls.up },
                external_react_default().createElement("svg", { fill: "none", height: "15", viewBox: "0 0 15 15", width: "15", xmlns: "http://www.w3.org/2000/svg" },
                    external_react_default().createElement("path", { d: "M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z", fill: "#888888" }))),
            external_react_default().createElement("span", { className: controls.karmaValue }, "234"),
            external_react_default().createElement("button", { className: controls.down },
                external_react_default().createElement("svg", { className: controls.down, fill: "none", height: "15", viewBox: "0 0 15 15", width: "15", xmlns: "http://www.w3.org/2000/svg" },
                    external_react_default().createElement("path", { d: "M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z", fill: "#888888" })))),
        external_react_default().createElement("button", { className: controls.commentsButton },
            external_react_default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "15px", height: "17px" },
                external_react_default().createElement("path", { d: "M20,5c0-0.55-0.45-1-1-1H5C4.45,4,4,4.45,4,5v14c0,0.55,0.45,1,1,1l11.7,0.03l-0.22-0.93L20,21.96V5z M13.8,14c-0.99,0-1.8-0.9-1.8-2c0,1.1-0.81,2-1.8,2s-1.8-0.9-1.8-2c0-1.1,0.81-2,1.8-2s1.8,0.9,1.8,2c0-1.1,0.81-2,1.8-2\ts1.8,0.9,1.8,2C15.6,13.1,14.79,14,13.8,14z", opacity: ".35" }),
                external_react_default().createElement("path", { fill: "none", stroke: "#888888", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "2", d: "M16.48,19.097l0.216,0.93\tL5,20c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v16.955L16.48,19.097z" }),
                external_react_default().createElement("path", { d: "M17,14.005c-1.176,1.344-2.956,1.352-2.956,1.352l-0.368-0.492c0.376-0.129,0.698-0.296,1.028-0.551l-0.07-0.203\tc-0.615,0.28-1.404,0.446-2.634,0.446s-2.019-0.165-2.634-0.446l-0.07,0.203c0.329,0.254,0.651,0.421,1.028,0.551l-0.368,0.492\tc0,0-1.78-0.008-2.956-1.352c0.2-3.276,1.364-4.952,1.364-4.952s0.98-0.772,2.272-0.896l0.251,0.51\tc0.37-0.064,0.763-0.11,1.113-0.11c0.339,0,0.732,0.05,1.109,0.119l0.255-0.519c1.232,0.092,2.272,0.896,2.272,0.896\tS16.8,10.729,17,14.005z M11,12c0-0.552-0.36-1-0.8-1c-0.44,0-0.8,0.448-0.8,1s0.36,1,0.8,1C10.64,13,11,12.552,11,12z M14.6,12\tc0-0.552-0.36-1-0.8-1c-0.44,0-0.8,0.448-0.8,1s0.36,1,0.8,1C14.24,13,14.6,12.552,14.6,12z" })),
            external_react_default().createElement("span", { className: controls.commentsNumber }, "13")),
        external_react_default().createElement("div", { className: controls.actions },
            external_react_default().createElement("button", { className: controls.sharedButton },
                external_react_default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "#888888", viewBox: "0 0 18 16" },
                    external_react_default().createElement("path", { d: "M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" }))),
            external_react_default().createElement("button", { className: controls.savedButton },
                external_react_default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "19", fill: "#888888", viewBox: "0 0 16 16" },
                    external_react_default().createElement("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z" }))))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Controls/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Card.tsx






function Card({ title }) {
    return (external_react_default().createElement("li", { className: card.card },
        external_react_default().createElement(TextContent, { title: title }),
        external_react_default().createElement(Preview, null),
        external_react_default().createElement(Menu, null),
        external_react_default().createElement(Controls, null)));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/CardsList.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function CardsList() {
    const token = (0,external_react_redux_namespaceObject.useSelector)(state => state.token);
    const [posts, setPosts] = (0,external_react_namespaceObject.useState)([]);
    const [loading, setLoading] = (0,external_react_namespaceObject.useState)(false);
    const [errorLoading, setErrorLoading] = (0,external_react_namespaceObject.useState)('');
    const [nextAfter, setNextAfter] = (0,external_react_namespaceObject.useState)('');
    const bottomOfList = (0,external_react_namespaceObject.useRef)(null);
    (0,external_react_namespaceObject.useEffect)(() => {
        // if (token) {
        // }
        function load() {
            return __awaiter(this, void 0, void 0, function* () {
                setLoading(true);
                setErrorLoading('');
                try {
                    const { data: { data: { after, children } } } = yield external_axios_default().get('https://oauth.reddit.com/rising/', {
                        headers: { Authorization: `bearer ${token}` },
                        params: {
                            limit: 10,
                            after: nextAfter,
                        }
                    });
                    setNextAfter(after);
                    setPosts(prevChildren => prevChildren.concat(...children));
                }
                catch (error) {
                    //console.log(error);
                    setErrorLoading(String(error));
                }
                setLoading(false);
            });
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                load();
                console.log('load more');
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, nextAfter, token]);
    const title = '';
    const card = external_react_default().createElement(Card, { title: title });
    const cards = [];
    for (let i = 0; i < 10; i++) {
        cards.push(card);
    }
    return (external_react_default().createElement("ul", { className: cardslist.cardsList },
        posts.length === 0 && !loading && !errorLoading && (external_react_default().createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        posts.length > 0 ? posts.map(post => (external_react_default().createElement(Card, { key: post.data.id, title: post.data.title }))) : cards,
        external_react_default().createElement("div", { ref: bottomOfList }),
        loading && (external_react_default().createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        errorLoading && (external_react_default().createElement("div", { role: "alert", style: { textAlign: 'center' } }, errorLoading))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/index.ts


;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./src/store/me/reducer.ts

const meReducer = (state, action) => {
    switch (action.type) {
        case ME_REQUEST:
            return Object.assign(Object.assign({}, state), { loading: true });
        case ME_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case ME_REQUEST_SUCCESS:
            return Object.assign(Object.assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducer.ts


const initialState = {
    commentText: 'Привет, Элька!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {},
    },
};
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const updateComment = (text) => ({
    type: UPDATE_COMMENT,
    text,
});
const SET_TOKEN = 'SET_TOKEN';
const setToken = (token) => ({
    type: SET_TOKEN,
    token,
});
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return Object.assign(Object.assign({}, state), { commentText: action.text });
        case SET_TOKEN:
            return Object.assign(Object.assign({}, state), { token: action.token });
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return Object.assign(Object.assign({}, state), { me: meReducer(state.me, action) });
        default:
            return state;
    }
};

;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/CommentForm/commentForm.css
// Exports
/* harmony default export */ const commentForm = ({
	"form": "commentForm__form__GbF8q",
	"input": "commentForm__input__VWsth",
	"button": "commentForm__button__nJ0Wa"
});

;// CONCATENATED MODULE: ./src/shared/CommentForm/CommentForm.tsx


function CommentForm({ value, onChange, onSubmit, touched, valueError }) {
    return (external_react_default().createElement("form", { className: commentForm.form, onSubmit: onSubmit },
        external_react_default().createElement("textarea", { className: commentForm.input, value: value, onChange: onChange, "aria-invalid": valueError ? 'true' : undefined }),
        touched && valueError && (external_react_default().createElement("div", null, valueError)),
        external_react_default().createElement("button", { type: "submit", className: commentForm.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}

;// CONCATENATED MODULE: ./src/shared/CommentForm/index.ts


;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/CommentFormContainer.tsx




function CommentFormContainer() {
    // const store = useStore<RootState>();
    // const value = store.getState().commentText
    const [touched, setTouched] = (0,external_react_namespaceObject.useState)(false);
    const [valueError, setValueError] = (0,external_react_namespaceObject.useState)('');
    const value = (0,external_react_redux_namespaceObject.useSelector)(state => state.commentText);
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    function handleSubmit(event) {
        event.preventDefault();
        setTouched(true);
        setValueError(validateValue());
        const isFormValid = !validateValue();
        if (!isFormValid)
            return;
        console.log(value);
        alert('Форма отправлена!');
    }
    function validateValue() {
        if (value.length <= 3)
            return 'ВВедите больше 3-х символов';
        return '';
    }
    function handleChange(event) {
        dispatch(updateComment(event.target.value));
    }
    return (external_react_default().createElement(CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit, touched: touched, valueError: valueError }));
}

;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/index.ts


;// CONCATENATED MODULE: ./src/shared/Post/post.css
// Exports
/* harmony default export */ const post = ({
	"modal": "post__modal__khoU4"
});

;// CONCATENATED MODULE: ./src/shared/Post/Post.tsx





function Post() {
    const ref = (0,external_react_namespaceObject.useRef)(null);
    const history = (0,external_react_router_dom_namespaceObject.useHistory)();
    (0,external_react_namespaceObject.useEffect)(() => {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history.push('/');
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    const node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return external_react_dom_default().createPortal((external_react_default().createElement("div", { className: post.modal, ref: ref },
        external_react_default().createElement("h2", null, " \u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442"),
        external_react_default().createElement("div", { className: post.content },
            external_react_default().createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432, \u0438\u043D\u0438\u0446\u0438\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u043A\u0430\u043A \u043F\u0440\u0435\u0442\u0435\u043D\u0434\u0435\u043D\u0442\u044B \u043D\u0430 \u0440\u043E\u043B\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432. \u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0442\u043A\u0438\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u0430: \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0432\u0435\u0441\u0442\u043A\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u0433\u043E \u0434\u043D\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0448\u043D\u0435\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043E\u043B\u0438\u0442\u0438\u043A. \u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0442\u043A\u0438\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u0430: \u0432\u044B\u0441\u043E\u043A\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u042F\u0432\u043B\u044F\u044F\u0441\u044C \u0432\u0441\u0435\u0433\u043E \u043B\u0438\u0448\u044C \u0447\u0430\u0441\u0442\u044C\u044E \u043E\u0431\u0449\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u044B, \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0435\u0442\u044C \u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u2013 \u0441\u043C\u0435\u0448\u0430\u043D\u044B \u0441 \u043D\u0435\u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043E \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0439 \u043D\u0435\u0443\u0437\u043D\u0430\u0432\u0430\u0435\u043C\u043E\u0441\u0442\u0438, \u0438\u0437-\u0437\u0430 \u0447\u0435\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u0438\u0445 \u0441\u0442\u0430\u0442\u0443\u0441 \u0431\u0435\u0441\u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0441\u0442\u0438. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u043E\u0434\u0432\u0435\u0440\u0433\u043D\u0443\u0442\u044B \u0446\u0435\u043B\u043E\u0439 \u0441\u0435\u0440\u0438\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439."),
            external_react_default().createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432, \u0438\u043D\u0438\u0446\u0438\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u043A\u0430\u043A \u043F\u0440\u0435\u0442\u0435\u043D\u0434\u0435\u043D\u0442\u044B \u043D\u0430 \u0440\u043E\u043B\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432. \u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0442\u043A\u0438\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u0430: \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0432\u0435\u0441\u0442\u043A\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u0433\u043E \u0434\u043D\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0448\u043D\u0435\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043E\u043B\u0438\u0442\u0438\u043A. \u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0442\u043A\u0438\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u0430: \u0432\u044B\u0441\u043E\u043A\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u042F\u0432\u043B\u044F\u044F\u0441\u044C \u0432\u0441\u0435\u0433\u043E \u043B\u0438\u0448\u044C \u0447\u0430\u0441\u0442\u044C\u044E \u043E\u0431\u0449\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u044B, \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0435\u0442\u044C \u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u2013 \u0441\u043C\u0435\u0448\u0430\u043D\u044B \u0441 \u043D\u0435\u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043E \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0439 \u043D\u0435\u0443\u0437\u043D\u0430\u0432\u0430\u0435\u043C\u043E\u0441\u0442\u0438, \u0438\u0437-\u0437\u0430 \u0447\u0435\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u0438\u0445 \u0441\u0442\u0430\u0442\u0443\u0441 \u0431\u0435\u0441\u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0441\u0442\u0438. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u043E\u0434\u0432\u0435\u0440\u0433\u043D\u0443\u0442\u044B \u0446\u0435\u043B\u043E\u0439 \u0441\u0435\u0440\u0438\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439."),
            external_react_default().createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432, \u0438\u043D\u0438\u0446\u0438\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u043A\u0430\u043A \u043F\u0440\u0435\u0442\u0435\u043D\u0434\u0435\u043D\u0442\u044B \u043D\u0430 \u0440\u043E\u043B\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432. \u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0442\u043A\u0438\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u0430: \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0432\u0435\u0441\u0442\u043A\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u0433\u043E \u0434\u043D\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0448\u043D\u0435\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043E\u043B\u0438\u0442\u0438\u043A. \u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0442\u043A\u0438\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u0430: \u0432\u044B\u0441\u043E\u043A\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u042F\u0432\u043B\u044F\u044F\u0441\u044C \u0432\u0441\u0435\u0433\u043E \u043B\u0438\u0448\u044C \u0447\u0430\u0441\u0442\u044C\u044E \u043E\u0431\u0449\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u044B, \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0443\u044E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0435\u0442\u044C \u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u2013 \u0441\u043C\u0435\u0448\u0430\u043D\u044B \u0441 \u043D\u0435\u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043E \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0439 \u043D\u0435\u0443\u0437\u043D\u0430\u0432\u0430\u0435\u043C\u043E\u0441\u0442\u0438, \u0438\u0437-\u0437\u0430 \u0447\u0435\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u0438\u0445 \u0441\u0442\u0430\u0442\u0443\u0441 \u0431\u0435\u0441\u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0441\u0442\u0438. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u043E\u0434\u0432\u0435\u0440\u0433\u043D\u0443\u0442\u044B \u0446\u0435\u043B\u043E\u0439 \u0441\u0435\u0440\u0438\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439.")),
        external_react_default().createElement(CommentFormContainer, null))), node);
}

;// CONCATENATED MODULE: ./src/shared/Post/index.ts


;// CONCATENATED MODULE: ./src/App.tsx














const store = (0,external_redux_namespaceObject.createStore)(rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
function AppComponent() {
    const [mounted, setMounted] = (0,external_react_namespaceObject.useState)(false);
    (0,external_react_namespaceObject.useEffect)(() => {
        setMounted(true);
    }, []);
    (0,external_react_namespaceObject.useEffect)(() => {
        const token = localStorage.getItem('token') || window.__token__;
        store.dispatch(setToken(token));
        if (token) {
            localStorage.setItem('token', token);
        }
    }, []);
    return (external_react_default().createElement((external_react_default()).StrictMode, null,
        external_react_default().createElement(external_react_redux_namespaceObject.Provider, { store: store }, mounted &&
            external_react_default().createElement(external_react_router_dom_namespaceObject.BrowserRouter, null,
                external_react_default().createElement(Layout, null,
                    external_react_default().createElement(Header, null),
                    external_react_default().createElement(Content, null,
                        external_react_default().createElement(CardsList, null),
                        external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: "/posts/:id" },
                            external_react_default().createElement(Post, null))))))));
}
const App = (0,root_namespaceObject.hot)(() => external_react_default().createElement(AppComponent, null));

;// CONCATENATED MODULE: ./src/server/index.js
const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <title>Reddit for me</title>
    <script src="/public/client.js" type="application/javascript"></script>
    <script>
    window.__token__ = '${token}'
    </script>
</head>
<body>
    <div id="react_root">${content}</div>
    <div id="modal_root"></div>
</body>
</html>
`;
//<meta name="viewport" content="width=device-width"> - Плохо работал ReactdevTool в браузере!!!!!!!!!!!!!!

;// CONCATENATED MODULE: external "compression"
const external_compression_namespaceObject = require("compression");
var external_compression_default = /*#__PURE__*/__webpack_require__.n(external_compression_namespaceObject);
;// CONCATENATED MODULE: external "helmet"
const external_helmet_namespaceObject = require("helmet");
var external_helmet_default = /*#__PURE__*/__webpack_require__.n(external_helmet_namespaceObject);
;// CONCATENATED MODULE: ./src/server/server.js







const app = external_express_default()();
app.use('/public', external_express_default()["static"]('./build/client'));
app.use(external_compression_default()());
app.use(external_helmet_default()({
    contentSecurityPolicy: false,
}));
app.get('/', (req, res) => {
    res.send(indexTemplate(server_default().renderToString(App())));
});
app.get('/profile', (req, res) => {
    external_axios_default().post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/profile`, {
        auth: { username: 'undefined', password: 'LXXi58jznCTTW8NhK28DYyXNsPsX_w' },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', }
    })
        .then(({ data }) => {
        res.send(indexTemplate(server_default().renderToString(App()), data['access_token']));
    })
        .catch(console.log());
    // req.query.code;
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
// axios.fetch(
//     'https://www.reddit.com/api/v1/access_token',
//     {   method: "POST",
//         formData: `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`},
//     {
//         auth: { username: process.env.CLIENT_ID, password: '2onWsDXAe5oQJzRzkory-yOT2rWYeg' },
//         headers: { 'Content-type': 'application/x-www-form-urlencoded' }
//     }
// )

})();

/******/ })()
;