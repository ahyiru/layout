(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("layout", ["react"], factory);
	else if(typeof exports === 'object')
		exports["layout"] = factory(require("react"));
	else
		root["layout"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*callout*/\n/*.callout(@info:#428bca,@success:#5cb85c,@warning:#f0ad4e,@danger:#d9534f){\n  display: block;\n  padding: 5px 10px;\n  margin: 5px 0;\n  color: #777;\n  border-left-width: 4px;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.03);\n  position: relative;\n  border-left-color: @info;\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 0;\n    height: 0;\n    border-bottom: 6px solid transparent;\n    border-left: 6px solid @info;\n  }\n  &.info {\n    border-left-color: @info;\n    &::after {\n      border-left-color: @info;\n    }\n  }\n  &.success {\n    border-left-color: @success;\n    &::after {\n      border-left-color: @success;\n    }\n  }\n  &.warning {\n    border-left-color: @warning;\n    &::after {\n      border-left-color: @warning;\n    }\n  }\n  &.danger {\n    border-left-color: @danger;\n    &::after {\n      border-left-color: @danger;\n    }\n  }\n}*/\n.clear {\n  zoom: 1;\n}\n.clear::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.nav-menu {\n  --subMenuItemHeight: 40px;\n  --menuLeftIconWidth: 38px;\n  --menuRightIconWidth: 20px;\n  --menuFloat: auto;\n  flex: 1;\n  position: relative;\n  border-top: 1px solid var(--borderColor);\n  float: var(--menuFloat);\n}\n.nav-menu + div {\n  flex: 0 1 auto !important;\n}\n.nav-menu .menu-track {\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  background: var(--navBgColor);\n  height: 100%;\n}\n.nav-menu .menu-track .tree-root {\n  float: var(--menuFloat);\n  width: max-content;\n  padding: 0 10px;\n  margin: 0;\n  zoom: 1;\n}\n.nav-menu .menu-track .tree-root::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.nav-menu .menu-track .tree-root li {\n  user-select: none;\n  position: relative;\n}\n.nav-menu .menu-track .tree-root li[has-children=\"true\"] > a.active::after {\n  display: none;\n}\n.nav-menu .menu-track .tree-root li > a {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subMenuItemHeight);\n  line-height: var(--subMenuItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.nav-menu .menu-track .tree-root li > a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 10px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 10px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.nav-menu .menu-track .tree-root li > a.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.nav-menu .menu-track .tree-root li > a i,\n.nav-menu .menu-track .tree-root li > a .iico,\n.nav-menu .menu-track .tree-root li > a .anticon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--menuLeftIconWidth);\n  height: var(--subMenuItemHeight);\n  line-height: var(--subMenuItemHeight);\n  text-align: center;\n}\n.nav-menu .menu-track .tree-root li > a i + .txt,\n.nav-menu .menu-track .tree-root li > a .iico + .txt,\n.nav-menu .menu-track .tree-root li > a .anticon + .txt {\n  padding-left: var(--menuLeftIconWidth);\n}\n.nav-menu .menu-track .tree-root li > a i > svg,\n.nav-menu .menu-track .tree-root li > a .iico > svg,\n.nav-menu .menu-track .tree-root li > a .anticon > svg {\n  vertical-align: middle;\n}\n.nav-menu .menu-track .tree-root li > a i.default-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.nav-menu .menu-track .tree-root li > a .txt {\n  display: block;\n  padding: 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nav-menu .menu-track .tree-root li > a .txt.has-right-icon {\n  padding-right: calc(var(--menuRightIconWidth) + 5px);\n}\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n  right: 0;\n  position: absolute;\n  width: var(--menuRightIconWidth);\n}\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::before,\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::before {\n  left: 0;\n}\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  left: calc(1px * 0.7);\n}\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::before,\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  top: calc(50% + var(--pos));\n}\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::before {\n  transform: rotate(135deg);\n}\n.nav-menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  transform: rotate(45deg);\n}\n.nav-menu .menu-track .tree-root li.open > a .coll-ico {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n  position: absolute;\n  width: var(--menuRightIconWidth);\n}\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::before,\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::before {\n  left: 0;\n}\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::after {\n  left: calc(1px * 0.7);\n}\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::before,\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::after {\n  top: calc(50% - var(--pos));\n}\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::before {\n  transform: rotate(225deg);\n}\n.nav-menu .menu-track .tree-root li.open > a .coll-ico::after {\n  transform: rotate(-45deg);\n}\n.nav-menu .menu-track .tree-root li > ul {\n  position: relative;\n  background: var(--navBgColor);\n  border: 1px solid var(--borderColor);\n  /*&.lt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      left:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.rt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      right:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.lb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n      border-top-color:@arrowBorderColor;\n    }\n    &::before{\n      left:@position;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }\n  &.rb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n    }\n    &::before{\n      right:@position;\n      border-top-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }*/\n  position: absolute;\n  top: 0;\n  left: calc(100% + 2px);\n  right: auto;\n  width: var(--collapseMenuWidth);\n  padding: 10px 0;\n  opacity: 0.99;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: 0.3s transform;\n}\n.nav-menu .menu-track .tree-root li > ul::before,\n.nav-menu .menu-track .tree-root li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.nav-menu .menu-track .tree-root li > ul::before {\n  border-width: 6px;\n}\n.nav-menu .menu-track .tree-root li > ul::after {\n  border-width: 5px;\n}\n.nav-menu .menu-track .tree-root li > ul::before,\n.nav-menu .menu-track .tree-root li > ul::after {\n  left: auto;\n  right: 100%;\n}\n.nav-menu .menu-track .tree-root li > ul::before {\n  top: 10px;\n  border-right-color: var(--borderColor);\n}\n.nav-menu .menu-track .tree-root li > ul::after {\n  top: calc(10px + 1px);\n  border-right-color: var(--navBgColor);\n}\n.nav-menu .menu-track .tree-root li > ul.left {\n  position: relative;\n  background: var(--navBgColor);\n  border: 1px solid var(--borderColor);\n  /*&.lt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      left:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.rt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      right:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.lb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n      border-top-color:@arrowBorderColor;\n    }\n    &::before{\n      left:@position;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }\n  &.rb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n    }\n    &::before{\n      right:@position;\n      border-top-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }*/\n  left: auto;\n  right: calc(100% + 2px);\n  position: absolute;\n  transform-origin: 100% 0;\n}\n.nav-menu .menu-track .tree-root li > ul.left::before,\n.nav-menu .menu-track .tree-root li > ul.left::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.nav-menu .menu-track .tree-root li > ul.left::before {\n  border-width: 6px;\n}\n.nav-menu .menu-track .tree-root li > ul.left::after {\n  border-width: 5px;\n}\n.nav-menu .menu-track .tree-root li > ul.left::before,\n.nav-menu .menu-track .tree-root li > ul.left::after {\n  right: auto;\n  left: 100%;\n}\n.nav-menu .menu-track .tree-root li > ul.left::before {\n  top: 10px;\n  border-left-color: var(--borderColor);\n}\n.nav-menu .menu-track .tree-root li > ul.left::after {\n  top: calc(10px + 1px);\n  border-left-color: var(--navBgColor);\n}\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n  position: absolute;\n  width: var(--menuRightIconWidth);\n}\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::before,\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::before {\n  left: 0;\n}\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::after {\n  left: calc(1px * 0.7);\n}\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::before,\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::after {\n  top: calc(50% - var(--pos));\n}\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::before {\n  transform: rotate(225deg);\n}\n.nav-menu .menu-track .tree-root li:hover > a .coll-ico::after {\n  transform: rotate(-45deg);\n}\n.nav-menu .menu-track .tree-root li:hover > ul {\n  transform: scale(1);\n  transition: 0.3s transform;\n}\n.nav-menu .menu-track .tree-root > li {\n  float: left;\n  padding: 0 8px;\n  /*&:last-of-type{\n          >ul{\n            ul{\n              .arrow-tr(var(--navBgColor),var(--borderColor),6px,10px);\n              left:auto;\n              right:calc(100% + 2px);\n              position:absolute;\n              transform-origin:100% 0;\n            }\n          }\n        }*/\n}\n.nav-menu .menu-track .tree-root > li::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: calc(50% - 10px);\n  height: 20px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.nav-menu .menu-track .tree-root > li > a {\n  height: var(--menuItemHeight);\n  line-height: var(--menuItemHeight);\n}\n.nav-menu .menu-track .tree-root > li > a i,\n.nav-menu .menu-track .tree-root > li > a .iico,\n.nav-menu .menu-track .tree-root > li > a .anticon {\n  height: var(--menuItemHeight);\n  line-height: var(--menuItemHeight);\n}\n.nav-menu .menu-track .tree-root > li > ul {\n  position: relative;\n  background: var(--navBgColor);\n  border: 1px solid var(--borderColor);\n  /*&.lt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      left:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.rt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      right:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.lb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n      border-top-color:@arrowBorderColor;\n    }\n    &::before{\n      left:@position;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }\n  &.rb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n    }\n    &::before{\n      right:@position;\n      border-top-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }*/\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  transform-origin: 50% 0;\n}\n.nav-menu .menu-track .tree-root > li > ul::before,\n.nav-menu .menu-track .tree-root > li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.nav-menu .menu-track .tree-root > li > ul::before {\n  border-width: 8px;\n}\n.nav-menu .menu-track .tree-root > li > ul::after {\n  border-width: 7px;\n}\n.nav-menu .menu-track .tree-root > li > ul::before,\n.nav-menu .menu-track .tree-root > li > ul::after {\n  top: auto;\n  bottom: 100%;\n}\n.nav-menu .menu-track .tree-root > li > ul::before {\n  left: 16px;\n  border-bottom-color: var(--borderColor);\n}\n.nav-menu .menu-track .tree-root > li > ul::after {\n  left: calc(16px + 1px);\n  border-bottom-color: var(--navBgColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  height: var(--footerHeight);\n  line-height: var(--footerHeight);\n  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);\n  margin: 0 auto;\n  max-width: var(--maxWidth);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".frame-color h1,\n.frame-color h2,\n.frame-color h3,\n.frame-color h4,\n.frame-color h5,\n.frame-color h6,\n.frame-color p {\n  color: var(--linkColor);\n}\n.frame-color a {\n  color: var(--linkColor);\n}\n.frame-color a:active,\n.frame-color a.active {\n  color: var(--linkActiveColor);\n}\n.frame-color a:hover {\n  color: var(--linkHoverColor);\n}\n:root {\n  --frame-spacing: 1vw;\n  --frame-radius: 4px;\n  --borderShadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);\n}\n.frame {\n  transform: none;\n  --topHeight: var(--headerHeight);\n  background: var(--appBgColor);\n  color: var(--appColor);\n}\n.frame .frame-header {\n  background: var(--navBgColor);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n.frame .frame-header h1,\n.frame .frame-header h2,\n.frame .frame-header h3,\n.frame .frame-header h4,\n.frame .frame-header h5,\n.frame .frame-header h6,\n.frame .frame-header p {\n  color: var(--linkColor);\n}\n.frame .frame-header a {\n  color: var(--linkColor);\n}\n.frame .frame-header a:active,\n.frame .frame-header a.active {\n  color: var(--linkActiveColor);\n}\n.frame .frame-header a:hover {\n  color: var(--linkHoverColor);\n}\n.frame .frame-main {\n  margin: 0 auto;\n  max-width: var(--maxWidth);\n  padding-top: var(--topHeight);\n  box-shadow: var(--borderShadow);\n  z-index: 5;\n}\n.frame .frame-main .frame-container {\n  position: relative;\n}\n.frame .frame-main .frame-container .frame-aside {\n  position: fixed;\n  width: var(--menuWidth);\n  top: var(--topHeight);\n  bottom: 0;\n  z-index: 5;\n  background: var(--menuBgColor);\n  transition: width 0.3s;\n}\n.frame .frame-main .frame-container .frame-aside h1,\n.frame .frame-main .frame-container .frame-aside h2,\n.frame .frame-main .frame-container .frame-aside h3,\n.frame .frame-main .frame-container .frame-aside h4,\n.frame .frame-main .frame-container .frame-aside h5,\n.frame .frame-main .frame-container .frame-aside h6,\n.frame .frame-main .frame-container .frame-aside p {\n  color: var(--linkColor);\n}\n.frame .frame-main .frame-container .frame-aside a {\n  color: var(--linkColor);\n}\n.frame .frame-main .frame-container .frame-aside a:active,\n.frame .frame-main .frame-container .frame-aside a.active {\n  color: var(--linkActiveColor);\n}\n.frame .frame-main .frame-container .frame-aside a:hover {\n  color: var(--linkHoverColor);\n}\n.frame .frame-main .frame-container .frame-view {\n  padding-left: calc(var(--menuWidth));\n  transition: padding-left 0.3s;\n}\n.frame .frame-main .frame-container .frame-footer {\n  padding-left: calc(var(--menuWidth));\n  transition: padding-left 0.3s;\n  background: var(--panelBgColor);\n}\n.frame .frame-main .frame-container.no-sidebar .frame-view {\n  padding-left: 0;\n}\n.frame .frame-main .frame-container.no-sidebar .frame-footer {\n  padding-left: 0;\n  margin-left: calc(var(--maxWidth) / 2 - 50vw);\n  margin-right: calc(var(--maxWidth) / 2 - 50vw);\n}\n.frame.collapsed .frame-main .frame-container .frame-aside {\n  width: var(--collapseWidth);\n  transition: width 0.3s;\n}\n.frame.collapsed .frame-main .frame-container .frame-view {\n  padding-left: var(--collapseWidth);\n  transition: padding-left 0.3s;\n}\n.frame.collapsed .frame-main .frame-container .frame-footer {\n  padding-left: calc(var(--collapseWidth));\n  transition: padding-left 0.3s;\n}\n.frame.horizontal {\n  --topHeight: calc(var(--headerHeight) + var(--menuItemHeight));\n}\n.frame.detached {\n  --frame-spacing: 0.8vw;\n  --frame-radius: 4px;\n}\n/*\n@media screen and (max-width:@maxWidth){\n  .frame{\n    .frame-main{\n      .frame-container{\n        .frame-aside{\n          left:0;\n        }\n      }\n    }\n  }\n}*/\n@media screen and (max-width: 1024px) {\n  .frame .frame-main .frame-container .frame-aside {\n    width: 0;\n  }\n  .frame .frame-main .frame-container .frame-view {\n    padding-left: 0;\n  }\n  .frame .frame-main .frame-container .frame-footer {\n    padding-left: 0;\n  }\n  .frame.collapsed .frame-main .frame-container .frame-aside {\n    width: var(--menuWidth);\n  }\n  .frame.collapsed .frame-main .frame-container .frame-view {\n    padding-left: 0;\n  }\n  .frame.collapsed .frame-main .frame-container .frame-footer {\n    padding-left: 0;\n  }\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*callout*/\n/*.callout(@info:#428bca,@success:#5cb85c,@warning:#f0ad4e,@danger:#d9534f){\n  display: block;\n  padding: 5px 10px;\n  margin: 5px 0;\n  color: #777;\n  border-left-width: 4px;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.03);\n  position: relative;\n  border-left-color: @info;\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 0;\n    height: 0;\n    border-bottom: 6px solid transparent;\n    border-left: 6px solid @info;\n  }\n  &.info {\n    border-left-color: @info;\n    &::after {\n      border-left-color: @info;\n    }\n  }\n  &.success {\n    border-left-color: @success;\n    &::after {\n      border-left-color: @success;\n    }\n  }\n  &.warning {\n    border-left-color: @warning;\n    &::after {\n      border-left-color: @warning;\n    }\n  }\n  &.danger {\n    border-left-color: @danger;\n    &::after {\n      border-left-color: @danger;\n    }\n  }\n}*/\n.clear {\n  zoom: 1;\n}\n.clear::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n@keyframes huxy-animate-top-in {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate3d(0, -30px, 0);\n  }\n  100% {\n    opacity: 0.98;\n    visibility: visible;\n    transform: translate3d(0, 2px, 0);\n  }\n}\n.huxy-angle-top {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n}\n.huxy-angle-top::before,\n.huxy-angle-top::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-angle-top::before {\n  left: 0;\n}\n.huxy-angle-top::after {\n  left: calc(1px * 0.7);\n}\n.huxy-angle-top::before,\n.huxy-angle-top::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-angle-top::before {\n  transform: rotate(225deg);\n}\n.huxy-angle-top::after {\n  transform: rotate(-45deg);\n}\n.huxy-angle-bt {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n}\n.huxy-angle-bt::before,\n.huxy-angle-bt::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-angle-bt::before {\n  left: 0;\n}\n.huxy-angle-bt::after {\n  left: calc(1px * 0.7);\n}\n.huxy-angle-bt::before,\n.huxy-angle-bt::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-angle-bt::before {\n  transform: rotate(135deg);\n}\n.huxy-angle-bt::after {\n  transform: rotate(45deg);\n}\n.huxy-arrow-lt {\n  position: relative;\n  background: var(--navBgColor);\n  border: 1px solid var(--borderColor);\n  /*&.lt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      left:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.rt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      right:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.lb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n      border-top-color:@arrowBorderColor;\n    }\n    &::before{\n      left:@position;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }\n  &.rb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n    }\n    &::before{\n      right:@position;\n      border-top-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }*/\n  right: auto;\n  left: 0;\n}\n.huxy-arrow-lt::before,\n.huxy-arrow-lt::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-arrow-lt::before {\n  border-width: 8px;\n}\n.huxy-arrow-lt::after {\n  border-width: 7px;\n}\n.huxy-arrow-lt::before,\n.huxy-arrow-lt::after {\n  top: auto;\n  bottom: 100%;\n}\n.huxy-arrow-lt::before {\n  left: 16px;\n  border-bottom-color: var(--borderColor);\n}\n.huxy-arrow-lt::after {\n  left: calc(16px + 1px);\n  border-bottom-color: var(--navBgColor);\n}\n.huxy-arrow-rt {\n  position: relative;\n  background: var(--navBgColor);\n  border: 1px solid var(--borderColor);\n  /*&.lt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      left:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.rt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      right:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.lb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n      border-top-color:@arrowBorderColor;\n    }\n    &::before{\n      left:@position;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }\n  &.rb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n    }\n    &::before{\n      right:@position;\n      border-top-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }*/\n  right: 0;\n  left: auto;\n}\n.huxy-arrow-rt::before,\n.huxy-arrow-rt::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-arrow-rt::before {\n  border-width: 8px;\n}\n.huxy-arrow-rt::after {\n  border-width: 7px;\n}\n.huxy-arrow-rt::before,\n.huxy-arrow-rt::after {\n  top: auto;\n  bottom: 100%;\n}\n.huxy-arrow-rt::before {\n  right: 16px;\n  border-bottom-color: var(--borderColor);\n}\n.huxy-arrow-rt::after {\n  right: calc(16px + 1px);\n  border-bottom-color: var(--navBgColor);\n}\n.header {\n  --subMenuItemHeight: 40px;\n  max-width: var(--maxWidth);\n  height: var(--headerHeight);\n  line-height: var(--headerHeight);\n  margin: 0 auto;\n  position: relative;\n}\n.header .banner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--menuWidth);\n  background: var(--bannerBgColor);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  transition: width 0.3s;\n}\n.header .banner .logo {\n  height: 100%;\n  font-size: 0;\n}\n.header .banner .logo > img {\n  width: 100%;\n  max-width: calc(var(--headerHeight) * 0.6);\n  height: 60%;\n}\n.header .banner .title {\n  padding-left: 5px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.header .nav {\n  padding-left: var(--menuWidth);\n  background: var(--navBgColor);\n  transition: padding-left 0.3s;\n}\n.header .nav .nav-wrap {\n  padding: 0 10px;\n  position: relative;\n  display: flex;\n  zoom: 1;\n}\n.header .nav .nav-wrap::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.header .nav .nav-wrap .nav-left > ul,\n.header .nav .nav-wrap .nav-right > ul {\n  margin: 0;\n  zoom: 1;\n}\n.header .nav .nav-wrap .nav-left > ul::after,\n.header .nav .nav-wrap .nav-right > ul::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.header .nav .nav-wrap .nav-left > ul > li,\n.header .nav .nav-wrap .nav-right > ul > li {\n  position: relative;\n  user-select: none;\n}\n.header .nav .nav-wrap .nav-left > ul > li > a,\n.header .nav .nav-wrap .nav-right > ul > li > a {\n  height: var(--headerHeight);\n  display: block;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 12px;\n  position: relative;\n  transition: color 0.3s;\n}\n.header .nav .nav-wrap .nav-left > ul > li > a::before,\n.header .nav .nav-wrap .nav-right > ul > li > a::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: calc(50% - 10px);\n  height: 20px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.header .nav .nav-wrap .nav-left > ul > li > a .avatar,\n.header .nav .nav-wrap .nav-right > ul > li > a .avatar {\n  font-size: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img,\n.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img {\n  height: 48%;\n  max-height: 46px;\n  border-radius: 100%;\n  background-color: #f0f0f0f0;\n  padding: 2px;\n  position: relative;\n  transform-origin: 50% 50%;\n  transform: rotate(-42deg);\n}\n.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img::after,\n.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img::after {\n  content: \"\";\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 100%;\n  bottom: -3px;\n  left: calc(50% - 2px);\n  background-color: #21d86e;\n}\n.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img img,\n.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img img {\n  height: 100%;\n  border-radius: 100%;\n  display: block;\n  transform-origin: 50% 50%;\n  transform: rotate(42deg);\n}\n.header .nav .nav-wrap .nav-left > ul > li > a > .icon,\n.header .nav .nav-wrap .nav-right > ul > li > a > .icon {\n  font-size: 0;\n  height: 100%;\n}\n.header .nav .nav-wrap .nav-left > ul > li > a > .icon img,\n.header .nav .nav-wrap .nav-right > ul > li > a > .icon img {\n  height: 30%;\n  max-height: 24px;\n  filter: grayscale(0.1);\n}\n.header .nav .nav-wrap .nav-left > ul > li > a i,\n.header .nav .nav-wrap .nav-right > ul > li > a i,\n.header .nav .nav-wrap .nav-left > ul > li > a svg,\n.header .nav .nav-wrap .nav-right > ul > li > a svg,\n.header .nav .nav-wrap .nav-left > ul > li > a .iico,\n.header .nav .nav-wrap .nav-right > ul > li > a .iico,\n.header .nav .nav-wrap .nav-left > ul > li > a .anticon,\n.header .nav .nav-wrap .nav-right > ul > li > a .anticon {\n  font-size: 1.6rem;\n  vertical-align: middle;\n}\n.header .nav .nav-wrap .nav-left > ul > li > a .txt,\n.header .nav .nav-wrap .nav-right > ul > li > a .txt {\n  display: inline-block;\n  font-size: 1.3rem;\n  padding: 0 10px;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul,\n.header .nav .nav-wrap .nav-right > ul > li ul {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 135px;\n  box-shadow: 0 2px 6px var(--borderColor);\n  padding: 10px 0;\n  border-radius: 2px;\n  z-index: 10;\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li,\n.header .nav .nav-wrap .nav-right > ul > li ul > li {\n  user-select: none;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li.divider,\n.header .nav .nav-wrap .nav-right > ul > li ul > li.divider {\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid var(--borderColor);\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li a,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a {\n  display: flex;\n  align-items: center;\n  height: var(--subMenuItemHeight);\n  line-height: var(--subMenuItemHeight);\n  cursor: pointer;\n  padding: 0 15px;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li a > .img,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a > .img {\n  font-size: 0;\n  height: 100%;\n  margin-right: 10px;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li a > .img img,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a > .img img {\n  height: 40%;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li a i,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a i,\n.header .nav .nav-wrap .nav-left > ul > li ul > li a .iico,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a .iico,\n.header .nav .nav-wrap .nav-left > ul > li ul > li a .anticon,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a .anticon {\n  display: inline-block;\n  margin-right: 10px;\n  text-align: center;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li a > .drop-label,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a > .drop-label {\n  display: inline-block;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li a:hover,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a:hover {\n  background-color: #e6f7ff;\n  color: #666;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li a.active,\n.header .nav .nav-wrap .nav-right > ul > li ul > li a.active {\n  background-color: #e6f7ff;\n  color: #666;\n}\n.header .nav .nav-wrap .nav-left > ul > li.open ul,\n.header .nav .nav-wrap .nav-right > ul > li.open ul {\n  display: block;\n  animation: huxy-animate-top-in 0.2s forwards;\n}\n.header .nav .nav-wrap .nav-left {\n  float: left;\n}\n.header .nav .nav-wrap .nav-left > ul {\n  float: left;\n}\n.header .nav .nav-wrap .nav-left > ul > li {\n  float: left;\n  /*>a{\n              // border-left:1px solid rgba(0,0,0,.1);\n              &::before{\n                content:\"\";\n                position:absolute;\n                left:0;\n                top:calc(@headerHeight / 2 - 10px);\n                height:20px;\n                width:1px;\n                background-color:rgba(0,0,0,.1);\n              }\n            }*/\n}\n.header .nav .nav-wrap .nav-right {\n  flex: 1;\n  float: right;\n}\n.header .nav .nav-wrap .nav-right > ul {\n  float: right;\n}\n.header .nav .nav-wrap .nav-right > ul > li {\n  float: right;\n}\n.collapsed .frame-header .header .banner {\n  width: var(--collapseWidth);\n  transition: width 0.3s;\n}\n.collapsed .frame-header .header .banner .title {\n  display: none;\n}\n.collapsed .frame-header .header .nav {\n  padding-left: var(--collapseWidth);\n  transition: padding-left 0.3s;\n}\n@media screen and (max-width: 1024px) {\n  .header .banner {\n    display: none;\n  }\n  .header .nav {\n    padding-left: 0;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header .nav {\n    padding-left: 0;\n  }\n  .header .nav .nav-wrap .nav-left > ul > li:not(:first-child) {\n    display: none;\n  }\n  .header .nav .nav-wrap .nav-right > ul > li:not(:first-child) {\n    display: none;\n  }\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes ani-fade-in {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  1% {\n    opacity: 0;\n    display: block;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n@keyframes ani-fade-out {\n  0% {\n    opacity: 1;\n    display: block;\n  }\n  99% {\n    opacity: 0;\n    display: block;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n@keyframes ani-scale-in {\n  0% {\n    transform: scale(0);\n    display: none;\n  }\n  1% {\n    transform: scale(0);\n    display: block;\n  }\n  100% {\n    transform: scale(1);\n    display: block;\n  }\n}\n@keyframes ani-scale-out {\n  0% {\n    transform: scale(1);\n    display: block;\n  }\n  99% {\n    transform: scale(0);\n    display: block;\n  }\n  100% {\n    transform: scale(0);\n    display: none;\n  }\n}\n@keyframes ani-left-in {\n  0% {\n    opacity: 0;\n    transform: translate3d(-72px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes ani-left-out {\n  0% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(72px, 0, 0);\n  }\n}\n@keyframes ani-top-in {\n  0% {\n    opacity: 0.4;\n    transform: translate(0, -72px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n}\n.page-color {\n  /*a{\n    // color:@pageLinkColor;\n    color:@linkActiveColor;\n    &:active,&.active{\n      color:@linkActiveColor;\n    }\n    &:hover{\n      color:@linkHoverColor;\n    }\n  }*/\n}\n.page-color h1,\n.page-color h2,\n.page-color h3,\n.page-color h4,\n.page-color h5,\n.page-color h6,\n.page-color p {\n  color: var(--appColor);\n}\n.page-container {\n  min-height: calc(100vh - var(--footerHeight) - var(--topHeight));\n  position: relative;\n  background: var(--pageBgColor);\n}\n.page-container .page-content {\n  padding: var(--frame-spacing);\n  /*a{\n    // color:@pageLinkColor;\n    color:@linkActiveColor;\n    &:active,&.active{\n      color:@linkActiveColor;\n    }\n    &:hover{\n      color:@linkHoverColor;\n    }\n  }*/\n}\n.page-container .page-content.ani-in {\n  overflow: hidden;\n  animation: ani-left-in 0.5s forwards;\n}\n.page-container .page-content.ani-out {\n  overflow: hidden;\n  animation: ani-left-out 0.5s forwards;\n}\n.page-container .page-content h1,\n.page-container .page-content h2,\n.page-container .page-content h3,\n.page-container .page-content h4,\n.page-container .page-content h5,\n.page-container .page-content h6,\n.page-container .page-content p {\n  color: var(--appColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_74_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*callout*/\n/*.callout(@info:#428bca,@success:#5cb85c,@warning:#f0ad4e,@danger:#d9534f){\n  display: block;\n  padding: 5px 10px;\n  margin: 5px 0;\n  color: #777;\n  border-left-width: 4px;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.03);\n  position: relative;\n  border-left-color: @info;\n  &::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 0;\n    height: 0;\n    border-bottom: 6px solid transparent;\n    border-left: 6px solid @info;\n  }\n  &.info {\n    border-left-color: @info;\n    &::after {\n      border-left-color: @info;\n    }\n  }\n  &.success {\n    border-left-color: @success;\n    &::after {\n      border-left-color: @success;\n    }\n  }\n  &.warning {\n    border-left-color: @warning;\n    &::after {\n      border-left-color: @warning;\n    }\n  }\n  &.danger {\n    border-left-color: @danger;\n    &::after {\n      border-left-color: @danger;\n    }\n  }\n}*/\n.menu {\n  --ul-max-height: 0;\n  --menuTopBar: 0px;\n  --menuDownBar: var(--footerHeight);\n  --menuTrackWidth: 15px;\n  --subMenuItemHeight: 45px;\n  --menuLeftIconWidth: 38px;\n  --menuRightIconWidth: 24px;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.menu .menu-track {\n  width: calc(100% + var(--menuTrackWidth));\n  height: calc(100% - var(--menuTopBar) - var(--menuDownBar));\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.menu .menu-track .tree-root {\n  width: var(--menuWidth);\n  min-height: 100%;\n  padding: 10px 0;\n  margin: 0;\n}\n.menu .menu-track .tree-root > li > a {\n  padding-left: 6px;\n  font-size: 1.3rem;\n}\n.menu .menu-track .tree-root > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.menu .menu-track .tree-root > li > ul > li > a {\n  padding-left: 22px;\n  font-size: 1.2rem;\n}\n.menu .menu-track .tree-root > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.menu .menu-track .tree-root > li > ul > li > ul > li > a {\n  padding-left: 38px;\n  font-size: 1.1rem;\n}\n.menu .menu-track .tree-root > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.menu .menu-track .tree-root > li > ul > li > ul > li > ul > li > a {\n  padding-left: 54px;\n  font-size: 1rem;\n}\n.menu .menu-track .tree-root > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.menu .menu-track .tree-root > li > ul > li > ul > li > ul > li > ul > li > a {\n  padding-left: 70px;\n  font-size: 0.9rem;\n}\n.menu .menu-track .tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.menu .menu-track .tree-root li {\n  user-select: none;\n  position: relative;\n}\n.menu .menu-track .tree-root li[has-children=\"true\"] > a.active::after {\n  display: none;\n}\n.menu .menu-track .tree-root li > a {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subMenuItemHeight);\n  line-height: var(--subMenuItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.menu .menu-track .tree-root li > a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.menu .menu-track .tree-root li > a.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.menu .menu-track .tree-root li > a::after {\n  left: 0;\n  bottom: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n}\n.menu .menu-track .tree-root li > a i,\n.menu .menu-track .tree-root li > a .iico,\n.menu .menu-track .tree-root li > a .anticon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--menuLeftIconWidth);\n  height: var(--subMenuItemHeight);\n  line-height: var(--subMenuItemHeight);\n  text-align: center;\n}\n.menu .menu-track .tree-root li > a i + .txt,\n.menu .menu-track .tree-root li > a .iico + .txt,\n.menu .menu-track .tree-root li > a .anticon + .txt {\n  padding-left: var(--menuLeftIconWidth);\n}\n.menu .menu-track .tree-root li > a i > svg,\n.menu .menu-track .tree-root li > a .iico > svg,\n.menu .menu-track .tree-root li > a .anticon > svg {\n  vertical-align: middle;\n}\n.menu .menu-track .tree-root li > a i.default-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.menu .menu-track .tree-root li > a .txt {\n  display: block;\n  padding: 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.menu .menu-track .tree-root li > a .txt.has-right-icon {\n  padding-right: calc(var(--menuRightIconWidth) + 5px);\n}\n.menu .menu-track .tree-root li > a .txt + .coll-ico {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n  right: 0;\n  position: absolute;\n  width: var(--menuRightIconWidth);\n}\n.menu .menu-track .tree-root li > a .txt + .coll-ico::before,\n.menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.menu .menu-track .tree-root li > a .txt + .coll-ico::before {\n  left: 0;\n}\n.menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  left: calc(1px * 0.7);\n}\n.menu .menu-track .tree-root li > a .txt + .coll-ico::before,\n.menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  top: calc(50% + var(--pos));\n}\n.menu .menu-track .tree-root li > a .txt + .coll-ico::before {\n  transform: rotate(135deg);\n}\n.menu .menu-track .tree-root li > a .txt + .coll-ico::after {\n  transform: rotate(45deg);\n}\n.menu .menu-track .tree-root li.open > a .coll-ico {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n  position: absolute;\n  width: var(--menuRightIconWidth);\n}\n.menu .menu-track .tree-root li.open > a .coll-ico::before,\n.menu .menu-track .tree-root li.open > a .coll-ico::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.menu .menu-track .tree-root li.open > a .coll-ico::before {\n  left: 0;\n}\n.menu .menu-track .tree-root li.open > a .coll-ico::after {\n  left: calc(1px * 0.7);\n}\n.menu .menu-track .tree-root li.open > a .coll-ico::before,\n.menu .menu-track .tree-root li.open > a .coll-ico::after {\n  top: calc(50% - var(--pos));\n}\n.menu .menu-track .tree-root li.open > a .coll-ico::before {\n  transform: rotate(225deg);\n}\n.menu .menu-track .tree-root li.open > a .coll-ico::after {\n  transform: rotate(-45deg);\n}\n.menu .menu-track .tree-root li > ul {\n  overflow: hidden;\n  transition: max-height 0.3s;\n}\n.menu .menu-track .tree-root > li > a {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n  height: var(--menuItemHeight);\n  line-height: var(--menuItemHeight);\n}\n.menu .menu-track .tree-root > li > a i,\n.menu .menu-track .tree-root > li > a .iico,\n.menu .menu-track .tree-root > li > a .anticon {\n  height: var(--menuItemHeight);\n  line-height: var(--menuItemHeight);\n}\n@media screen and (min-width: 1024px) {\n  .collapsed .menu .menu-track .tree-root {\n    width: var(--collapseWidth);\n  }\n  .collapsed .menu .menu-track .tree-root li > a {\n    padding-left: 0px;\n    position: relative;\n    /*&:hover,*/\n  }\n  .collapsed .menu .menu-track .tree-root li > a::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0px;\n    bottom: 0;\n    top: auto;\n    height: 3px;\n    width: calc(100% - 0px * 2);\n    background-color: currentColor;\n    transform: scale(0);\n    transition: transform 0.3s;\n  }\n  .collapsed .menu .menu-track .tree-root li > a.active::after {\n    transform: scale(1);\n    transition: transform 0.3s;\n  }\n  .collapsed .menu .menu-track .tree-root li > ul {\n    overflow: visible;\n    position: relative;\n    background: var(--menuBgColor);\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    /*&.lt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      left:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.rt{\n    &::before,&::after{\n      bottom:100%;\n    }\n    &::before{\n      right:@position;\n      border-bottom-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-bottom-color:@arrowBgColor;\n    }\n  }\n  &.lb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n      border-top-color:@arrowBorderColor;\n    }\n    &::before{\n      left:@position;\n    }\n    &::after{\n      left:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }\n  &.rb{\n    &::before,&::after{\n      bottom:0;\n      top:100%;\n    }\n    &::before{\n      right:@position;\n      border-top-color:@arrowBorderColor;\n    }\n    &::after{\n      right:@position + @arrowWidth;\n      border-top-color:@arrowBgColor;\n    }\n  }*/\n    position: absolute;\n    top: 0;\n    left: calc(100% + 2px);\n    width: var(--collapseMenuWidth);\n    padding: 10px 0;\n    opacity: 0.99;\n    border-radius: 2px;\n    transform: scale(0);\n    transform-origin: 0 0;\n    transition: 0.3s transform;\n  }\n  .collapsed .menu .menu-track .tree-root li > ul::before,\n  .collapsed .menu .menu-track .tree-root li > ul::after {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border: solid transparent;\n  }\n  .collapsed .menu .menu-track .tree-root li > ul::before {\n    border-width: 6px;\n  }\n  .collapsed .menu .menu-track .tree-root li > ul::after {\n    border-width: 5px;\n  }\n  .collapsed .menu .menu-track .tree-root li > ul::before,\n  .collapsed .menu .menu-track .tree-root li > ul::after {\n    left: auto;\n    right: 100%;\n  }\n  .collapsed .menu .menu-track .tree-root li > ul::before {\n    top: 10px;\n    border-right-color: rgba(255, 255, 255, 0.6);\n  }\n  .collapsed .menu .menu-track .tree-root li > ul::after {\n    top: calc(10px + 1px);\n    border-right-color: var(--menuBgColor);\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico {\n    --pos: calc(5px - 1px) / 2;\n    position: relative;\n    display: inline-block;\n    font-style: normal;\n    float: right;\n    cursor: pointer;\n    height: 100%;\n    width: 10px;\n    /*&.bottom{\n    &::before,&::after{\n      top:calc(50% + @pos);\n    }\n    &::before{\n      transform:rotate(135deg);\n    }\n    &::after{\n      transform:rotate(45deg);\n    }\n  }\n  &.top{\n    &::before,&::after{\n      top:calc(50% - @pos);\n    }\n    &::before{\n      transform:rotate(225deg);\n    }\n    &::after{\n      transform:rotate(-45deg);\n    }\n  }*/\n    position: absolute;\n    width: var(--menuRightIconWidth);\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::before,\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border-radius: 1px;\n    background-color: currentColor;\n    height: 1px;\n    width: 5px;\n    left: 0;\n    transform-origin: 100% 50% 0;\n    transition: all 0.3s;\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::before {\n    left: 0;\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::after {\n    left: calc(1px * 0.7);\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::before,\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::after {\n    top: calc(50% - var(--pos));\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::before {\n    transform: rotate(225deg);\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > a .coll-ico::after {\n    transform: rotate(-45deg);\n  }\n  .collapsed .menu .menu-track .tree-root li:hover > ul {\n    transform: scale(1);\n    transition: 0.3s transform;\n  }\n  .collapsed .menu .menu-track .tree-root > li > a .txt {\n    display: none;\n  }\n  .collapsed .menu .menu-track .tree-root > li > a .coll-ico {\n    display: none !important;\n  }\n  .collapsed .menu .menu-track .tree-root > li > a i,\n  .collapsed .menu .menu-track .tree-root > li > a .iico,\n  .collapsed .menu .menu-track .tree-root > li > a .anticon {\n    width: var(--collapseWidth);\n    font-size: 1.6rem;\n  }\n  .collapsed .menu .menu-btbar {\n    display: none;\n  }\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 577:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
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

/***/ 431:
/***/ (function(module) {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 53:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 993:
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 334:
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 807:
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 808:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 432:
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 297:
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ huxy_layout_frame_0; }
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ var utils_isBrowser = (isBrowser);
;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ var utils_getType = (getType);
;// CONCATENATED MODULE: ../huxy/utils/isElement.js


const isElement = value => utils_getType(value).indexOf('element') > -1;

/* harmony default export */ var utils_isElement = (isElement);
;// CONCATENATED MODULE: ../huxy/utils/getViewportSize.js



const getViewportSize = function () {
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!utils_isBrowser()) {
    return {
      width: 0,
      height: 0
    };
  }

  if (utils_isElement(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }

  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
};

/* harmony default export */ var utils_getViewportSize = (getViewportSize);
;// CONCATENATED MODULE: ../huxy/use/useRaf/index.jsx


const useRaf = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const frame = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(0);
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const setRaf = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(value => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};

/* harmony default export */ var use_useRaf = (useRaf);
;// CONCATENATED MODULE: ../huxy/use/useWinResize/index.jsx




const useWinResize = () => {
  const [state, setState] = use_useRaf(utils_getViewportSize());
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = () => setState(utils_getViewportSize());

    window.addEventListener('resize', handler, false);
    return () => window.removeEventListener('resize', handler, false);
  }, []);
  return state;
};

/* harmony default export */ var use_useWinResize = (useWinResize);
;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ var utils_hasProp = (hasProp);
;// CONCATENATED MODULE: ../huxy/utils/isRef.js


const isRef = ref => utils_hasProp(ref, 'current');

/* harmony default export */ var utils_isRef = (isRef);
;// CONCATENATED MODULE: ../huxy/use/useClickAway/index.jsx



const useClickAway = function (elRef, handleEvent) {
  let events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = event => {
      const el = utils_isRef(elRef) ? elRef.current : elRef;

      if (el != null && el.contains && !el.contains(event.target)) {
        handleEvent(event);
      }
    };

    document.addEventListener(events, handler, false);
    return () => document.removeEventListener(events, handler, false);
  }, [elRef, handleEvent, events]);
};

/* harmony default export */ var use_useClickAway = (useClickAway);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
;// CONCATENATED MODULE: ../huxy/layout/components/navList/index.jsx






const NavItem = _ref => {
  let {
    item,
    click,
    Icon
  } = _ref;
  const navRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const [open, setOpen] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(false);
  use_useClickAway(navRef, e => open && setOpen(false));
  const {
    Custom,
    img,
    name,
    icon,
    children,
    Ricon,
    active,
    arrowDir,
    ChildRender
  } = item;
  const hasChildren = children == null ? void 0 : children.length;

  const itemClick = function (e, item) {
    let isChild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (isChild) {
      e.stopPropagation();
      setOpen(false);
    }

    click(item, isChild);
  };

  const ri = Ricon === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
    className: `huxy-angle-${open ? 'top' : 'bt'}`
  }) : Ricon ? /*#__PURE__*/(0,jsx_runtime.jsx)(Ricon, {
    status: open
  }) : null;
  const itemEl = img ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "avatar",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "img",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: img,
        crossOrigin: "anonymous",
        alt: "avatar"
      })
    }), name ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "txt",
      children: name
    }) : null, ri]
  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      icon: icon
    }), name ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "txt",
      children: name
    }) : null, ri]
  });
  const itemContainer = typeof Custom === 'function' ? /*#__PURE__*/(0,jsx_runtime.jsx)(Custom, {
    item: item
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
    className: active ? 'active' : '',
    title: item.title || name,
    children: itemEl
  });
  return hasChildren || ChildRender ? /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    ref: navRef,
    className: open ? 'open' : '',
    onClick: e => setOpen(prev => !prev),
    children: [itemContainer, /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: `huxy-arrow-${arrowDir || 'rt'}`,
      children: hasChildren ? children.map((v, k) => /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: v.divider ? 'divider' : '',
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
          onClick: e => itemClick(e, v, true),
          className: v.active ? 'active' : '',
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
            icon: v.icon
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "drop-label",
            children: v.name
          })]
        })
      }, `subItem-${k}-${v.key || v.name}`)) : /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ChildRender, {
          item: item
        })
      })
    })]
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    onClick: e => itemClick(e, item),
    children: itemContainer
  });
};

