(function(ne,L){typeof exports=="object"&&typeof module=="object"?module.exports=L(require("react")):typeof define=="function"&&define.amd?define("layout",["react"],L):typeof exports=="object"?exports.layout=L(require("react")):ne.layout=L(ne.React)})(this,function(ce){return function(){"use strict";var ne={435:function(e,r,t){var f=t(703),c=t.n(f),o=t(414),h=t.n(o),a=h()(c());a.push([e.id,`.node-right-icon-close {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-close .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-close .default-right-icon::before {
  left: 0;
}
.node-right-icon-close .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.node-right-icon-close .default-right-icon::before {
  transform: rotate(135deg);
}
.node-right-icon-close .default-right-icon::after {
  transform: rotate(45deg);
}
.node-right-icon-open {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-open .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-open .default-right-icon::before {
  left: 0;
}
.node-right-icon-open .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.node-right-icon-open .default-right-icon::before {
  transform: rotate(225deg);
}
.node-right-icon-open .default-right-icon::after {
  transform: rotate(-45deg);
}
.hide-scrollbar {
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.huxy-tree {
  --topBar: 0px;
  --downBar: var(--footerHeight, 0);
  --width: var(--menuWidth, 100%);
  --bgColor: var(--menuBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --trackWidth: 15px;
  --collapsedWidth: var(--collapseWidth, 60px);
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  height: calc(100% - var(--topBar) - var(--downBar));
  overflow: hidden;
}
.huxy-tree .huxy-tree-track {
  width: calc(100% + var(--trackWidth));
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: calc(100% - var(--trackWidth));
  min-height: 100%;
  padding: var(--ulPadding);
  margin: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > a {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > a {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > a {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > a {
  padding-left: 70px;
  font-size: 0.9rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: hidden;
  transition: max-height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  border-radius: 2px;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  width: var(--collapsedWidth);
  font-size: 1.6rem;
}
.huxy-horizontal-tree {
  --bgColor: var(--navBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --itemPadding: 8px;
  --nodeFloat: auto;
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  border-top: 1px solid var(--treeBorderColor);
  float: var(--nodeFloat);
}
.huxy-horizontal-tree .huxy-tree-track {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {
  float: var(--nodeFloat);
  width: max-content;
  padding: 0 10px;
  margin: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  right: auto;
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  left: auto;
  right: var(--ulPosition);
  position: absolute;
  transform-origin: 100% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  right: auto;
  left: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  top: var(--arrowPosition);
  border-left-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  top: calc(var(--arrowPosition) + 1px);
  border-left-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: 0 var(--itemPadding);
  z-index: 10001;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: var(--ulPosition);
  left: 0;
  transform-origin: 50% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  border-width: 8px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  border-width: 7px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  left: 16px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  left: auto;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  right: 10px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
`,""]),a.locals={},r.Z=a},232:function(e,r,t){var f=t(703),c=t.n(f),o=t(414),h=t.n(o),a=h()(c());a.push([e.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),a.locals={},r.Z=a},705:function(e,r,t){var f=t(703),c=t.n(f),o=t(414),h=t.n(o),a=h()(c());a.push([e.id,`.frame-color h1,
.frame-color h2,
.frame-color h3,
.frame-color h4,
.frame-color h5,
.frame-color h6,
.frame-color p {
  color: var(--linkColor);
}
.frame-color a {
  color: var(--linkColor);
}
.frame-color a:active,
.frame-color a.active {
  color: var(--linkActiveColor);
}
.frame-color a:hover {
  color: var(--linkHoverColor);
}
:root {
  --frame-spacing: 1vw;
  --frame-radius: 4px;
  --boxShadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
}
.frame {
  transform: none;
  --topHeight: var(--headerHeight);
  --blur: 0.3rem;
  --opacity: 0.75;
  background: var(--appBgColor);
  color: var(--appColor);
}
.frame .frame-header {
  backdrop-filter: blur(var(--blur));
  background: rgba(var(--navBgRgb), var(--opacity));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.frame .frame-header h1,
.frame .frame-header h2,
.frame .frame-header h3,
.frame .frame-header h4,
.frame .frame-header h5,
.frame .frame-header h6,
.frame .frame-header p {
  color: var(--linkColor);
}
.frame .frame-header a {
  color: var(--linkColor);
}
.frame .frame-header a:active,
.frame .frame-header a.active {
  color: var(--linkActiveColor);
}
.frame .frame-header a:hover {
  color: var(--linkHoverColor);
}
.frame .frame-main {
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding-top: var(--topHeight);
  box-shadow: var(--boxShadow);
  z-index: 5;
}
.frame .frame-main .frame-container {
  position: relative;
}
.frame .frame-main .frame-container .frame-aside {
  position: fixed;
  width: var(--menuWidth);
  top: var(--topHeight);
  bottom: 0;
  z-index: 5;
  background: var(--menuBgColor);
  transform: translate3d(0, 0, 0);
  transition: width 0.3s;
}
.frame .frame-main .frame-container .frame-aside h1,
.frame .frame-main .frame-container .frame-aside h2,
.frame .frame-main .frame-container .frame-aside h3,
.frame .frame-main .frame-container .frame-aside h4,
.frame .frame-main .frame-container .frame-aside h5,
.frame .frame-main .frame-container .frame-aside h6,
.frame .frame-main .frame-container .frame-aside p {
  color: var(--linkColor);
}
.frame .frame-main .frame-container .frame-aside a {
  color: var(--linkColor);
}
.frame .frame-main .frame-container .frame-aside a:active,
.frame .frame-main .frame-container .frame-aside a.active {
  color: var(--linkActiveColor);
}
.frame .frame-main .frame-container .frame-aside a:hover {
  color: var(--linkHoverColor);
}
.frame .frame-main .frame-container .frame-view {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
}
.frame .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
  background: var(--panelBgColor);
}
.frame .frame-main .frame-container.no-sidebar .frame-view {
  padding-left: 0;
}
.frame .frame-main .frame-container.no-sidebar .frame-footer {
  padding-left: 0;
  margin-left: calc(var(--maxWidth) / 2 - 50vw);
  margin-right: calc(var(--maxWidth) / 2 - 50vw);
}
.frame.collapsed .frame-main .frame-container .frame-aside {
  width: var(--collapseWidth);
  transition: width 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-view {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--collapseWidth));
  transition: padding-left 0.3s;
}
.frame.horizontal {
  --topHeight: calc(var(--headerHeight) + var(--menuItemHeight));
}
.frame.detached {
  --frame-spacing: 0.8vw;
  --frame-radius: 4px;
}
/*
@media screen and (max-width:@maxWidth){
  .frame {
    .frame-main {
      .frame-container {
        .frame-aside {
          left: 0;
        }
      }
    }
  }
}*/
/*@media screen and (max-width: env(--viewport-1)) {
  .frame {
    .frame-main {
      .frame-container {
        .frame-aside {
          // left: 0;
        }
      }
    }
  }
}*/
@media screen and (max-width: 1024px) {
  .frame .frame-main .frame-container .frame-aside {
    width: 0;
  }
  .frame .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-aside {
    width: var(--menuWidth);
    backdrop-filter: blur(var(--blur));
    background: rgba(var(--menuBgRgb), var(--opacity));
  }
  .frame.collapsed .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
}
`,""]),a.locals={},r.Z=a},916:function(e,r,t){var f=t(703),c=t.n(f),o=t(414),h=t.n(o),a=h()(c());a.push([e.id,`.clear {
  zoom: 1;
}
.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
@keyframes huxy-header-animate-top-in {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, -30px, 0);
  }
  100% {
    opacity: 0.98;
    visibility: visible;
    transform: translate3d(0, 2px, 0);
  }
}
.huxy-header-angle-top {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-top::before {
  left: 0;
}
.huxy-header-angle-top::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  top: calc(50% - var(--pos));
}
.huxy-header-angle-top::before {
  transform: rotate(225deg);
}
.huxy-header-angle-top::after {
  transform: rotate(-45deg);
}
.huxy-header-angle-bt {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-bt::before {
  left: 0;
}
.huxy-header-angle-bt::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  top: calc(50% + var(--pos));
}
.huxy-header-angle-bt::before {
  transform: rotate(135deg);
}
.huxy-header-angle-bt::after {
  transform: rotate(45deg);
}
.huxy-header-arrow-lt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: auto;
  left: 0;
  z-index: 100000;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-lt::before {
  border-width: 8px;
}
.huxy-header-arrow-lt::after {
  border-width: 7px;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-lt::before {
  left: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-lt::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.huxy-header-arrow-rt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: 0;
  left: auto;
  z-index: 100000;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-rt::before {
  border-width: 8px;
}
.huxy-header-arrow-rt::after {
  border-width: 7px;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-rt::before {
  right: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-rt::after {
  right: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.header {
  --subMenuItemHeight: 40px;
  max-width: var(--maxWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  margin: 0 auto;
  position: relative;
}
.header .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--menuWidth);
  background: var(--bannerBgColor);
  z-index: 1;
  height: 100%;
  padding-left: 15px;
  padding-right: 10px;
  display: flex;
  transition: width 0.3s;
}
.header .banner .logo {
  height: 100%;
  font-size: 0;
}
.header .banner .logo > img {
  height: 55%;
}
.header .banner .title {
  padding-left: 5px;
  font-size: 1.6rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .nav {
  padding-left: var(--menuWidth);
  transition: padding-left 0.3s;
}
.header .nav .nav-wrap {
  padding: 0 10px;
  position: relative;
  display: flex;
  zoom: 1;
}
.header .nav .nav-wrap::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul,
.header .nav .nav-wrap .nav-right > ul {
  margin: 0;
  zoom: 1;
}
.header .nav .nav-wrap .nav-left > ul::after,
.header .nav .nav-wrap .nav-right > ul::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul > li,
.header .nav .nav-wrap .nav-right > ul > li {
  position: relative;
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li > a,
.header .nav .nav-wrap .nav-right > ul > li > a {
  height: var(--headerHeight);
  display: block;
  text-align: center;
  cursor: pointer;
  padding: 0 12px;
  position: relative;
  transition: color 0.3s;
}
.header .nav .nav-wrap .nav-left > ul > li > a::before,
.header .nav .nav-wrap .nav-right > ul > li > a::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar {
  font-size: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img {
  height: 48%;
  max-height: 46px;
  border-radius: 100%;
  background-color: #f0f0f0f0;
  padding: 2px;
  position: relative;
  transform-origin: 50% 50%;
  transform: rotate(-42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img::after,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  bottom: -3px;
  left: calc(50% - 2px);
  background-color: #21d86e;
}
.header .nav .nav-wrap .nav-left > ul > li > a .avatar .img img,
.header .nav .nav-wrap .nav-right > ul > li > a .avatar .img img {
  height: 100%;
  border-radius: 100%;
  display: block;
  transform-origin: 50% 50%;
  transform: rotate(42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > a .icon,
.header .nav .nav-wrap .nav-right > ul > li > a .icon {
  font-size: 0;
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > a .icon img,
.header .nav .nav-wrap .nav-right > ul > li > a .icon img {
  height: 25%;
  max-height: 24px;
  min-height: 16px;
  filter: grayscale(0.1);
}
.header .nav .nav-wrap .nav-left > ul > li > a .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > a .node-icon,
.header .nav .nav-wrap .nav-left > ul > li > a .img,
.header .nav .nav-wrap .nav-right > ul > li > a .img {
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > a .node-icon + .txt,
.header .nav .nav-wrap .nav-right > ul > li > a .node-icon + .txt,
.header .nav .nav-wrap .nav-left > ul > li > a .img + .txt,
.header .nav .nav-wrap .nav-right > ul > li > a .img + .txt {
  margin-left: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li > a .node-icon > *,
.header .nav .nav-wrap .nav-right > ul > li > a .node-icon > *,
.header .nav .nav-wrap .nav-left > ul > li > a .img > *,
.header .nav .nav-wrap .nav-right > ul > li > a .img > * {
  font-size: 1.6rem;
  vertical-align: middle;
}
.header .nav .nav-wrap .nav-left > ul > li > a .txt,
.header .nav .nav-wrap .nav-right > ul > li > a .txt {
  display: inline-block;
  font-size: 1.3rem;
}
.header .nav .nav-wrap .nav-left > ul > li > a .txt + .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > a .txt + .node-icon {
  margin-left: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li ul,
.header .nav .nav-wrap .nav-right > ul > li ul {
  position: absolute;
  top: 100%;
  right: 0;
  width: 135px;
  box-shadow: 0 2px 6px var(--borderColor);
  padding: 2px 0;
  border-radius: 2px;
  opacity: 0;
  visibility: hidden;
  display: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li,
.header .nav .nav-wrap .nav-right > ul > li ul > li {
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li.divider,
.header .nav .nav-wrap .nav-right > ul > li ul > li.divider {
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid var(--borderColor);
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a,
.header .nav .nav-wrap .nav-right > ul > li ul > li a {
  display: flex;
  align-items: center;
  height: var(--subMenuItemHeight);
  line-height: var(--subMenuItemHeight);
  cursor: pointer;
  padding: 0 15px;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a .img,
.header .nav .nav-wrap .nav-right > ul > li ul > li a .img {
  font-size: 0;
  height: 100%;
  margin-right: 10px;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a .img img,
.header .nav .nav-wrap .nav-right > ul > li ul > li a .img img {
  height: 40%;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a .node-icon,
.header .nav .nav-wrap .nav-right > ul > li ul > li a .node-icon {
  display: inline-block;
  height: 100%;
  margin-right: 10px;
  text-align: center;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a > .drop-label,
.header .nav .nav-wrap .nav-right > ul > li ul > li a > .drop-label {
  display: inline-block;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a:hover,
.header .nav .nav-wrap .nav-right > ul > li ul > li a:hover {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li a.active,
.header .nav .nav-wrap .nav-right > ul > li ul > li a.active {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li.open ul,
.header .nav .nav-wrap .nav-right > ul > li.open ul {
  display: block;
  animation: huxy-header-animate-top-in 0.2s forwards;
}
.header .nav .nav-wrap .nav-left {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul > li {
  float: left;
  /*>a{
              // border-left:1px solid rgba(0,0,0,.1);
              &::before{
                content:"";
                position:absolute;
                left:0;
                top:calc(@headerHeight / 2 - 10px);
                height:20px;
                width:1px;
                background-color:rgba(0,0,0,.1);
              }
            }*/
}
.header .nav .nav-wrap .nav-right {
  flex: 1;
  float: right;
}
.header .nav .nav-wrap .nav-right > ul {
  float: right;
}
.header .nav .nav-wrap .nav-right > ul > li {
  float: right;
}
.collapsed .frame-header .header .banner {
  width: var(--collapseWidth);
  padding: 0;
  justify-content: center;
  transition: width 0.3s;
}
.collapsed .frame-header .header .banner .title {
  display: none;
}
.collapsed .frame-header .header .nav {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
@media screen and (max-width: 1024px) {
  .header .banner {
    display: none;
  }
  .header .nav {
    padding-left: 0 !important;
  }
}
@media screen and (max-width: 768px) {
  .header .nav {
    padding-left: 0 !important;
  }
  .header .nav .nav-wrap .nav-left > ul > li:not(:first-child) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li:not(:first-child) {
    display: none;
  }
}
`,""]),a.locals={},r.Z=a},41:function(e,r,t){var f=t(703),c=t.n(f),o=t(414),h=t.n(o),a=h()(c());a.push([e.id,`@keyframes ani-fade-in {
  0% {
    opacity: 0;
    display: none;
  }
  1% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 1;
    display: block;
  }
}
@keyframes ani-fade-out {
  0% {
    opacity: 1;
    display: block;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes ani-scale-in {
  0% {
    transform: scale(0);
    display: none;
  }
  1% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(1);
    display: block;
  }
}
@keyframes ani-scale-out {
  0% {
    transform: scale(1);
    display: block;
  }
  99% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(0);
    display: none;
  }
}
@keyframes ani-left-in {
  0% {
    opacity: 0;
    transform: translate3d(-72px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ani-left-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(72px, 0, 0);
  }
}
@keyframes ani-top-in {
  0% {
    opacity: 0.4;
    transform: translate(0, -72px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.page-color {
  /*a{
    // color:@pageLinkColor;
    color:@linkActiveColor;
    &:active,&.active{
      color:@linkActiveColor;
    }
    &:hover{
      color:@linkHoverColor;
    }
  }*/
}
.page-color h1,
.page-color h2,
.page-color h3,
.page-color h4,
.page-color h5,
.page-color h6,
.page-color p {
  color: var(--appColor);
}
.page-container {
  min-height: calc(100vh - var(--footerHeight) - var(--topHeight));
  position: relative;
  background: var(--pageBgColor);
}
.page-container .page-content {
  padding: var(--frame-spacing);
  /*a{
    // color:@pageLinkColor;
    color:@linkActiveColor;
    &:active,&.active{
      color:@linkActiveColor;
    }
    &:hover{
      color:@linkHoverColor;
    }
  }*/
}
.page-container .page-content.ani-in {
  overflow: hidden;
  animation: ani-left-in 0.5s forwards;
}
.page-container .page-content.ani-out {
  overflow: hidden;
  animation: ani-left-out 0.5s forwards;
}
.page-container .page-content h1,
.page-container .page-content h2,
.page-container .page-content h3,
.page-container .page-content h4,
.page-container .page-content h5,
.page-container .page-content h6,
.page-container .page-content p {
  color: var(--appColor);
}
`,""]),a.locals={},r.Z=a},414:function(e){e.exports=function(r){var t=[];return t.toString=function(){return this.map(function(c){var o="",h=typeof c[5]!="undefined";return c[4]&&(o+="@supports (".concat(c[4],") {")),c[2]&&(o+="@media ".concat(c[2]," {")),h&&(o+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),o+=r(c),h&&(o+="}"),c[2]&&(o+="}"),c[4]&&(o+="}"),o}).join("")},t.i=function(c,o,h,a,E){typeof c=="string"&&(c=[[null,c,void 0]]);var k={};if(h)for(var v=0;v<this.length;v++){var w=this[v][0];w!=null&&(k[w]=!0)}for(var W=0;W<c.length;W++){var u=[].concat(c[W]);h&&k[u[0]]||(typeof E!="undefined"&&(typeof u[5]=="undefined"||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=E),o&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=o),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},703:function(e){e.exports=function(r){return r[1]}},53:function(e,r,t){var f=t(899),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,a=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function k(v,w,W){var u,M={},S=null,A=null;W!==void 0&&(S=""+W),w.key!==void 0&&(S=""+w.key),w.ref!==void 0&&(A=w.ref);for(u in w)h.call(w,u)&&!E.hasOwnProperty(u)&&(M[u]=w[u]);if(v&&v.defaultProps)for(u in w=v.defaultProps,w)M[u]===void 0&&(M[u]=w[u]);return{$$typeof:c,type:v,key:S,ref:A,props:M,_owner:a.current}}r.Fragment=o,r.jsx=k,r.jsxs=k},458:function(e,r,t){e.exports=t(53)},748:function(e){var r=[];function t(o){for(var h=-1,a=0;a<r.length;a++)if(r[a].identifier===o){h=a;break}return h}function f(o,h){for(var a={},E=[],k=0;k<o.length;k++){var v=o[k],w=h.base?v[0]+h.base:v[0],W=a[w]||0,u="".concat(w," ").concat(W);a[w]=W+1;var M=t(u),S={css:v[1],media:v[2],sourceMap:v[3],supports:v[4],layer:v[5]};if(M!==-1)r[M].references++,r[M].updater(S);else{var A=c(S,h);h.byIndex=k,r.splice(k,0,{identifier:u,updater:A,references:1})}E.push(u)}return E}function c(o,h){var a=h.domAPI(h);a.update(o);var E=function(v){if(v){if(v.css===o.css&&v.media===o.media&&v.sourceMap===o.sourceMap&&v.supports===o.supports&&v.layer===o.layer)return;a.update(o=v)}else a.remove()};return E}e.exports=function(o,h){h=h||{},o=o||[];var a=f(o,h);return function(k){k=k||[];for(var v=0;v<a.length;v++){var w=a[v],W=t(w);r[W].references--}for(var u=f(k,h),M=0;M<a.length;M++){var S=a[M],A=t(S);r[A].references===0&&(r[A].updater(),r.splice(A,1))}a=u}}},736:function(e){var r={};function t(c){if(typeof r[c]=="undefined"){var o=document.querySelector(c);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(h){o=null}r[c]=o}return r[c]}function f(c,o){var h=t(c);if(!h)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");h.appendChild(o)}e.exports=f},706:function(e){function r(t){var f=document.createElement("style");return t.setAttributes(f,t.attributes),t.insert(f,t.options),f}e.exports=r},567:function(e,r,t){function f(c){var o=t.nc;o&&c.setAttribute("nonce",o)}e.exports=f},306:function(e){function r(c,o,h){var a="";h.supports&&(a+="@supports (".concat(h.supports,") {")),h.media&&(a+="@media ".concat(h.media," {"));var E=typeof h.layer!="undefined";E&&(a+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),a+=h.css,E&&(a+="}"),h.media&&(a+="}"),h.supports&&(a+="}");var k=h.sourceMap;k&&typeof btoa!="undefined"&&(a+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),o.styleTagTransform(a,c,o.options)}function t(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)}function f(c){var o=c.insertStyleElement(c);return{update:function(a){r(o,c,a)},remove:function(){t(o)}}}e.exports=f},62:function(e){function r(t,f){if(f.styleSheet)f.styleSheet.cssText=t;else{for(;f.firstChild;)f.removeChild(f.firstChild);f.appendChild(document.createTextNode(t))}}e.exports=r},899:function(e){e.exports=ce}},L={};function g(e){var r=L[e];if(r!==void 0)return r.exports;var t=L[e]={id:e,exports:{}};return ne[e](t,t.exports,g),t.exports}(function(){g.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return g.d(r,{a:r}),r}})(),function(){g.d=function(e,r){for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){g.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){g.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){g.nc=void 0}();var he={};return function(){g.r(he),g.d(he,{default:function(){return $e}});var e=g(458),r=g(899),f=()=>![typeof window,typeof document].includes("undefined"),o=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),a=n=>o(n).indexOf("element")>-1,k=(n=null)=>{var i,l;return f()?a(n)?{width:n.clientWidth,height:n.clientHeight}:{width:(i=window.innerWidth)!=null?i:document.documentElement.clientWidth,height:(l=window.innerHeight)!=null?l:document.documentElement.clientHeight}:{width:0,height:0}},w=(n={})=>{const i=(0,r.useRef)(0),[l,s]=(0,r.useState)(n),d=(0,r.useCallback)(p=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>s(p))},[]);return(0,r.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[l,d]},u=()=>{const[n,i]=w(k());return(0,r.useEffect)(()=>{const l=()=>i(k());return window.addEventListener("resize",l,!1),()=>window.removeEventListener("resize",l,!1)},[]),n},S=n=>o(n)==="array",ge=(n,i,l="id",s="children")=>{if(!S(n))return null;const d=p=>{for(let y=0,m=p.length;y<m;y++){const _=p[y];if(_[l]===i)return[_];if(S(_[s])){const b=d(_[s]);if(b)return[_].concat(b)}}};return d(n)},ve=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),me=()=>{let n=ve();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const l=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),(i==="x"?l:l&3|8).toString(16)})};const _e=n=>++n;var be=()=>{const[,n]=(0,r.useState)(0);return(0,r.useCallback)(()=>n(_e),[])},ke=n=>S(n)&&!!n.length;const we=({item:n,to:i,preventDefault:l,stopPropagation:s,...d})=>(0,e.jsx)("a",{href:l?null:i,...d}),Ce=({item:n,...i})=>(0,e.jsx)("ul",{...i}),ze=(n,...i)=>{const l={};return Object.keys(n).filter(Boolean).map(s=>{l[s]=d=>n[s](d,...i)}),l},se=({data:n=[],events:i={},List:l=Ce,Link:s=we,leftIcon:d,rightIcon:p,level:y=0})=>n.map(m=>{const{name:_,path:b,icon:x,rightIcon:z,active:C,open:j,children:P,linkProps:I}=m,Q=ke(P),T=ze(i,m,y,Q),O=m.id||b||_,H=x!=null?x:d,q=z!=null?z:p;return Q?(0,e.jsxs)("li",{className:j?"open":"","has-children":"true",...T,children:[(0,e.jsxs)(s,{item:{...m,level:y},className:C?"active":"",to:b,preventDefault:!0,stopPropagation:!1,...I,children:[H?(0,e.jsx)("div",{className:"node-left-icon",children:H===!0?(0,e.jsx)("i",{className:"default-left-icon"}):H}):null,_?(0,e.jsx)("div",{className:"node-text",children:(0,e.jsx)("span",{children:_})}):null,q?(0,e.jsx)("div",{className:"node-right-icon",children:q===!0?(0,e.jsx)("i",{className:"default-right-icon"}):q}):null]}),(0,e.jsx)(l,{item:m,children:se({data:P,events:i,List:l,Link:s,leftIcon:d,rightIcon:p,level:y+1})})]},O):(0,e.jsx)("li",{...T,children:(0,e.jsxs)(s,{item:{...m,level:y},className:C?"active":"",to:b,...I,children:[H?(0,e.jsx)("div",{className:"node-left-icon",children:H===!0?(0,e.jsx)("i",{className:"default-left-icon"}):H}):null,_?(0,e.jsx)("div",{className:"node-text",children:(0,e.jsx)("span",{children:_})}):null]})},O)});var Ee=se,je=()=>{const n=(0,r.useRef)(!0);return n.current?(n.current=!1,!0):!1},Pe=({item:n,style:i,...l})=>{var s;const{uuid:d,open:p}=n,y=(0,r.useRef)(),m=(0,r.useRef)(),_=je(),[b,x]=(0,r.useState)("");return(0,r.useEffect)(()=>{const z=y.current,C=p?`${z.scrollHeight}px`:"0px";x(C)},[]),(0,r.useEffect)(()=>{if(_)return;const z=y.current,C=p?"0px":`${z.scrollHeight}px`;return x(C),m.current=setTimeout(()=>{const j=p?`${z.scrollHeight}px`:"0px";x(j)},5),()=>clearTimeout(m.current)},[p,(s=n.children)==null?void 0:s.length]),(0,r.useEffect)(()=>{d&&x("")},[d]),(0,e.jsx)("ul",{ref:y,style:{...i,maxHeight:b},...l})},Me=g(748),$=g.n(Me),We=g(306),V=g.n(We),Se=g(736),X=g.n(Se),Ie=g(567),Y=g.n(Ie),Ae=g(706),J=g.n(Ae),Te=g(62),G=g.n(Te),re=g(435),D={};D.styleTagTransform=G(),D.setAttributes=Y(),D.insert=X().bind(null,"head"),D.domAPI=V(),D.insertStyleElement=J();var rn=$()(re.Z,D),tn=re.Z&&re.Z.locals?re.Z.locals:void 0;const Oe=n=>(0,e.jsx)("ul",{...n}),He=(n,i)=>n?({item:l,...s})=>(0,e.jsx)(Oe,{className:i==="right"?"left":"",...s}):Pe;var de=n=>{var i;const{data:l=[],collapsed:s=!1,type:d="vertical",Link:p,width:y,bgColor:m,itemHeight:_,collapsedWidth:b,itemPadding:x,style:z,className:C,...j}=n,P=(0,r.useRef)(),I=(0,r.useRef)();(0,r.useEffect)(()=>()=>clearTimeout(P.current),[]);const Q=be(),T=d==="horizontal",O=!T&&s,H={onClick:(N,B)=>{N.stopPropagation(),!T&&!O&&(ge(l,B.path,"path").map(R=>R.path===B.path?R.open=!R.open:R.uuid=me()),Q())},onMouseEnter:(N,B,le,R)=>{O&&!le&&R&&(clearTimeout(P.current),I.current.style.width="var(--maxWidth)")},onMouseLeave:(N,B,le,R)=>{O&&!le&&R&&(P.current=setTimeout(()=>I.current.style.width="",200))}},q=(T?["huxy-horizontal-tree",C]:["huxy-tree",C,O?"collapsed":""]).filter(Boolean).join(" "),{float:ye,...Ve}=(i=j==null?void 0:j.style)!=null?i:{},ee={"--bgColor":m,"--itemHeight":_,"--nodeListWidth":y,...Ve};d==="horizontal"?(ee["--itemPadding"]=x,ee["--nodeFloat"]=ye):(ee["--width"]=y,ee["--collapsedWidth"]=b);const Xe=He(T||O,ye),Ye=({item:N,...B})=>O&&!N.level?(0,e.jsx)(p,{...B,title:N.title||N.name}):(0,e.jsx)(p,{...B});return(0,e.jsx)("div",{ref:I,className:q,style:ee,...j,children:(0,e.jsx)("div",{className:"huxy-tree-track",children:(0,e.jsx)("ul",{className:"huxy-tree-root",children:Ee({data:l,events:H,List:Xe,Link:Ye,leftIcon:!0,rightIcon:!0})})})})},Re=(n,i)=>Object.prototype.hasOwnProperty.call(n!=null?n:{},i),Le=n=>Re(n,"current"),ue=(n,i,l="click")=>{(0,r.useEffect)(()=>{const s=p=>{const y=Le(n)?n.current:n;(y==null?void 0:y.contains)&&!y.contains(p.target)&&i(p)},d=typeof l=="string"?[l]:l;return d.map(p=>{document.addEventListener(p,s,!1)}),()=>{d.map(p=>{document.removeEventListener(p,s,!1)})}},[n,i,l])};const fe=({Ricon:n,open:i})=>n===!0?(0,e.jsx)("i",{className:`huxy-header-angle-${i?"top":"bt"}`}):(0,e.jsx)(n,{status:i}),Ne=({img:n,name:i,icon:l,Ricon:s,open:d})=>n?(0,e.jsxs)("div",{className:"avatar",children:[(0,e.jsx)("div",{className:"img",children:(0,e.jsx)("img",{src:n,crossOrigin:"anonymous",alt:"avatar"})}),i?(0,e.jsx)("span",{className:"txt",children:i}):null,s?(0,e.jsx)("span",{className:"node-icon",children:(0,e.jsx)(fe,{Ricon:s,open:d})}):null]}):(0,e.jsxs)(e.Fragment,{children:[l?(0,e.jsx)("span",{className:"node-icon",children:l}):null,i?(0,e.jsx)("span",{className:"txt",children:i}):null,s?(0,e.jsx)("span",{className:"node-icon",children:(0,e.jsx)(fe,{Ricon:s,open:d})}):null]}),pe=({item:n,open:i})=>{const{Custom:l,img:s,name:d,icon:p,Ricon:y,active:m}=n;return typeof l=="function"?(0,e.jsx)(l,{item:n}):(0,e.jsx)("a",{className:m?"active":"",title:n.title||d,children:(0,e.jsx)(Ne,{img:s,name:d,icon:p,Ricon:y,open:i})})},Be=({item:n,click:i})=>{const l=(0,r.useRef)(),[s,d]=(0,r.useState)(!1);ue(l,x=>s&&d(!1));const{arrowDir:p,ChildRender:y,children:m}=n,_=m==null?void 0:m.length,b=(x,z,C=null)=>{C===!1&&d(j=>!j),C&&(x.stopPropagation(),d(!1)),i(z,C)};return _||y?(0,e.jsxs)("li",{ref:l,className:s?"open":"",onClick:x=>b(x,n,!1),children:[(0,e.jsx)(pe,{item:n,open:s}),(0,e.jsx)("ul",{className:`huxy-header-arrow-${p||"rt"}`,children:_?m.map((x,z)=>(0,e.jsx)("li",{className:x.divider?"divider":"",children:(0,e.jsxs)("a",{onClick:C=>b(C,x,!0),className:x.active?"active":"",children:[x.icon?(0,e.jsx)("span",{className:"node-icon",children:x.icon}):null,(0,e.jsx)("span",{className:"drop-label",children:x.name})]})},`subItem-${z}-${x.key||x.name}`)):(0,e.jsx)("li",{children:(0,e.jsx)(y,{item:n})})})]}):(0,e.jsx)("li",{onClick:x=>b(x,n),children:(0,e.jsx)(pe,{item:n,open:s})})};var xe=({list:n,click:i})=>(0,e.jsx)("ul",{children:n.map((l,s)=>(0,e.jsx)(Be,{click:i,item:l},`navItem-${s}-${l.key||l.name}`))}),te=g(916),U={};U.styleTagTransform=G(),U.setAttributes=Y(),U.insert=X().bind(null,"head"),U.domAPI=V(),U.insertStyleElement=J();var sn=$()(te.Z,U),dn=te.Z&&te.Z.locals?te.Z.locals:void 0,De=n=>{const{leftList:i,rightList:l,handleNavClick:s,logo:d,title:p,Link:y}=n;return(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)(y,{className:"banner",to:"/",children:[d?(0,e.jsx)("div",{className:"logo",children:(0,e.jsx)("img",{src:d,alt:"logo"})}):null,(0,e.jsx)("div",{className:"title",children:p!=null?p:"Dashboard"})]}),(0,e.jsx)("div",{className:"nav",children:(0,e.jsxs)("div",{className:"nav-wrap",children:[(0,e.jsx)("div",{className:"nav-left",children:(0,e.jsx)(xe,{list:i,click:m=>s(n,m)})}),(0,e.jsx)("div",{className:"nav-right",children:(0,e.jsx)(xe,{list:l,click:m=>s(n,m)})})]})})]})},oe=g(232),Z={};Z.styleTagTransform=G(),Z.setAttributes=Y(),Z.insert=X().bind(null,"head"),Z.domAPI=V(),Z.insertStyleElement=J();var fn=$()(oe.Z,Z),pn=oe.Z&&oe.Z.locals?oe.Z.locals:void 0,Ue=({Footer:n})=>(0,e.jsx)("div",{className:"footer",children:n?(0,e.jsx)(n,{}):"copyright \xA9 2020-2022"}),Ze=n=>{const{useStore:i,menu:l,MenuTop:s,MenuBottom:d,menuStyle:p,Link:y,inputPath:m}=n,[_,b]=i("huxy-collapse"),{width:x}=u(),z=(0,r.useRef)();return ue(z,C=>{x<=1024&&_&&b(!1)}),(0,r.useEffect)(()=>{x<=1024&&_&&b(!1)},[m]),(0,e.jsxs)("div",{className:"menu",ref:z,style:{...p,height:"100%"},children:[s&&(0,e.jsx)(s,{...n}),(0,e.jsx)(de,{data:l,collapsed:_&&x>1024,Link:y}),d&&x>1024&&(0,e.jsx)(d,{collapsed:_,setCollapsed:b})]})},ae=g(41),K={};K.styleTagTransform=G(),K.setAttributes=Y(),K.insert=X().bind(null,"head"),K.domAPI=V(),K.insertStyleElement=J();var gn=$()(ae.Z,K),vn=ae.Z&&ae.Z.locals?ae.Z.locals:void 0;const Ke=450;var Fe=n=>{var i;const{menu:l,current:s,MainTop:d,asideStyle:p,contentStyle:y,children:m}=n,_=(i=s.slice(-1)[0])==null?void 0:i.path,b=l==null?void 0:l.length,x=(0,r.useRef)(_),z=(0,r.useRef)(),[C,j]=(0,r.useState)("");return(0,r.useEffect)(()=>{var P;const I=(P=s.slice(-1)[0])==null?void 0:P.path;return I!==x.current&&(x.current=I,j(" ani-in"),z.current=setTimeout(()=>{j("")},Ke)),()=>{clearTimeout(z.current),j("")}},[s]),(0,e.jsxs)("div",{className:`frame-container${b?"":" no-sidebar"}`,children:[b?(0,e.jsx)("aside",{className:"frame-aside",style:p,children:(0,e.jsx)(Ze,{...n,menu:l})}):null,(0,e.jsx)("div",{className:"frame-view",children:(0,e.jsxs)("div",{className:"page-container",children:[d&&(0,e.jsx)(d,{current:s}),(0,e.jsx)("div",{className:`page-content${C}`,style:y,children:m})]})}),(0,e.jsx)("footer",{className:"frame-footer",children:(0,e.jsx)(Ue,{...n})})]})},ie=g(705),F={};F.styleTagTransform=G(),F.setAttributes=Y(),F.insert=X().bind(null,"head"),F.domAPI=V(),F.insertStyleElement=J();var _n=$()(ie.Z,F),bn=ie.Z&&ie.Z.locals?ie.Z.locals:void 0,$e=n=>{const{useStore:i,vertical:l,horizontal:s,menu:d,headerStyle:p,navMenuStyle:y,Link:m,language:_}=n,b=(0,r.useMemo)(()=>(0,e.jsx)(De,{...n}),[_]),{width:x}=u(),[z]=i("huxy-collapse"),C=x<=1024,j=C?d:l,P=C?[]:s,I=P.length?"horizontal":"",T=["frame",I,z&&!I?"collapsed":""].filter(Boolean).join(" ");return(0,e.jsxs)("div",{className:T,children:[(0,e.jsxs)("header",{className:"frame-header",style:p,children:[b,P!=null&&P.length?(0,e.jsx)(de,{data:P,type:"horizontal",Link:m,style:y}):null]}),(0,e.jsx)("main",{className:"frame-main",children:(0,e.jsx)(Fe,{...n,menu:j})})]})}}(),he}()});
