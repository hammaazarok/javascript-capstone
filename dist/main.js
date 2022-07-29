/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  scroll-behavior: smooth;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  background-color: rgb(49, 62, 72);\\r\\n}\\r\\n\\r\\n.d-flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.flex-d-c {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.center {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.s-between {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.s-around {\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  margin-top: 10px;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  margin-right: 5%;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  margin-right: 5%;\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  background: url(https://toppng.com/uploads/preview/movies-clipart-11550721226fhbztgpnlz.png);\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  border-radius: 50%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#cards {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.cards-container {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  list-style: none;\\r\\n  gap: 15px;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 60px;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n  width: 327px;\\r\\n  height: 350px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 350px;\\r\\n  height: 500px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 0 5px #313e48;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.sub {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.desc {\\r\\n  width: 78%;\\r\\n  font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n.red {\\r\\n  color: red;\\r\\n  text-shadow: 1px 1px 4px #000;\\r\\n}\\r\\n\\r\\n.white {\\r\\n  color: #fff;\\r\\n  text-shadow: 1px 1px 4px #000;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  height: 40px;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  background-color: #3c4e5c;\\r\\n  color: #fff;\\r\\n  border: 1px solid #192833;\\r\\n  border-radius: 5px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  background-color: #192833;\\r\\n  color: #fff;\\r\\n  border: 1px solid #3c4e5c;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.showId {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  margin: 0 auto;\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n  z-index: 10;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  width: 80%;\\r\\n  height: auto;\\r\\n  margin: 5% auto;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 10px 10px 0 rgb(24, 4, 43);\\r\\n  border-radius: 10px;\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.jc-flex-end {\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.fa-window-close {\\r\\n  font-size: 2em;\\r\\n  padding: 20px;\\r\\n  color: rgb(68, 173, 68);\\r\\n}\\r\\n\\r\\n.fa-window-close:hover {\\r\\n  color: rgb(136, 141, 71);\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 25%;\\r\\n  margin: 0 auto;\\r\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n#comment-form {\\r\\n  width: 50%;\\r\\n  margin: 10px auto;\\r\\n  background-color: rgb(43, 137, 226);\\r\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n#showDesc {\\r\\n  width: 80%;\\r\\n  margin: 0 auto;\\r\\n  line-height: 32px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nli {\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.fa-comment {\\r\\n  color: rgb(132, 223, 166);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: auto;\\r\\n  color: rgb(35, 155, 24);\\r\\n  font-weight: bold;\\r\\n  background-color: rgb(187, 179, 179);\\r\\n  padding: 5px;\\r\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  color: #fff;\\r\\n  font-weight: bold;\\r\\n  background-color: rgb(231, 160, 231);\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4 h5,\\r\\nh6 {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.font-w-bold {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.comments-list-body {\\r\\n  background: rgb(224, 228, 233);\\r\\n  box-shadow: 0 2px 4px 0 rgb(54, 54, 54);\\r\\n  padding: 10px;\\r\\n  font-weight: bold;\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n  height: 10%;\\r\\n  overscroll-behavior: contain;\\r\\n}\\r\\n\\r\\n.vierwerCommentList:nth-child(even) {\\r\\n  background: #fbfdff;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 6%;\\r\\n  border-radius: 2px;\\r\\n  position: fixed;\\r\\n  padding: 15px;\\r\\n  color: rgb(2, 2, 2);\\r\\n  background-color: rgb(207, 206, 206);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.foot-note {\\r\\n  font-weight: bold;\\r\\n  width: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Likes.js":
/*!**********************!*\
  !*** ./src/Likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewLike\": () => (/* binding */ addNewLike),\n/* harmony export */   \"countLikes\": () => (/* binding */ countLikes),\n/* harmony export */   \"likeUpdate\": () => (/* binding */ likeUpdate),\n/* harmony export */   \"loadLikes\": () => (/* binding */ loadLikes)\n/* harmony export */ });\nlet Likes = [];\nconst loadLikes = async () => {\n  const getLikesData = async () => {\n    const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PaPkcuuefChRyB9FOnQ0/likes');\n    const data = await request.json();\n    return data;\n  };\n\n  await getLikesData().then(\n    (value) => {\n      const newLikes = [];\n      value.forEach((element) => {\n        newLikes.push({\n          id: element.item_id,\n          likes: element.likes,\n        });\n      });\n      Likes = newLikes;\n    },\n    (error) => {\n      throw error;\n    },\n  );\n};\n\nconst countLikes = (showId) => {\n  showId += '';\n  const numberOfLikes = Likes.filter((a) => a.id === showId)[0];\n  return numberOfLikes !== undefined ? numberOfLikes.likes : 0;\n};\n\nconst likeUpdate = (showId, newValue) => {\n  if (Likes.filter((a) => a.id === showId)[0] !== undefined) {\n    Likes.filter((a) => a.id === showId)[0].likes = newValue;\n  } else {\n    Likes.push(\n      {\n        id: showId,\n        likes: newValue,\n      },\n    );\n  }\n};\n\nconst addNewLike = (showId) => {\n  const SentToApi = async () => {\n    const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PaPkcuuefChRyB9FOnQ0/likes/', {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: `${showId}`,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = await request.status;\n    return data;\n  };\n\n  SentToApi().then(\n    (value) => (value === '201'),\n    (error) => {\n      throw error;\n    },\n  );\n};\n\n\n\n//# sourceURL=webpack://setup-webpack/./src/Likes.js?");

/***/ }),

/***/ "./src/addShowToDom.js":
/*!*****************************!*\
  !*** ./src/addShowToDom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addShow = (name, imageUrl, description, liked, numberOfLikes, id) => {\n  const ShowsContainer = document.getElementById('cards-container');\n  const showHTML = document.createElement('li');\n  showHTML.classList.add('card');\n  showHTML.innerHTML = `\n    <img src=\"${imageUrl}\" alt=\"${name}\">\n    <div class=\"sub\">\n        <p class=\"title\"><b>${name}</b></p>\n        <i class=\"material-icons white like\">favorite</i>\n    </div>\n    <div class=\"sub\">\n        <span class=\"desc\">${description}</span>\n        <p>${numberOfLikes} likes</p>\n    </div>\n    <div class=\"showId\">${id}</div>\n    <button type=\"button\" class=\"comments comment-btn btn\"   role=\"button\">Comments</button>\n              `;\n  ShowsContainer.appendChild(showHTML);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addShow);\n\n//# sourceURL=webpack://setup-webpack/./src/addShowToDom.js?");

/***/ }),