const Index = _ref2 => {
  let {
    list,
    click,
    Icon
  } = _ref2;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    children: list.map((v, k) => /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
      click: click,
      item: v,
      Icon: Icon
    }, `navItem-${k}-${v.key || v.name}`))
  });
};

/* harmony default export */ var navList = (Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.74.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(993);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.74.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(432);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.74.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(334);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.74.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(808);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.74.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(807);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.74.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(297);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.0.0_less@4.1.3+webpack@5.74.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/header/index.less
var header = __webpack_require__(222);
;// CONCATENATED MODULE: ../huxy/layout/header/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(header/* default */.Z, options);




       /* harmony default export */ var layout_header = (header/* default */.Z && header/* default.locals */.Z.locals ? header/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/layout/header/index.jsx





const header_Index = props => {
  const {
    leftList,
    rightList,
    handleNavClick,
    Icon,
    logo,
    title
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "header",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
      className: "banner",
      href: "/",
      children: [logo ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "logo",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: logo,
          alt: "logo"
        })
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "title",
        children: title != null ? title : 'Dashboard'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "nav",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "nav-wrap",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "nav-left",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(navList, {
            list: leftList,
            click: item => handleNavClick(props, item),
            Icon: Icon
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "nav-right",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(navList, {
            list: rightList,
            click: item => handleNavClick(props, item),
            Icon: Icon
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var huxy_layout_header = (header_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.0.0_less@4.1.3+webpack@5.74.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/footer/index.less
var footer = __webpack_require__(409);
;// CONCATENATED MODULE: ../huxy/layout/footer/index.less

      
      
      
      
      
      
      
      
      

var footer_options = {};

footer_options.styleTagTransform = (styleTagTransform_default());
footer_options.setAttributes = (setAttributesWithoutAttributes_default());

      footer_options.insert = insertBySelector_default().bind(null, "head");
    
footer_options.domAPI = (styleDomAPI_default());
footer_options.insertStyleElement = (insertStyleElement_default());

var footer_update = injectStylesIntoStyleTag_default()(footer/* default */.Z, footer_options);




       /* harmony default export */ var layout_footer = (footer/* default */.Z && footer/* default.locals */.Z.locals ? footer/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/layout/footer/index.jsx



const footer_Index = _ref => {
  let {
    Footer
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "footer",
    children: Footer ? /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {}) : 'copyright © 2020-2022'
  });
};

/* harmony default export */ var huxy_layout_footer = (footer_Index);
;// CONCATENATED MODULE: ../huxy/utils/isArray.js


const isArray = value => utils_getType(value) === 'array';

/* harmony default export */ var utils_isArray = (isArray);
;// CONCATENATED MODULE: ../huxy/utils/getSelected.js


const getSelected = function (arr, id) {
  let idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  let childKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

  if (!utils_isArray(arr)) {
    return null;
  }

  const selected = data => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];

      if (item[idKey] === id) {
        return [item];
      }

      if (utils_isArray(item[childKey])) {
        const selChildren = selected(item[childKey]);

        if (selChildren) {
          return [item].concat(selChildren);
        }
      }
    }
  };

  return selected(arr);
};

/* harmony default export */ var utils_getSelected = (getSelected);
;// CONCATENATED MODULE: ../huxy/utils/timestamp.js
const timestamp = () => {
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    return performance.now();
  }

  return new Date().getTime();
};

/* harmony default export */ var utils_timestamp = (timestamp);
;// CONCATENATED MODULE: ../huxy/utils/uuidv4.js


const uuidv4 = () => {
  let timeKey = utils_timestamp();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
};

/* harmony default export */ var utils_uuidv4 = (uuidv4);
;// CONCATENATED MODULE: ../huxy/use/useUpdate/index.jsx


const incrementParameter = num => ++num;

const useUpdate = () => {
  const [, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(0);
  return (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(() => setState(incrementParameter), []);
};

/* harmony default export */ var use_useUpdate = (useUpdate);
;// CONCATENATED MODULE: ../huxy/use/useFirstMounted/index.jsx


const useFirstMounted = () => {
  const isFirst = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return false;
};

/* harmony default export */ var use_useFirstMounted = (useFirstMounted);
;// CONCATENATED MODULE: ../huxy/layout/components/render/renderChild.jsx




const RenderChild = _ref => {
  var _item$children;

  let {
    item,
    children
  } = _ref;
  const {
    uuid,
    open
  } = item;
  const ul = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const timer = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const isMounted = use_useFirstMounted();
  const [maxHeight, setMaxHeight] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)('');
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const el = ul.current;
    const height = open ? `${el.scrollHeight}px` : '0px'; // el.style.maxHeight=height;

    setMaxHeight(height);
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (isMounted) {
      return;
    }

    const el = ul.current;
    const initH = open ? '0px' : `${el.scrollHeight}px`; // el.style.maxHeight=initH;

    setMaxHeight(initH);
    timer.current = setTimeout(() => {
      const height = open ? `${el.scrollHeight}px` : '0px'; // el.style.maxHeight=height;

      setMaxHeight(height);
    }, 5);
    return () => clearTimeout(timer.current);
  }, [open, (_item$children = item.children) == null ? void 0 : _item$children.length]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    // 多层级触发
    if (uuid) {
      // ul.current.style.maxHeight='';
      setMaxHeight('');
    }
  }, [uuid]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    ref: ul,
    style: {
      maxHeight
    },
    children: children
  });
};

