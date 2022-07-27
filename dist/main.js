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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  scroll-behavior: smooth;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  background-color: rgb(49, 62, 72);\\r\\n}\\r\\n\\r\\nheader {\\r\\n  margin-top: 10px;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  margin-right: 5%;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  margin-right: 5%;\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  background: url(https://toppng.com/uploads/preview/movies-clipart-11550721226fhbztgpnlz.png);\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  border-radius: 50%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#cards {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.cards-container {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  list-style: none;\\r\\n  gap: 15px;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n  width: 327px;\\r\\n  height: 350px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 350px;\\r\\n  height: 500px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 0 5px #313e48;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.sub {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.desc {\\r\\n  width: 78%;\\r\\n  font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n.red {\\r\\n  color: red;\\r\\n  text-shadow: 1px 1px 4px #000;\\r\\n}\\r\\n\\r\\n.white {\\r\\n  color: #fff;\\r\\n  text-shadow: 1px 1px 4px #000;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  width: 90px;\\r\\n  height: 40px;\\r\\n  margin-left: auto;\\r\\n}\\r\\n#comment-btn {\\r\\n  align-self: end;\\r\\n  justify-self: end;\\r\\n}\\r\\n.btn {\\r\\n  background-color: #3c4e5c;\\r\\n  color: #fff;\\r\\n  border: 1px solid #192833;\\r\\n  border-radius: 5px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  background-color: #192833;\\r\\n  color: #fff;\\r\\n  border: 1px solid #3c4e5c;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n.foot-note {\\r\\n  margin-left: 12%;\\r\\n  font-weight: bold;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  margin: 0 auto;\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n  z-index: 10;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  width: 80%;\\r\\n  height: auto;\\r\\n  margin: 5% auto;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 10px 10px 0 rgb(24, 4, 43);\\r\\n  border-radius: 10px;\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.jc-flex-end {\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.fa-window-close {\\r\\n  font-size: 2em;\\r\\n  padding: 20px;\\r\\n  color: rgb(146, 150, 146);\\r\\n}\\r\\n\\r\\n.fa-window-close:hover {\\r\\n  color: rgb(117, 17, 95);\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 25%;\\r\\n  margin: 0 auto;\\r\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n#comment-form {\\r\\n  width: 50%;\\r\\n  margin: 10px auto;\\r\\n  background-color: blueviolet;\\r\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n#showDesc {\\r\\n  width: 80%;\\r\\n  margin: 0 auto;\\r\\n  line-height: 32px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nli {\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.fa-comment {\\r\\n  color: rgb(44, 161, 89);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: auto;\\r\\n  color: rgb(122, 4, 122);\\r\\n  font-weight: bold;\\r\\n  background-color: rgb(187, 179, 179);\\r\\n  padding: 5px;\\r\\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  color: #fff;\\r\\n  font-weight: bold;\\r\\n  background-color: rgb(122, 4, 122);\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4 h5,\\r\\nh6 {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.font-w-bold {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/addShowToDom.js":
/*!*****************************!*\
  !*** ./src/addShowToDom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addShow = (name, imageUrl, description, liked, numberOfLikes) => {\r\n  const ShowsContainer = document.getElementById('cards-container');\r\n  const showHTML = document.createElement('li');\r\n  showHTML.classList.add('card');\r\n  showHTML.id = addShow.id;\r\n  showHTML.innerHTML = `\r\n    <img src=\"${imageUrl}\" alt=\"${name}\">\r\n    <div class=\"sub\">\r\n        <p class=\"title\"><b>${name}</b></p>\r\n        <i class=\"material-icons white\">favorite</i>\r\n    </div>\r\n    <div class=\"sub\">\r\n        <span class=\"desc\">${description}</span>\r\n        <p>${numberOfLikes} likes</p>\r\n    </div>\r\n    <button type=\"button\" id=\"${showHTML.id}\" class=\"comment-btn\"  onclick\"commentsPopUp(${showHTML.id})\" role=\"button\">Comments</button>\r\n              `;\r\n  ShowsContainer.appendChild(showHTML);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addShow);\n\n//# sourceURL=webpack://setup-webpack/./src/addShowToDom.js?");

/***/ }),