/***/ "./src/comment-count.js":
/*!******************************!*\
  !*** ./src/comment-count.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalComments = (list) => list.length || 0;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalComments);\n\n//# sourceURL=webpack://setup-webpack/./src/comment-count.js?");

/***/ }),

/***/ "./src/comment-display.js":
/*!********************************!*\
  !*** ./src/comment-display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMovieComment\": () => (/* binding */ addMovieComment),\n/* harmony export */   \"fetchComment\": () => (/* binding */ fetchComment)\n/* harmony export */ });\nconst appId = 'PaPkcuuefChRyB9FOnQ0';\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst endPoint = '/comments';\n// get comment\nconst fetchComment = async (showId) => {\n  const response = await fetch(`${commentUrl + appId + endPoint}?item_id=${showId}`);\n  return response.json();\n};\n\n// Add comment\nconst addMovieComment = async (viewerInfo) => {\n  const response = await fetch(`${commentUrl + appId + endPoint}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(viewerInfo),\n  });\n  // console.log(viewerInfo);\n  const commentData = await response.text();\n  return commentData;\n};\n\n\n\n//# sourceURL=webpack://setup-webpack/./src/comment-display.js?");

/***/ }),

/***/ "./src/commentsPopUp.js":
/*!******************************!*\
  !*** ./src/commentsPopUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-display.js */ \"./src/comment-display.js\");\n/* harmony import */ var _comment_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-count.js */ \"./src/comment-count.js\");\n\n\n\nconst showModal = document.querySelector('#modal-section');\nconst popModal = document.createElement('div');\n\nconst commentsPopUp = async (data, id) => {\n  popModal.setAttribute('class', 'modal');\n\n  const commentId = id;\n  data.forEach(async (show) => {\n    show = show.show;\n    const showId = show.id;\n    if (showId.toString() === commentId.toString()) {\n      popModal.innerHTML = `<div class=\"modal-content\">\n  <span class=\"d-flex jc-flex-end\"><i class=\"fas fa-window-close\" aria-hidden=\"true\"></i></span>\n  <div class=\"d-flex flex-d-c\">\n      <img src=${show.image.medium} alt=\"show image\" class=\"popup-img show mb-3\">\n      <h2 class=\"d-flex center\">${show.name}</h2>\n      <div class=\"d-flex flex-d-c\">\n      <h3 class=\"d-flex\">Premiered On: ${show.premiered}</h3>\n      <p class=\"d-flex show-desc\">${show.summary}</p>\n      <h4 class=\"d-flex mt-1\">Language: ${show.language}</h4>\n      </div>\n<h3 class=\"d-flex center comments-count\"><i class=\"fa fa-fw fa-comment mb-5\"></i>  Comments(0)</h3>\n      <div class=\"flex-d-c mb-5 \">\n      <ul class=\"d-flex s-around comment-list-header font-w-bold\">\n      <li>posted</li> <li>By</li> <li> Comment</li>\n      </ul>\n      <div class=\"comments-list-body \">\n      </div>\n      </div>\n      <form class=\"card bg-light mb-5\" id=\"comment-form\" onsubmit=\"return false\">\n       <div class=\" d-flex flex-d-c  card-body\">\n       <h3 class=\"center\">Add comment</h3><br>\n       <input type=\"text\" id=\"viewer-name\" class=\"form-control\" placeholder=\"Enter your name\" required><br>\n       <textarea id=\"viewer-comment\" class=\"form-control\"  rows=\"4\" cols=\"40\" placeholder=\"Enter Comment\"  required></textarea><br>\n       <button id=\"commentBtn\" class=\"btn btn-success btn-md\">Comment</button>\n       </div>\n      </form>\n  </div>\n</div>`;\n    }\n  });\n  showModal.appendChild(popModal);\n  showModal.style.display = 'block';\n  let closeBtn = document.querySelector('.fa-window-close');\n  document.addEventListener('click', (event) => {\n    if (event.target === closeBtn) {\n      showModal.style.display = 'none';\n      window.location.reload();\n    }\n  });\n\n  // Submit viewer info\n  const viewerUserName = document.querySelector('#viewer-name');\n  const viewerComment = document.querySelector('#viewer-comment');\n  const submitViewerInfo = () => {\n    const comment = {\n      username: viewerUserName.value,\n      comment: viewerComment.value,\n      item_id: commentId,\n    };\n    (0,_comment_display_js__WEBPACK_IMPORTED_MODULE_0__.addMovieComment)(comment);\n  };\n  const commentSection = document.querySelector('.comments-list-body');\n  const commentList = document.createElement('ul');\n  commentList.setAttribute('class', 'd-flex flex-d-c');\n  // UPDATE COMMENTS\n  const updateComments = () => {\n    const date = new Date();\n    const day = date.getDay();\n    const month = date.getMonth();\n    const year = date.getFullYear();\n    commentList.innerHTML += `<li class=\"d-flex s-around vierwerCommentList\">\n           <span>${year} ${-month} ${-day}</span>  <span>${\n  viewerUserName.value\n}</span>  <span>${viewerComment.value}</span></li>\n           `;\n    commentSection.appendChild(commentList);\n  };\n  // Show Comments\n  const displayComment = async (commentId) => {\n    const allComments = await (0,_comment_display_js__WEBPACK_IMPORTED_MODULE_0__.fetchComment)(commentId);\n    try {\n      allComments.forEach(async (data) => {\n        commentList.innerHTML += `<li class=\"d-flex s-around vierwerCommentList\">\n           <span>${data.creation_date}</span>  <span>${data.username}</span>  <span>${data.comment}</span></li>\n           `;\n        commentSection.appendChild(commentList);\n        const comments = document.querySelector('.comments-count');\n        comments.innerHTML = `<i class=\"fa fa-fw fa-comment mb-5\"></i>  Comments(${await (0,_comment_count_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allComments)})`;\n      });\n    } catch (err) {\n      commentList.innerHTML += `<li class=\"d-flex s-around vierwerCommentList\">No Comments</li>\n           `;\n      commentSection.appendChild(commentList);\n    }\n  };\n  displayComment(commentId);\n  const commentsBtn = document.querySelector('#commentBtn');\n  // listen to users enevent\n  commentsBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    submitViewerInfo();\n    updateComments();\n    viewerUserName.value = '';\n    viewerComment.value = '';\n  });\n\n  showModal.appendChild(popModal);\n  showModal.style.display = 'block';\n  closeBtn = document.querySelector('.fa-window-close');\n  document.addEventListener('click', (event) => {\n    if (event.target === closeBtn) {\n      showModal.style.display = 'none';\n      window.location.reload();\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);\n\n//# sourceURL=webpack://setup-webpack/./src/commentsPopUp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _loadShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadShows.js */ \"./src/loadShows.js\");\n/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Likes.js */ \"./src/Likes.js\");\n/* harmony import */ var _commentsPopUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentsPopUp.js */ \"./src/commentsPopUp.js\");\n/* harmony import */ var _showsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showsCounter.js */ \"./src/showsCounter.js\");\n\n\n\n\n\n\n(0,_loadShows_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((value) => {\n  const likesButtons = document.querySelectorAll('.like');\n  likesButtons.forEach((show) => {\n    show.addEventListener('click', () => {\n      const id = show.parentElement.parentElement.children[3].innerHTML;\n      const likes = parseInt((0,_Likes_js__WEBPACK_IMPORTED_MODULE_2__.countLikes)(id), 10) + 1;\n      show.parentElement.parentElement.children[2].children[1].innerHTML = `${likes} likes`;\n      (0,_Likes_js__WEBPACK_IMPORTED_MODULE_2__.addNewLike)(id);\n      (0,_Likes_js__WEBPACK_IMPORTED_MODULE_2__.likeUpdate)(id, likes);\n    });\n  });\n\n  const commentsButtons = document.querySelectorAll('.comments');\n  commentsButtons.forEach((show) => {\n    show.addEventListener('click', () => {\n      const id = show.parentElement.children[3].innerHTML;\n      (0,_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value, id);\n    });\n  });\n  document.querySelector('#counter').innerHTML = `(${(0,_showsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(value)})`;\n});\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/loadShows.js":