/* harmony default export */ var renderChild = (RenderChild);
;// CONCATENATED MODULE: ../huxy/layout/components/render/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const render = (data, toggle, Icon, Link) => data.map(item => {
  const {
    name,
    path,
    icon,
    active,
    open,
    children,
    linkProps
  } = item;
  const hasChildren = children == null ? void 0 : children.length;

  const iconEl = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
    icon: icon,
    defaultIcon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "default-icon"
    })
  });

  if (hasChildren) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
      onClick: e => toggle(e, item),
      "has-children": "true",
      className: open ? 'open' : '',
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread({
        to: path,
        className: active ? 'active' : '',
        preventDefault: true,
        stopPropagation: false
      }, linkProps), {}, {
        children: [iconEl, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "txt has-right-icon",
          children: name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "coll-ico"
        })]
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(renderChild, {
        item: item,
        children: render(children, toggle, Icon, Link)
      })]
    }, path || name);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread({
      to: path,
      className: active ? 'active target' : ''
    }, linkProps), {}, {
      children: [iconEl, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "txt",
        children: name
      })]
    }))
  }, path || name);
});
let renderCollapsed_onMouseLeave_timer = 0;
const renderCollapsed = function (data, menuRef, Icon, Link) {
  let level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return data.map(item => {
    const {
      name,
      path,
      icon,
      active,
      children,
      linkProps
    } = item;
    const hasChildren = children == null ? void 0 : children.length;

    const iconEl = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      icon: icon,
      defaultIcon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "default-icon"
      })
    });

    if (hasChildren) {
      const mouseEvents = level ? {} : {
        onMouseEnter: e => {
          clearTimeout(renderCollapsed_onMouseLeave_timer);
          menuRef.current.style.width = '100vw';
        },
        onMouseLeave: e => {
          renderCollapsed_onMouseLeave_timer = setTimeout(() => menuRef.current.style.width = '', 200);
        }
      };
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", _objectSpread(_objectSpread({
        "has-children": "true"
      }, mouseEvents), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread({
          to: path,
          className: active ? 'active' : '',
          preventDefault: true
        }, linkProps), {}, {
          children: [iconEl, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "txt has-right-icon",
            children: name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "coll-ico"
          })]
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
          children: renderCollapsed(children, menuRef, Icon, Link, level + 1)
        })]
      }), path || name);
    }

    const tooltips = level ? null : {
      title: name
    };
    return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread(_objectSpread({
        to: path,
        className: active ? 'active target' : ''
      }, linkProps), tooltips), {}, {
        children: [iconEl, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "txt",
          children: name
        })]
      }))
    }, path || name);
  });
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.0.0_less@4.1.3+webpack@5.74.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/menu/index.less
var menu = __webpack_require__(265);
;// CONCATENATED MODULE: ../huxy/layout/menu/index.less

      
      
      
      
      
      
      
      
      