/***/ "./src/commentsPopUp.js":
/*!******************************!*\
  !*** ./src/commentsPopUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadShows.js */ \"./src/loadShows.js\");\n\r\nconst showModal = document.querySelector('#modal-section');\r\nconst popModal = document.createElement('div');\r\npopModal.setAttribute('class', 'modal');\r\nconst commentsPopUp = async (data) => {\r\n  document.body.addEventListener('click', (event) => {\r\n    if (event.target.className === 'comment-btn') {\r\n      const commentId = event.target.parentNode.querySelector('button').id;\r\n      data.forEach((show) => {\r\n        const showId = addShow.id;\r\n        if (showId.toString() === commentId.toString()) {\r\n          popModal.innerHTML = `<div class=\"modal-content\">\r\n  <span class=\"d-flex jc-flex-end\"><i class=\"fas fa-window-close\" aria-hidden=\"true\"></i></span>\r\n  <div class=\"d-flex flex-d-c\">\r\n      <img src=${(show.image.medium)} alt=\"show image\" class=\"popup-img show mb-3\">\r\n      <h2 class=\"d-flex center\">${show.name}</h2>\r\n      <div class=\"d-flex flex-d-c\">\r\n      <h3 class=\"d-flex\">Premiered On: ${show.premiered}</h3>\r\n      <p class=\"d-flex show-desc\">${show.summary}</p>\r\n      <h4 class=\"d-flex mt-1\">Language: ${show.language}</h4>\r\n      </div>\r\n      <h3 class=\"d-flex center\"><i class=\"fa fa-fw fa-comment mb-5\"></i>  Comments(0)</h3>\r\n\r\n      <div class=\"flex-d-c mb-5 \">\r\n      <ul class=\"d-flex s-around comment-list-header font-w-bold\">\r\n      <li>Date</li> <li>By</li> <li> Comment</li>\r\n      </ul>\r\n      <ul class=\"comments-list-body d-flex s-around\">\r\n        <li>2020</li>\r\n        <li>rotshidzwa</li>\r\n        <li>hello guys</li>\r\n      </ul>\r\n      </div>\r\n      <form class=\"card bg-light mb-5\" id=\"comment-form\" method=\"POST\">\r\n       <div class=\" d-flex flex-d-c  card-body\">\r\n       <h3 class=\"center\">Add comment</h3><br>\r\n       <input type=\"text\" id=\"comment\" class=\"form-control\" placeholder=\"Enter your name\" required><br>\r\n       <textarea id=\"viewer-comment\" class=\"form-control\"  rows=\"4\" cols=\"40\" placeholder=\"Enter Comment\"  required></textarea><br>\r\n       <button type=\"submit\" id=\"commentBtn\" class=\"btn btn-success btn-md\">Comment</button>\r\n       </div>\r\n      </form>\r\n  </div>\r\n</div>`;\r\n        }\r\n      });\r\n      showModal.appendChild(popModal);\r\n      showModal.style.display = ('block');\r\n      const closeBtn = document.querySelector('.fa-window-close');\r\n      document.addEventListener('click', (event) => {\r\n        if (event.target === closeBtn) {\r\n          showModal.style.display = 'none';\r\n          window.location.reload();\r\n        }\r\n      });\r\n    }\r\n  });\r\n  await (0,_loadShows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);\n\n//# sourceURL=webpack://setup-webpack/./src/commentsPopUp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _loadShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadShows.js */ \"./src/loadShows.js\");\n/* harmony import */ var _addShowToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addShowToDom */ \"./src/addShowToDom.js\");\n/* harmony import */ var _commentsPopUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentsPopUp.js */ \"./src/commentsPopUp.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  (0,_addShowToDom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const showPopUp = async () => {\r\n    const data = await (0,_loadShows_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\r\n  };\r\n  showPopUp();\r\n});\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/loadShows.js":
/*!**************************!*\
  !*** ./src/loadShows.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addShowToDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addShowToDom.js */ \"./src/addShowToDom.js\");\n\r\n\r\nconst loadShows = () => {\r\n  const showsContainer = document.getElementById('cards-container');\r\n  showsContainer.innerHTML = '';\r\n  const getShowsData = async () => {\r\n    const request = await fetch('https://api.tvmaze.com/schedule?country=US');\r\n    const data = await request.json();\r\n    return data;\r\n  };\r\n\r\n  getShowsData().then(\r\n    (value) => {\r\n      value.forEach((item) => {\r\n        (0,_addShowToDom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.show.name.substring(0, 22), item.show.image.medium, `${item.show.summary.substring(0, 60).replace('<p>', '').replace('</p>', '').replace('<b>', '')\r\n          .replace('</b>', '')} ...`, false, 0);\r\n      });\r\n    },\r\n    (error) => {\r\n      throw error;\r\n    },\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadShows);\n\n//# sourceURL=webpack://setup-webpack/./src/loadShows.js?");

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