/*!**************************!*\
  !*** ./src/loadShows.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addShowToDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addShowToDom.js */ \"./src/addShowToDom.js\");\n/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes.js */ \"./src/Likes.js\");\n\n\n\nconst loadShows = async () => {\n  const showsContainer = document.getElementById('cards-container');\n  showsContainer.innerHTML = '';\n  let shows = [];\n  const getShowsData = async () => {\n    const request = await fetch('https://api.tvmaze.com/schedule?country=US');\n    const data = await request.json();\n    return data;\n  };\n\n  await (0,_Likes_js__WEBPACK_IMPORTED_MODULE_1__.loadLikes)();\n  await getShowsData().then(\n    (value) => {\n      value.forEach((item) => {\n        const reg = /(<([^>]+)>)/ig;\n        (0,_addShowToDom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n          item.show.name.substring(0, 22),\n          item.show.image.medium,\n          `${item.show.summary\n            .substring(0, 60)\n            .replaceAll(reg, '').replace('<b', '')} ...`,\n          false,\n          (0,_Likes_js__WEBPACK_IMPORTED_MODULE_1__.countLikes)(item.show.id),\n          item.show.id,\n        );\n      });\n      shows = value;\n    },\n    (error) => {\n      throw error;\n    },\n  );\n  return shows;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadShows);\n\n\n//# sourceURL=webpack://setup-webpack/./src/loadShows.js?");

/***/ }),

/***/ "./src/showsCounter.js":
/*!*****************************!*\
  !*** ./src/showsCounter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countShows = (shows) => {\n  if (shows === undefined) {\n    return 'shows are not defined';\n  } if (shows.length < 1) {\n    return 'there is no show yet on this category';\n  }\n\n  return shows.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countShows);\n\n//# sourceURL=webpack://setup-webpack/./src/showsCounter.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;