var menu_options = {};

menu_options.styleTagTransform = (styleTagTransform_default());
menu_options.setAttributes = (setAttributesWithoutAttributes_default());

      menu_options.insert = insertBySelector_default().bind(null, "head");
    
menu_options.domAPI = (styleDomAPI_default());
menu_options.insertStyleElement = (insertStyleElement_default());

var menu_update = injectStylesIntoStyleTag_default()(menu/* default */.Z, menu_options);




       /* harmony default export */ var layout_menu = (menu/* default */.Z && menu/* default.locals */.Z.locals ? menu/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/layout/menu/index.jsx


function menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? menu_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












const menu_Index = props => {
  const {
    useStore,
    menu,
    MenuTop,
    MenuBottom,
    menuStyle,
    Icon,
    Link
  } = props;
  const [collapsed, setCollapsed] = useStore('huxy-collapse');
  const {
    width
  } = use_useWinResize();
  const menuRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  use_useClickAway(menuRef, e => {
    if (width < 1024 && collapsed) {
      setCollapsed(false);
    }
  });
  const rerender = use_useUpdate();

  const toggle = (e, v) => {
    e.stopPropagation();
    const selecteds = utils_getSelected(menu, v.path, 'path');
    selecteds.map(item => item.path === v.path ? item.open = !item.open : item.uuid = utils_uuidv4());
    rerender();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "menu",
    ref: menuRef,
    style: menuStyle,
    children: [MenuTop && /*#__PURE__*/(0,jsx_runtime.jsx)(MenuTop, menu_objectSpread({}, props)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "menu-track",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
        className: "tree-root",
        children: width > 1024 && collapsed ? renderCollapsed(menu, menuRef, Icon, Link) : render(menu, toggle, Icon, Link)
      })
    }), MenuBottom && width > 1024 && /*#__PURE__*/(0,jsx_runtime.jsx)(MenuBottom, {
      collapsed: collapsed,
      setCollapsed: setCollapsed
    })]
  });
};

