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

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".node-right-icon-close {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.node-right-icon-close .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.node-right-icon-close .default-right-icon::before,\n.node-right-icon-close .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.node-right-icon-close .default-right-icon::before {\n  left: 0;\n}\n.node-right-icon-close .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.node-right-icon-close .default-right-icon::before,\n.node-right-icon-close .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.node-right-icon-close .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.node-right-icon-close .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.node-right-icon-open {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.node-right-icon-open .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.node-right-icon-open .default-right-icon::before,\n.node-right-icon-open .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.node-right-icon-open .default-right-icon::before {\n  left: 0;\n}\n.node-right-icon-open .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.node-right-icon-open .default-right-icon::before,\n.node-right-icon-open .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.node-right-icon-open .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.node-right-icon-open .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.hide-scrollbar {\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.hide-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.huxy-tree {\n  --topBar: 0px;\n  --downBar: var(--footerHeight, 0);\n  --width: var(--menuWidth, 100%);\n  --bgColor: var(--menuBgColor, transparent);\n  --itemHeight: var(--menuItemHeight, 40px);\n  --nodeListWidth: var(--collapseMenuWidth, 200px);\n  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));\n  --subItemHeight: calc(var(--itemHeight) - 3px);\n  --leftIconWidth: 38px;\n  --rightIconWidth: 24px;\n  --trackWidth: 15px;\n  --collapsedWidth: var(--collapseWidth, 60px);\n  --ulPadding: 2px 0;\n  --ulPosition: calc(100% + 8px);\n  --arrowPosition: 16px;\n  position: relative;\n  height: calc(100% - var(--topBar) - var(--downBar));\n  overflow: hidden;\n}\n.huxy-tree .huxy-tree-track {\n  width: calc(100% + var(--trackWidth));\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.huxy-tree .huxy-tree-track::-webkit-scrollbar {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root {\n  width: calc(100% - var(--trackWidth));\n  min-height: 100%;\n  padding: var(--ulPadding);\n  margin: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {\n  padding-left: 6px;\n  font-size: 1.3rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {\n  padding-left: 22px;\n  font-size: 1.2rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {\n  padding-left: 38px;\n  font-size: 1.1rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {\n  padding-left: 54px;\n  font-size: 1rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {\n  padding-left: 70px;\n  font-size: 0.9rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li {\n  user-select: none;\n  position: relative;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active::after {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link .node-text {\n  padding-right: calc(var(--rightIconWidth) + 5px);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  left: 0;\n  bottom: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--leftIconWidth);\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-align: center;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {\n  padding-left: var(--leftIconWidth);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {\n  vertical-align: middle;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {\n  display: block;\n  padding: 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {\n  right: 0;\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > ul {\n  height: calc(var(--subItemHeight) * var(--count));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.hidden {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {\n  --count: 0;\n  overflow: hidden;\n  height: 0;\n  transition: height 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.collapsed.huxy-tree {\n  width: var(--collapsedWidth);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {\n  width: var(--collapsedWidth);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {\n  padding-left: 0px;\n  position: relative;\n  /*&:hover,*/\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {\n  overflow: visible;\n  height: auto;\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: 0;\n  left: var(--ulPosition);\n  width: var(--nodeListWidth);\n  padding: var(--ulPadding);\n  opacity: 0.99;\n  border-radius: 2px;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: 0.3s transform;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  border-width: 6px;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  border-width: 5px;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  left: auto;\n  right: 100%;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  top: var(--arrowPosition);\n  border-right-color: var(--treeBorderColor);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-right-color: var(--bgColor);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {\n  transform: scale(1);\n  transition: 0.3s transform;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {\n  z-index: 10001;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {\n  display: none;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {\n  width: var(--collapsedWidth);\n  font-size: 1.6rem;\n}\n.huxy-horizontal-tree {\n  --bgColor: var(--navBgColor, transparent);\n  --itemHeight: var(--menuItemHeight, 40px);\n  --nodeListWidth: var(--collapseMenuWidth, 200px);\n  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));\n  --subItemHeight: calc(var(--itemHeight) - 3px);\n  --leftIconWidth: 38px;\n  --rightIconWidth: 24px;\n  --itemPadding: 0 8px;\n  --nodeFloat: auto;\n  --ulPadding: 2px 0;\n  --ulPosition: calc(100% + 8px);\n  --arrowPosition: 16px;\n  position: relative;\n  border-top: 1px solid var(--treeBorderColor);\n  float: var(--nodeFloat);\n}\n.huxy-horizontal-tree .huxy-tree-track {\n  max-width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {\n  display: none;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {\n  float: var(--nodeFloat);\n  width: max-content;\n  padding: 0 10px;\n  margin: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {\n  user-select: none;\n  position: relative;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active::after {\n  display: none;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link .node-text {\n  padding-right: calc(var(--rightIconWidth) + 5px);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--leftIconWidth);\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-align: center;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {\n  padding-left: var(--leftIconWidth);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {\n  vertical-align: middle;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: 0;\n  left: var(--ulPosition);\n  right: auto;\n  width: var(--nodeListWidth);\n  padding: var(--ulPadding);\n  opacity: 0.99;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: 0.3s transform;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  left: auto;\n  right: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  top: var(--arrowPosition);\n  border-right-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-right-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  left: auto;\n  right: var(--ulPosition);\n  position: absolute;\n  transform-origin: 100% 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  right: auto;\n  left: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {\n  top: var(--arrowPosition);\n  border-left-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-left-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {\n  transform: scale(1);\n  transition: 0.3s transform;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {\n  float: left;\n  padding: var(--itemPadding);\n  z-index: 10001;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: calc(50% - 10px);\n  height: 20px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: var(--ulPosition);\n  left: 0;\n  transform-origin: 50% 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {\n  border-width: 8px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  border-width: 7px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  top: auto;\n  bottom: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {\n  left: 16px;\n  border-bottom-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  left: calc(16px + 1px);\n  border-bottom-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  left: auto;\n  right: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  left: auto;\n  top: auto;\n  bottom: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {\n  right: 10px;\n  border-bottom-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  right: calc(10px + 1px);\n  border-bottom-color: var(--bgColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  height: var(--footerHeight);\n  line-height: var(--footerHeight);\n  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);\n  margin: 0 auto;\n  max-width: var(--maxWidth);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*.frame-color {\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    color: var(--linkColor);\n  }\n  a {\n    color: var(--linkColor);\n    &:active,\n    &.active {\n      color: var(--linkActiveColor);\n    }\n    &:hover {\n      color: var(--linkHoverColor);\n    }\n  }\n}*/\n:root {\n  --frame-spacing: 1vw;\n  --frame-radius: 4px;\n  --boxShadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);\n}\n.frame {\n  transform: none;\n  --topHeight: var(--headerHeight);\n  --blur: 0.3rem;\n  --opacity: 0.75;\n  background: var(--appBgColor);\n  color: var(--appColor);\n}\n.frame .frame-header {\n  backdrop-filter: blur(var(--blur));\n  background: rgba(var(--navBgRgb), var(--opacity));\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n.frame .frame-main {\n  margin: 0 auto;\n  max-width: var(--maxWidth);\n  padding-top: var(--topHeight);\n  box-shadow: var(--boxShadow);\n  z-index: 5;\n}\n.frame .frame-main .frame-container {\n  position: relative;\n}\n.frame .frame-main .frame-container .frame-aside {\n  position: fixed;\n  width: var(--menuWidth);\n  top: var(--topHeight);\n  bottom: 0;\n  z-index: 5;\n  background: var(--menuBgColor);\n  transform: translate3d(0, 0, 0);\n  transition: width 0.3s;\n}\n.frame .frame-main .frame-container .frame-view {\n  padding-left: calc(var(--menuWidth));\n  transition: padding-left 0.3s;\n}\n.frame .frame-main .frame-container .frame-footer {\n  padding-left: calc(var(--menuWidth));\n  transition: padding-left 0.3s;\n  background: var(--panelBgColor);\n}\n.frame .frame-main .frame-container.no-sidebar .frame-view {\n  padding-left: 0;\n}\n.frame .frame-main .frame-container.no-sidebar .frame-footer {\n  padding-left: 0;\n  margin-left: calc(var(--maxWidth) / 2 - 50vw);\n  margin-right: calc(var(--maxWidth) / 2 - 50vw);\n}\n.frame.collapsed .frame-main .frame-container .frame-aside {\n  width: var(--collapseWidth);\n  transition: width 0.3s;\n}\n.frame.collapsed .frame-main .frame-container .frame-view {\n  padding-left: var(--collapseWidth);\n  transition: padding-left 0.3s;\n}\n.frame.collapsed .frame-main .frame-container .frame-footer {\n  padding-left: calc(var(--collapseWidth));\n  transition: padding-left 0.3s;\n}\n.frame.horizontal {\n  --topHeight: calc(var(--headerHeight) + var(--menuItemHeight));\n}\n.frame.detached {\n  --frame-spacing: 0.8vw;\n  --frame-radius: 4px;\n}\n/*\n@media screen and (max-width:@maxWidth){\n  .frame {\n    .frame-main {\n      .frame-container {\n        .frame-aside {\n          left: 0;\n        }\n      }\n    }\n  }\n}*/\n/*@media screen and (max-width: env(--viewport-1)) {\n  .frame {\n    .frame-main {\n      .frame-container {\n        .frame-aside {\n          // left: 0;\n        }\n      }\n    }\n  }\n}*/\n@media screen and (max-width: 1024px) {\n  .frame .frame-main .frame-container .frame-aside {\n    width: 0;\n  }\n  .frame .frame-main .frame-container .frame-view {\n    padding-left: 0;\n  }\n  .frame .frame-main .frame-container .frame-footer {\n    padding-left: 0;\n  }\n  .frame.collapsed .frame-main .frame-container .frame-aside {\n    width: var(--menuWidth);\n    backdrop-filter: blur(var(--blur));\n    background: rgba(var(--menuBgRgb), var(--opacity));\n  }\n  .frame.collapsed .frame-main .frame-container .frame-view {\n    padding-left: 0;\n  }\n  .frame.collapsed .frame-main .frame-container .frame-footer {\n    padding-left: 0;\n  }\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".clear {\n  zoom: 1;\n}\n.clear::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n@keyframes huxy-header-animate-top-in {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translate3d(0, -30px, 0);\n  }\n  100% {\n    opacity: 0.98;\n    visibility: visible;\n    transform: translate3d(0, 2px, 0);\n  }\n}\n.huxy-header-angle-top {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n}\n.huxy-header-angle-top::before,\n.huxy-header-angle-top::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-header-angle-top::before {\n  left: 0;\n}\n.huxy-header-angle-top::after {\n  left: calc(1px * 0.7);\n}\n.huxy-header-angle-top::before,\n.huxy-header-angle-top::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-header-angle-top::before {\n  transform: rotate(225deg);\n}\n.huxy-header-angle-top::after {\n  transform: rotate(-45deg);\n}\n.huxy-header-angle-bt {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n}\n.huxy-header-angle-bt::before,\n.huxy-header-angle-bt::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-header-angle-bt::before {\n  left: 0;\n}\n.huxy-header-angle-bt::after {\n  left: calc(1px * 0.7);\n}\n.huxy-header-angle-bt::before,\n.huxy-header-angle-bt::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-header-angle-bt::before {\n  transform: rotate(135deg);\n}\n.huxy-header-angle-bt::after {\n  transform: rotate(45deg);\n}\n.huxy-header-arrow-lt {\n  position: relative;\n  background: var(--navBgColor);\n  border: 1px solid var(--borderColor);\n  right: auto;\n  left: 0;\n  z-index: 100000;\n}\n.huxy-header-arrow-lt::before,\n.huxy-header-arrow-lt::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-header-arrow-lt::before {\n  border-width: 8px;\n}\n.huxy-header-arrow-lt::after {\n  border-width: 7px;\n}\n.huxy-header-arrow-lt::before,\n.huxy-header-arrow-lt::after {\n  top: auto;\n  bottom: 100%;\n}\n.huxy-header-arrow-lt::before {\n  left: 16px;\n  border-bottom-color: var(--borderColor);\n}\n.huxy-header-arrow-lt::after {\n  left: calc(16px + 1px);\n  border-bottom-color: var(--navBgColor);\n}\n.huxy-header-arrow-rt {\n  position: relative;\n  background: var(--navBgColor);\n  border: 1px solid var(--borderColor);\n  right: 0;\n  left: auto;\n  z-index: 100000;\n}\n.huxy-header-arrow-rt::before,\n.huxy-header-arrow-rt::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-header-arrow-rt::before {\n  border-width: 8px;\n}\n.huxy-header-arrow-rt::after {\n  border-width: 7px;\n}\n.huxy-header-arrow-rt::before,\n.huxy-header-arrow-rt::after {\n  left: auto;\n  top: auto;\n  bottom: 100%;\n}\n.huxy-header-arrow-rt::before {\n  right: 16px;\n  border-bottom-color: var(--borderColor);\n}\n.huxy-header-arrow-rt::after {\n  right: calc(16px + 1px);\n  border-bottom-color: var(--navBgColor);\n}\n.header {\n  --subMenuItemHeight: 40px;\n  max-width: var(--maxWidth);\n  height: var(--headerHeight);\n  line-height: var(--headerHeight);\n  margin: 0 auto;\n  position: relative;\n}\n.header .banner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--menuWidth);\n  background: var(--bannerBgColor);\n  z-index: 1;\n  height: 100%;\n  padding-left: 15px;\n  padding-right: 10px;\n  display: flex;\n  transition: width 0.3s;\n}\n.header .banner .logo {\n  height: 100%;\n  font-size: 0;\n}\n.header .banner .logo > img {\n  height: 55%;\n  width: auto;\n}\n.header .banner .title {\n  padding-left: 5px;\n  font-size: 1.6rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.header .nav {\n  padding-left: var(--menuWidth);\n  transition: padding-left 0.3s;\n}\n.header .nav .nav-wrap {\n  padding: 0 10px;\n  position: relative;\n  display: flex;\n  zoom: 1;\n}\n.header .nav .nav-wrap::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.header .nav .nav-wrap .nav-left > ul,\n.header .nav .nav-wrap .nav-right > ul {\n  margin: 0;\n  zoom: 1;\n}\n.header .nav .nav-wrap .nav-left > ul::after,\n.header .nav .nav-wrap .nav-right > ul::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.header .nav .nav-wrap .nav-left > ul > li,\n.header .nav .nav-wrap .nav-right > ul > li {\n  position: relative;\n  user-select: none;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link,\n.header .nav .nav-wrap .nav-right > ul > li > .link {\n  height: var(--headerHeight);\n  display: block;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 12px;\n  position: relative;\n  transition: color 0.3s;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link::before,\n.header .nav .nav-wrap .nav-right > ul > li > .link::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: calc(50% - 10px);\n  height: 20px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .avatar,\n.header .nav .nav-wrap .nav-right > ul > li > .link .avatar {\n  font-size: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img,\n.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img {\n  height: 48%;\n  max-height: 46px;\n  border-radius: 100%;\n  background-color: #f0f0f0f0;\n  padding: 2px;\n  position: relative;\n  transform-origin: 50% 50%;\n  transform: rotate(-42deg);\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img::after,\n.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img::after {\n  content: \"\";\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 100%;\n  bottom: -3px;\n  left: calc(50% - 2px);\n  background-color: #21d86e;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img img,\n.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img img {\n  height: 100%;\n  width: auto;\n  border-radius: 100%;\n  display: block;\n  transform-origin: 50% 50%;\n  transform: rotate(42deg);\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .icon,\n.header .nav .nav-wrap .nav-right > ul > li > .link .icon {\n  font-size: 0;\n  height: 100%;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .icon img,\n.header .nav .nav-wrap .nav-right > ul > li > .link .icon img {\n  height: 25%;\n  width: auto;\n  max-height: 24px;\n  min-height: 16px;\n  filter: grayscale(0.1);\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon,\n.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon,\n.header .nav .nav-wrap .nav-left > ul > li > .link .img,\n.header .nav .nav-wrap .nav-right > ul > li > .link .img {\n  height: 100%;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon + .txt,\n.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon + .txt,\n.header .nav .nav-wrap .nav-left > ul > li > .link .img + .txt,\n.header .nav .nav-wrap .nav-right > ul > li > .link .img + .txt {\n  margin-left: 10px;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon > *,\n.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon > *,\n.header .nav .nav-wrap .nav-left > ul > li > .link .img > *,\n.header .nav .nav-wrap .nav-right > ul > li > .link .img > * {\n  font-size: 1.6rem;\n  vertical-align: middle;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .txt,\n.header .nav .nav-wrap .nav-right > ul > li > .link .txt {\n  display: inline-block;\n  font-size: 1.3rem;\n}\n.header .nav .nav-wrap .nav-left > ul > li > .link .txt + .node-icon,\n.header .nav .nav-wrap .nav-right > ul > li > .link .txt + .node-icon {\n  margin-left: 10px;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul,\n.header .nav .nav-wrap .nav-right > ul > li ul {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 135px;\n  box-shadow: 0 2px 6px var(--borderColor);\n  padding: 2px 0;\n  border-radius: 2px;\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li,\n.header .nav .nav-wrap .nav-right > ul > li ul > li {\n  user-select: none;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li.divider,\n.header .nav .nav-wrap .nav-right > ul > li ul > li.divider {\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid var(--borderColor);\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li .link,\n.header .nav .nav-wrap .nav-right > ul > li ul > li .link {\n  display: flex;\n  align-items: center;\n  height: var(--subMenuItemHeight);\n  line-height: var(--subMenuItemHeight);\n  cursor: pointer;\n  padding: 0 15px;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img,\n.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img {\n  font-size: 0;\n  height: 100%;\n  margin-right: 10px;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img img,\n.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img img {\n  height: 40%;\n  width: auto;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon,\n.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon {\n  display: inline-block;\n  height: 100%;\n  margin-right: 10px;\n  text-align: center;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li .link > .drop-label,\n.header .nav .nav-wrap .nav-right > ul > li ul > li .link > .drop-label {\n  display: inline-block;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li .link:hover,\n.header .nav .nav-wrap .nav-right > ul > li ul > li .link:hover {\n  background-color: #e6f7ff;\n  color: #666;\n}\n.header .nav .nav-wrap .nav-left > ul > li ul > li .link.active,\n.header .nav .nav-wrap .nav-right > ul > li ul > li .link.active {\n  background-color: #e6f7ff;\n  color: #666;\n}\n.header .nav .nav-wrap .nav-left > ul > li.open ul,\n.header .nav .nav-wrap .nav-right > ul > li.open ul {\n  display: block;\n  animation: huxy-header-animate-top-in 0.2s forwards;\n}\n.header .nav .nav-wrap .nav-left {\n  float: left;\n}\n.header .nav .nav-wrap .nav-left > ul {\n  float: left;\n}\n.header .nav .nav-wrap .nav-left > ul > li {\n  float: left;\n  /*> .link {\n              // border-left:1px solid rgba(0, 0, 0, 0.1);\n              &::before {\n                content: \"\";\n                position: absolute;\n                left: 0;\n                top: calc(@headerHeight / 2 - 10px);\n                height: 20px;\n                width: 1px;\n                background-color: rgba(0, 0, 0, 0.1);\n              }\n            }*/\n}\n.header .nav .nav-wrap .nav-right {\n  flex: 1;\n  float: right;\n}\n.header .nav .nav-wrap .nav-right > ul {\n  float: right;\n}\n.header .nav .nav-wrap .nav-right > ul > li {\n  float: right;\n}\n.collapsed .frame-header .header .banner {\n  width: var(--collapseWidth);\n  padding: 0;\n  justify-content: center;\n  transition: width 0.3s;\n}\n.collapsed .frame-header .header .banner .title {\n  display: none;\n}\n.collapsed .frame-header .header .nav {\n  padding-left: var(--collapseWidth);\n  transition: padding-left 0.3s;\n}\n@media screen and (max-width: 1024px) {\n  .header .banner {\n    display: none;\n  }\n  .header .nav {\n    padding-left: 0 !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header .nav {\n    padding-left: 0 !important;\n  }\n  .header .nav .nav-wrap .nav-left > ul > li:not(:first-child) {\n    display: none;\n  }\n  .header .nav .nav-wrap .nav-right > ul > li:not(:first-child) {\n    display: none;\n  }\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes ani-fade-in {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  1% {\n    opacity: 0;\n    display: block;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n@keyframes ani-fade-out {\n  0% {\n    opacity: 1;\n    display: block;\n  }\n  99% {\n    opacity: 0;\n    display: block;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n@keyframes ani-scale-in {\n  0% {\n    transform: scale(0);\n    display: none;\n  }\n  1% {\n    transform: scale(0);\n    display: block;\n  }\n  100% {\n    transform: scale(1);\n    display: block;\n  }\n}\n@keyframes ani-scale-out {\n  0% {\n    transform: scale(1);\n    display: block;\n  }\n  99% {\n    transform: scale(0);\n    display: block;\n  }\n  100% {\n    transform: scale(0);\n    display: none;\n  }\n}\n@keyframes ani-left-in {\n  0% {\n    opacity: 0;\n    transform: translate3d(-72px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes ani-left-out {\n  0% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(72px, 0, 0);\n  }\n}\n@keyframes ani-top-in {\n  0% {\n    opacity: 0.4;\n    transform: translate(0, -72px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n}\n.page-color {\n  /*a{\n    // color:@pageLinkColor;\n    color:@linkActiveColor;\n    &:active,&.active{\n      color:@linkActiveColor;\n    }\n    &:hover{\n      color:@linkHoverColor;\n    }\n  }*/\n}\n.page-color h1,\n.page-color h2,\n.page-color h3,\n.page-color h4,\n.page-color h5,\n.page-color h6,\n.page-color p {\n  color: var(--appColor);\n}\n.page-container {\n  min-height: calc(100vh - var(--footerHeight) - var(--topHeight));\n  position: relative;\n  background: var(--pageBgColor);\n}\n.page-container .page-content {\n  padding: var(--frame-spacing);\n  /*a{\n    // color:@pageLinkColor;\n    color:@linkActiveColor;\n    &:active,&.active{\n      color:@linkActiveColor;\n    }\n    &:hover{\n      color:@linkHoverColor;\n    }\n  }*/\n}\n.page-container .page-content.ani-in {\n  overflow: hidden;\n  animation: ani-left-in 0.5s forwards;\n}\n.page-container .page-content.ani-out {\n  overflow: hidden;\n  animation: ani-left-out 0.5s forwards;\n}\n.page-container .page-content h1,\n.page-container .page-content h2,\n.page-container .page-content h3,\n.page-container .page-content h4,\n.page-container .page-content h5,\n.page-container .page-content h6,\n.page-container .page-content p {\n  color: var(--appColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 414:
/***/ (function(module) {



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

/***/ 703:
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

/***/ 748:
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

/***/ 736:
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

/***/ 706:
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

/***/ 567:
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

/***/ 306:
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

/***/ 62:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ var utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ var utils_isElement = (isElement);

;// CONCATENATED MODULE: ../huxy/utils/getViewportSize.js


const getViewportSize = (element = null) => {
  var _a, _b;
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
    width: (_a = window.innerWidth) != null ? _a : document.documentElement.clientWidth,
    height: (_b = window.innerHeight) != null ? _b : document.documentElement.clientHeight
  };
};
/* harmony default export */ var utils_getViewportSize = (getViewportSize);

;// CONCATENATED MODULE: ../huxy/use/useRaf/index.jsx

const useRaf = (initState = {}) => {
  const frame = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(0);
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const setRaf = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((value) => {
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
    window.addEventListener("resize", handler, false);
    return () => window.removeEventListener("resize", handler, false);
  }, []);
  return state;
};
/* harmony default export */ var use_useWinResize = (useWinResize);

;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ var utils_isArray = (isArray);

;// CONCATENATED MODULE: ../huxy/utils/getSelected.js

const getSelected = (arr, id, idKey = "id", childKey = "children") => {
  if (!utils_isArray(arr)) {
    return null;
  }
  const selected = (data) => {
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

;// CONCATENATED MODULE: ../huxy/use/useUpdate/index.jsx

const incrementParameter = (num) => ++num;
const useUpdate = () => {
  const [, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(0);
  return (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(() => setState(incrementParameter), []);
};
/* harmony default export */ var use_useUpdate = (useUpdate);

;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js

const isValidArr = (value) => utils_isArray(value) && !!value.length;
/* harmony default export */ var utils_isValidArr = (isValidArr);

;// CONCATENATED MODULE: ../huxy/components/renderTree/index.jsx


const DefLink = ({ item, to, preventDefault, stopPropagation, className, ...rest }) => preventDefault ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `link${className ? ` ${className}` : ""}`, ...rest }) : /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: to, className: `link${className ? ` ${className}` : ""}`, ...rest });
const DefList = ({ item, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { ...rest });
const fixEvents = (events, ...params) => {
  const newEvent = {};
  Object.keys(events).filter(Boolean).map((key) => {
    newEvent[key] = (e) => events[key](e, ...params);
  });
  return newEvent;
};
const render = ({ data = [], events = {}, List = DefList, Link = DefLink, leftIcon, rightIcon, collapsed, level = 0, parentOpen = true }) => data.map((item) => {
  const { name, path, icon, rightIcon: rIcon, active, open, children, linkProps } = item;
  const hasChildren = utils_isValidArr(children);
  const fixedEvents = fixEvents(events, item, level);
  const key = item.id || path || name;
  const li = icon != null ? icon : leftIcon;
  const ri = rIcon != null ? rIcon : rightIcon;
  const hidden = collapsed ? "" : parentOpen ? "" : "hidden";
  if (hasChildren) {
    const cls = [hidden, open ? "open" : ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("li", { className: cls, "has-children": "true", ...fixedEvents, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsxs)(Link, { item: { ...item, level }, className: active ? "active" : "", to: path, preventDefault: true, stopPropagation: false, ...linkProps, children: [
        li ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-left-icon", children: li === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: "default-left-icon" }) : li }) : null,
        name ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-text", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: name }) }) : null,
        ri ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-right-icon", children: ri === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: "default-right-icon" }) : ri }) : null
      ] }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(List, { item, children: render({ data: children, events, List, Link, leftIcon, rightIcon, collapsed, level: level + 1, parentOpen: !!open }) })
    ] }, key);
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: hidden, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Link, { item: { ...item, level }, className: active ? "active" : "", to: path, ...linkProps, children: [
    li ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-left-icon", children: li === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: "default-left-icon" }) : li }) : null,
    name ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-text", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: name }) }) : null
  ] }) }, key);
});
/* harmony default export */ var renderTree = (render);

;// CONCATENATED MODULE: ../huxy/components/tree/listRender.jsx

const getChildrenCount = (item) => {
  const { children, open } = item;
  let count = 0;
  if (open && (children == null ? void 0 : children.length)) {
    count = children.length;
    let childrenCount = 0;
    children.map((child) => childrenCount += getChildrenCount(child));
    return count + childrenCount;
  }
  return count;
};
const ListRender = ({ item, style, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { style: { ...style, "--count": getChildrenCount(item) }, ...rest });
/* harmony default export */ var listRender = (ListRender);

// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(748);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(306);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(736);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(567);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(706);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(62);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/components/tree/index.less
var tree = __webpack_require__(435);
;// CONCATENATED MODULE: ../huxy/components/tree/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tree/* default */.Z, options);




       /* harmony default export */ var components_tree = (tree/* default */.Z && tree/* default.locals */.Z.locals ? tree/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/components/tree/index.jsx







const ListContauner = (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { ...props });
const getList = (isNormal, float) => isNormal ? ({ item, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(ListContauner, { className: float === "right" ? "left" : "", ...rest }) : listRender;
const Tree = (props) => {
  var _a;
  const {
    data = [],
    collapsed = false,
    type = "vertical",
    Link,
    width,
    bgColor,
    itemHeight,
    collapsedWidth,
    itemPadding,
    style,
    className,
    ...rest
  } = props;
  const timer = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const menuRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => clearTimeout(timer.current), []);
  const rerender = use_useUpdate();
  const isHorizontal = type === "horizontal";
  const isCollapsed = !isHorizontal && collapsed;
  const events = {
    onClick: (e, item) => {
      e.stopPropagation();
      if (!isHorizontal && !isCollapsed) {
        const selecteds = utils_getSelected(data, item.path, "path");
        const targetItem = selecteds[selecteds.length - 1];
        targetItem.open = !targetItem.open;
        rerender();
      }
    },
    onMouseEnter: (e, item, level) => {
      if (isCollapsed && !level) {
        clearTimeout(timer.current);
        menuRef.current.style.width = "var(--maxWidth)";
      }
    },
    onMouseLeave: (e, item, level) => {
      if (isCollapsed && !level) {
        timer.current = setTimeout(() => menuRef.current.style.width = "", 200);
      }
    }
  };
  const cls = (isHorizontal ? ["huxy-horizontal-tree", className] : ["huxy-tree", className, isCollapsed ? "collapsed" : ""]).filter(Boolean).join(" ");
  const { float, ...restStyle } = (_a = rest == null ? void 0 : rest.style) != null ? _a : {};
  const treeStyles = {
    "--bgColor": bgColor,
    "--itemHeight": itemHeight,
    "--nodeListWidth": width,
    ...restStyle
  };
  if (type === "horizontal") {
    treeStyles["--itemPadding"] = itemPadding;
    treeStyles["--nodeFloat"] = float;
  } else {
    treeStyles["--width"] = width;
    treeStyles["--collapsedWidth"] = collapsedWidth;
  }
  const List = getList(isHorizontal || isCollapsed, float);
  const TreeLink = ({ item, className: className2, ...rest2 }) => isCollapsed && !item.level ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Link, { className: `link${className2 ? ` ${className2}` : ""}`, ...rest2, title: item.title || item.name }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Link, { className: `link${className2 ? ` ${className2}` : ""}`, ...rest2 });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ref: menuRef, className: cls, style: treeStyles, ...rest, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-tree-track", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "huxy-tree-root", children: renderTree({ data, events, List, Link: TreeLink, leftIcon: true, rightIcon: true, collapsed: isCollapsed }) }) }) });
};
/* harmony default export */ var huxy_components_tree = (Tree);

;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ var utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ var utils_isRef = (isRef);

;// CONCATENATED MODULE: ../huxy/use/useClickAway/index.jsx


const useClickAway = (elRef, handleEvent, events = "click") => {
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = (event) => {
      const el = utils_isRef(elRef) ? elRef.current : elRef;
      if ((el == null ? void 0 : el.contains) && !el.contains(event.target)) {
        handleEvent(event);
      }
    };
    const evts = typeof events === "string" ? [events] : events;
    evts.map((evt) => {
      document.addEventListener(evt, handler, false);
    });
    return () => {
      evts.map((evt) => {
        document.removeEventListener(evt, handler, false);
      });
    };
  }, [elRef, handleEvent, events]);
};
/* harmony default export */ var use_useClickAway = (useClickAway);

;// CONCATENATED MODULE: ../huxy/layout/header/navList.jsx



const RIco = ({ Ricon, open }) => Ricon === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: `huxy-header-angle-${open ? "top" : "bt"}` }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Ricon, { status: open });
const ItemEl = ({ img, name, icon, Ricon, open }) => img ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "avatar", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "img", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("img", { src: img, width: "1", height: "1", crossOrigin: "anonymous", alt: "avatar" }) }),
  name ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "txt", children: name }) : null,
  Ricon ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "node-icon", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RIco, { Ricon, open }) }) : null
] }) : /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
  icon ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "node-icon", children: icon }) : null,
  name ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "txt", children: name }) : null,
  Ricon ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "node-icon", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RIco, { Ricon, open }) }) : null
] });
const ItemWrap = ({ item, open }) => {
  const { Custom, img, name, icon, Ricon, active } = item;
  return typeof Custom === "function" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Custom, { item, className: "link" }) : /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `link${active ? " active" : ""}`, title: item.title || name, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ItemEl, { img, name, icon, Ricon, open }) });
};
const NavItem = ({ item, click }) => {
  const navRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const [open, setOpen] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(false);
  use_useClickAway(navRef, (e) => open && setOpen(false));
  const { arrowDir, ChildRender, children } = item;
  const hasChildren = children == null ? void 0 : children.length;
  const itemClick = (e, item2, isChild = null) => {
    if (isChild === false) {
      setOpen((prev) => !prev);
    }
    if (isChild) {
      e.stopPropagation();
      setOpen(false);
    }
    click(item2, isChild);
  };
  return hasChildren || ChildRender ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("li", { ref: navRef, className: open ? "open" : "", onClick: (e) => itemClick(e, item, false), children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(ItemWrap, { item, open }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: `huxy-header-arrow-${arrowDir || "rt"}`, children: hasChildren ? children.map((v, k) => /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: v.divider ? "divider" : "", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("span", { onClick: (e) => itemClick(e, v, true), className: `link${v.active ? " active" : ""}`, children: [
      v.icon ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "node-icon", children: v.icon }) : null,
      /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "drop-label", children: v.name })
    ] }) }, `subItem-${k}-${v.key || v.name}`)) : /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ChildRender, { item }) }) })
  ] }) : /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { onClick: (e) => itemClick(e, item), children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ItemWrap, { item, open }) });
};
const NavList = ({ list, click }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { children: list.map((v, k) => /* @__PURE__ */ (0,jsx_runtime.jsx)(NavItem, { click, item: v }, `navItem-${k}-${v.key || v.name}`)) });
/* harmony default export */ var navList = (NavList);

// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/header/index.less
var header = __webpack_require__(916);
;// CONCATENATED MODULE: ../huxy/layout/header/index.less

      
      
      
      
      
      
      
      
      

var header_options = {};

header_options.styleTagTransform = (styleTagTransform_default());
header_options.setAttributes = (setAttributesWithoutAttributes_default());

      header_options.insert = insertBySelector_default().bind(null, "head");
    
header_options.domAPI = (styleDomAPI_default());
header_options.insertStyleElement = (insertStyleElement_default());

var header_update = injectStylesIntoStyleTag_default()(header/* default */.Z, header_options);




       /* harmony default export */ var layout_header = (header/* default */.Z && header/* default.locals */.Z.locals ? header/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/layout/header/index.jsx



const Header = (props) => {
  const { leftList, rightList, handleNavClick, logo, title, Link } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "header", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(Link, { className: "banner", to: "/", children: [
      logo ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "logo", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("img", { width: "1", height: "1", src: logo, alt: "logo" }) }) : null,
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "title", children: title != null ? title : "Dashboard" })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "nav", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "nav-wrap", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "nav-left", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(navList, { list: leftList, click: (item) => handleNavClick(props, item) }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "nav-right", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(navList, { list: rightList, click: (item) => handleNavClick(props, item) }) })
    ] }) })
  ] });
};
/* harmony default export */ var huxy_layout_header = (Header);

// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/footer/index.less
var footer = __webpack_require__(232);
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


const FooterWrap = ({ Footer }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "footer", children: Footer ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Footer, {}) : "copyright \xA9 2020-2022" });
/* harmony default export */ var huxy_layout_footer = (FooterWrap);

;// CONCATENATED MODULE: ../huxy/layout/menu/index.jsx





const Menu = (props) => {
  const { useStore, menu, MenuTop, MenuBottom, menuStyle, Link, inputPath } = props;
  const [collapsed, setCollapsed] = useStore("huxy-collapse");
  const { width } = use_useWinResize();
  const menuRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  use_useClickAway(menuRef, (e) => {
    if (width <= 1024 && collapsed) {
      setCollapsed(false);
    }
  });
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (width <= 1024 && collapsed) {
      setCollapsed(false);
    }
  }, [inputPath]);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "menu", ref: menuRef, style: { ...menuStyle, height: "100%" }, children: [
    MenuTop && /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuTop, { ...props }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(huxy_components_tree, { data: menu, collapsed: collapsed && width > 1024, Link }),
    MenuBottom && width > 1024 && /* @__PURE__ */ (0,jsx_runtime.jsx)(MenuBottom, { collapsed, setCollapsed })
  ] });
};
/* harmony default export */ var layout_menu = (Menu);

// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/main/index.less
var main = __webpack_require__(41);
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





const DELAY = 450;
const Main = (props) => {
  var _a;
  const { menu, current, MainTop, asideStyle, contentStyle, children } = props;
  const curPath = (_a = current.slice(-1)[0]) == null ? void 0 : _a.path;
  const hasMenu = menu == null ? void 0 : menu.length;
  const pathRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(curPath);
  const timer = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const [aniCls, setAniCls] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)("");
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    var _a2;
    const curPath2 = (_a2 = current.slice(-1)[0]) == null ? void 0 : _a2.path;
    if (curPath2 !== pathRef.current) {
      pathRef.current = curPath2;
      setAniCls(" ani-in");
      timer.current = setTimeout(() => {
        setAniCls("");
      }, DELAY);
    }
    return () => {
      clearTimeout(timer.current);
      setAniCls("");
    };
  }, [current]);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: `frame-container${hasMenu ? "" : " no-sidebar"}`, children: [
    hasMenu ? /* @__PURE__ */ (0,jsx_runtime.jsx)("aside", { className: "frame-aside", style: asideStyle, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(layout_menu, { ...props, menu }) }) : null,
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "frame-view", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "page-container", children: [
      MainTop && /* @__PURE__ */ (0,jsx_runtime.jsx)(MainTop, { current }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `page-content${aniCls}`, style: contentStyle, children })
    ] }) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("footer", { className: "frame-footer", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(huxy_layout_footer, { ...props }) })
  ] });
};
/* harmony default export */ var huxy_layout_main = (Main);

// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/layout/frame/index.less
var layout_frame = __webpack_require__(705);
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







const Frame = (props) => {
  const { useStore, vertical, horizontal, menu, headerStyle, navMenuStyle, Link, language } = props;
  const memoHeader = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useMemo)(() => /* @__PURE__ */ (0,jsx_runtime.jsx)(huxy_layout_header, { ...props }), [language]);
  const { width } = use_useWinResize();
  const [collapsed] = useStore("huxy-collapse");
  const isSmallScreen = width <= 1024;
  const sideMenu = isSmallScreen ? menu : vertical;
  const navMenu = isSmallScreen ? [] : horizontal;
  const horizontalCls = navMenu.length ? "horizontal" : "";
  const collapsedCls = collapsed && !horizontalCls ? "collapsed" : "";
  const classes = ["frame", horizontalCls, collapsedCls].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: classes, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("header", { className: "frame-header", style: headerStyle, children: [
      memoHeader,
      (navMenu == null ? void 0 : navMenu.length) ? /* @__PURE__ */ (0,jsx_runtime.jsx)(huxy_components_tree, { data: navMenu, type: "horizontal", Link, style: navMenuStyle }) : null
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("main", { className: "frame-main", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(huxy_layout_main, { ...props, menu: sideMenu }) })
  ] });
};
/* harmony default export */ var huxy_layout_frame_0 = (Frame);

;// CONCATENATED MODULE: ../huxy/layout/index.js


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});