/* harmony default export */ var huxy_layout_menu = (menu_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.0.0_less@4.1.3+webpack@5.74.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/main/index.less
var main = __webpack_require__(818);
;// CONCATENATED MODULE: ../huxy/layout/main/index.less

      
      
      
      
      
      
      
      
      

var main_options = {};

main_options.styleTagTransform = (styleTagTransform_default());
main_options.setAttributes = (setAttributesWithoutAttributes_default());

      main_options.insert = insertBySelector_default().bind(null, "head");
    
main_options.domAPI = (styleDomAPI_default());
main_options.insertStyleElement = (insertStyleElement_default());

var main_update = injectStylesIntoStyleTag_default()(main/* default */.Z, main_options);




       /* harmony default export */ var layout_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/layout/main/index.jsx


function main_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function main_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? main_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : main_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







const DELAY = 450;

const main_Index = props => {
  var _current$slice$;

  const {
    menu,
    current,
    MainTop,
    asideStyle,
    contentStyle,
    children
  } = props;
  const curPath = (_current$slice$ = current.slice(-1)[0]) == null ? void 0 : _current$slice$.path;
  const hasMenu = menu == null ? void 0 : menu.length;
  const pathRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(curPath);
  const timer = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const [aniCls, setAniCls] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)('');
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    var _current$slice$2;

    const curPath = (_current$slice$2 = current.slice(-1)[0]) == null ? void 0 : _current$slice$2.path;

    if (curPath !== pathRef.current) {
      pathRef.current = curPath;
      setAniCls(' ani-in');
      timer.current = setTimeout(() => {
        setAniCls('');
      }, DELAY);
    }

    return () => {
      clearTimeout(timer.current);
      setAniCls('');
    };
  }, [current]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: `frame-container${hasMenu ? '' : ' no-sidebar'}`,
    children: [hasMenu ? /*#__PURE__*/(0,jsx_runtime.jsx)("aside", {
      className: "frame-aside",
      style: asideStyle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(huxy_layout_menu, main_objectSpread(main_objectSpread({}, props), {}, {
        menu: menu
      }))
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "frame-view",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "page-container",
        children: [MainTop && /*#__PURE__*/(0,jsx_runtime.jsx)(MainTop, {
          current: current
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: `page-content${aniCls}`,
          style: contentStyle,
          children: children
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("footer", {
      className: "frame-footer",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(huxy_layout_footer, main_objectSpread({}, props))
    })]
  });
};

/* harmony default export */ var huxy_layout_main = (main_Index);
;// CONCATENATED MODULE: ../huxy/layout/components/icon/fixEle.jsx


const fixEle = list => Value => {
  if (typeof Value === 'function' || typeof (Value == null ? void 0 : Value.render) === 'function') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Value, {});
  }

  if (typeof Value === 'string') {
    const Comp = list == null ? void 0 : list[Value];
    return Comp ? /*#__PURE__*/(0,jsx_runtime.jsx)(Comp, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: Value
    });
  }

  return Value || null;
};

/* harmony default export */ var icon_fixEle = (fixEle);
;// CONCATENATED MODULE: ../huxy/layout/components/icon/fixIcons.js


const fixIcons = iconList => icon_fixEle(iconList);

/* harmony default export */ var icon_fixIcons = (fixIcons);
;// CONCATENATED MODULE: ../huxy/layout/components/icon/index.jsx


const Icon = iconList => _ref => {
  let {
    icon,
    defaultIcon = null
  } = _ref;
  return icon ? icon_fixIcons(iconList)(icon) : defaultIcon;
};

/* harmony default export */ var icon = (Icon);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.0.0_less@4.1.3+webpack@5.74.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/components/horiMenu/index.less
var horiMenu = __webpack_require__(419);
;// CONCATENATED MODULE: ../huxy/layout/components/horiMenu/index.less

      
      
      
      
      
      
      
      
      

var horiMenu_options = {};

horiMenu_options.styleTagTransform = (styleTagTransform_default());
horiMenu_options.setAttributes = (setAttributesWithoutAttributes_default());

      horiMenu_options.insert = insertBySelector_default().bind(null, "head");
    
horiMenu_options.domAPI = (styleDomAPI_default());
horiMenu_options.insertStyleElement = (insertStyleElement_default());

var horiMenu_update = injectStylesIntoStyleTag_default()(horiMenu/* default */.Z, horiMenu_options);




       /* harmony default export */ var components_horiMenu = (horiMenu/* default */.Z && horiMenu/* default.locals */.Z.locals ? horiMenu/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/layout/components/horiMenu/index.jsx


const _excluded = ["menu", "Icon", "Link"],
      _excluded2 = ["float"];

function horiMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function horiMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? horiMenu_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : horiMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const horiMenu_render = (data, Icon, Link, float) => data.map(item => {
  const {
    name,
    path,
    icon,
    active,
    open,
    children,
    linkProps
  } = item;
  const hasChildren = children && children.length;

  const iconEl = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
    icon: icon,
    defaultIcon: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
      className: "default-icon"
    })
  });

  if (hasChildren) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
      "has-children": "true",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Link, horiMenu_objectSpread(horiMenu_objectSpread({
        to: path,
        className: active ? 'active' : '',
        preventDefault: true
      }, linkProps), {}, {
        children: [iconEl, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "txt has-right-icon",
          children: name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          className: "coll-ico"
        })]
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
        className: float === 'right' ? 'left' : '',
        children: horiMenu_render(children, Icon, Link, float)
      })]
    }, path || name);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Link, horiMenu_objectSpread(horiMenu_objectSpread({
      to: path,
      className: active ? 'active target' : ''
    }, linkProps), {}, {
      children: [iconEl, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "txt",
        children: name
      })]
    }))
  }, path || name);
});

const horiMenu_Index = _ref => {
  var _rest$style;

  let {
    menu,
    Icon,
    Link
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const _ref2 = (_rest$style = rest == null ? void 0 : rest.style) != null ? _rest$style : {},
        {
    float
  } = _ref2,
        restStyle = _objectWithoutProperties(_ref2, _excluded2);

  const menuFloat = float || 'auto';

  const menuStyle = horiMenu_objectSpread({
    '--menuFloat': menuFloat
  }, restStyle);

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", horiMenu_objectSpread(horiMenu_objectSpread({
    className: "nav-menu"
  }, rest), {}, {
    style: menuStyle,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "menu-track",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
        className: "tree-root",
        children: horiMenu_render(menu, Icon, Link, menuFloat)
      })
    })
  }));
};

/* harmony default export */ var layout_components_horiMenu = (horiMenu_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.0.0_less@4.1.3+webpack@5.74.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/frame/index.less
var layout_frame = __webpack_require__(936);
;// CONCATENATED MODULE: ../huxy/layout/frame/index.less

      
      
      
      
      
      
      
      
      

var frame_options = {};

frame_options.styleTagTransform = (styleTagTransform_default());
frame_options.setAttributes = (setAttributesWithoutAttributes_default());

      frame_options.insert = insertBySelector_default().bind(null, "head");
    
frame_options.domAPI = (styleDomAPI_default());
frame_options.insertStyleElement = (insertStyleElement_default());

var frame_update = injectStylesIntoStyleTag_default()(layout_frame/* default */.Z, frame_options);




       /* harmony default export */ var huxy_layout_frame = (layout_frame/* default */.Z && layout_frame/* default.locals */.Z.locals ? layout_frame/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/layout/frame/index.jsx


const frame_excluded = ["iconList"];

function frame_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function frame_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? frame_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : frame_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











const frame_Index = props => {
  const {
    iconList
  } = props,
        restProps = _objectWithoutProperties(props, frame_excluded);

  const Icon = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useMemo)(() => icon(iconList), [iconList]);
  const {
    useStore,
    vertical,
    horizontal,
    menu,
    headerStyle,
    navMenuStyle,
    Link
  } = restProps;
  const {
    width
  } = use_useWinResize();
  const [collapsed] = useStore('huxy-collapse');
  const isSmallScreen = width < 1024; //768;

  const sideMenu = isSmallScreen ? menu : vertical;
  const navMenu = isSmallScreen ? [] : horizontal;
  const classes = ['frame', collapsed ? 'collapsed' : '', navMenu.length ? 'horizontal' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classes,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
      className: "frame-header",
      style: headerStyle,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(huxy_layout_header, frame_objectSpread(frame_objectSpread({}, restProps), {}, {
        Icon: Icon
      })), navMenu != null && navMenu.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(layout_components_horiMenu, {
        menu: navMenu,
        style: navMenuStyle,
        Link: Link,
        Icon: Icon
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("main", {
      className: "frame-main",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(huxy_layout_main, frame_objectSpread(frame_objectSpread({}, restProps), {}, {
        menu: sideMenu,
        Icon: Icon
      }))
    })]
  });
};

/* harmony default export */ var huxy_layout_frame_0 = (frame_Index);
;// CONCATENATED MODULE: ../huxy/layout/index.js

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});