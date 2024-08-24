import*as I from"react";var _e={133:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(758),o=r.n(a),n=r(935),i=r.n(n),l=i()(o());l.push([e.id,`.node-right-icon-close {
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
  content: '';
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
  content: '';
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
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: '';
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > ul {
  height: calc(var(--subItemHeight) * var(--count));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.hidden {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  --count: 0;
  overflow: hidden;
  height: 0;
  transition: height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
  height: auto;
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
  content: '';
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
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
  --itemPadding: 0 8px;
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
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: '';
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
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
  content: '';
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
  content: '';
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: var(--itemPadding);
  z-index: 10001;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
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
  content: '';
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
  content: '';
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
`,""]);const s=l},144:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(758),o=r.n(a),n=r(935),i=r.n(n),l=i()(o());l.push([e.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]);const s=l},524:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(758),o=r.n(a),n=r(935),i=r.n(n),l=i()(o());l.push([e.id,`.frame {
  --frame-spacing: 1rem;
  --frame-radius: 4px;
  --boxShadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  transform: none;
  --topHeight: var(--headerHeight);
  --blur: 0.3rem;
  --opacity: 0.75;
  background: var(--appBgColor);
  color: var(--appColor);
}
.frame.no-header {
  --headerHeight: 0px;
}
.frame .frame-header {
  --linkColor: var(--headerLinkColor, var(--appLinkColor));
  --linkActiveColor: var(--headerLinkActiveColor, var(--appLinkActiveColor));
  --linkHoverColor: var(--headerLinkHoverColor, var(--appLinkHoverColor));
  backdrop-filter: blur(var(--blur));
  background: var(--navBgColor);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.frame .frame-main {
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding-top: var(--topHeight);
  z-index: 5;
}
.frame .frame-main .frame-container {
  position: relative;
}
.frame .frame-main .frame-container .frame-aside {
  --linkColor: var(--asideLinkColor, var(--appLinkColor));
  --linkActiveColor: var(--asideLinkActiveColor, var(--appLinkActiveColor));
  --linkHoverColor: var(--asideLinkHoverColor, var(--appLinkHoverColor));
  position: fixed;
  width: var(--menuWidth);
  top: var(--topHeight);
  bottom: 0;
  z-index: 6;
  background: var(--menuBgColor);
  transform: translate3d(0, 0, 0);
  transition: width 0.3s;
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
.frame.collapsed .frame-main .frame-container .frame-aside,
.frame.composeCollapsed .frame-main .frame-container .frame-aside {
  width: var(--collapseWidth);
  transition: width 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-view,
.frame.composeCollapsed .frame-main .frame-container .frame-view {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-footer,
.frame.composeCollapsed .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--collapseWidth));
  transition: padding-left 0.3s;
}
.frame.horizontal,
.frame.compose {
  --topHeight: calc(var(--headerHeight) + var(--menuItemHeight));
}
.frame.horizontal .frame-header .header .banner,
.frame.compose .frame-header .header .banner {
  background: transparent;
  color: var(--linkColor);
}
.frame.horizontal .frame-header .header .banner:hover,
.frame.compose .frame-header .header .banner:hover {
  color: var(--linkColor);
}
.frame.detached {
  --frame-spacing: 0.8rem;
  --frame-radius: 4px;
}
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
    background: var(--menuBgColor);
  }
  .frame.collapsed .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
}
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
`,""]);const s=l},754:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(758),o=r.n(a),n=r(935),i=r.n(n),l=i()(o());l.push([e.id,`.clear::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
@keyframes huxy-header-animate-bottom-in {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 25px, 0);
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
  content: '';
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
  content: '';
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
  z-index: 10000;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  content: '';
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
  z-index: 10000;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  content: '';
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
  color: var(--bannerLinkColor, var(--appLinkColor));
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
.header .banner:hover {
  color: var(--bannerLinkColor, var(--appLinkColor));
}
.header .banner .logo {
  height: 100%;
  font-size: 0;
}
.header .banner .logo > img {
  height: 55%;
  width: auto;
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
  box-shadow: var(--boxShadow);
}
.header .nav .nav-wrap::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul,
.header .nav .nav-wrap .nav-right > ul {
  margin: 0;
}
.header .nav .nav-wrap .nav-left > ul::after,
.header .nav .nav-wrap .nav-right > ul::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul > li,
.header .nav .nav-wrap .nav-right > ul > li {
  position: relative;
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li > .link,
.header .nav .nav-wrap .nav-right > ul > li > .link {
  height: var(--headerHeight);
  display: block;
  text-align: center;
  cursor: pointer;
  padding: 0 1.2rem;
  position: relative;
  transition: color 0.3s;
}
.header .nav .nav-wrap .nav-left > ul > li > .link::before,
.header .nav .nav-wrap .nav-right > ul > li > .link::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar {
  font-size: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img {
  height: 48%;
  max-height: 46px;
  border-radius: 100%;
  background-color: #f0f0f0f0;
  padding: 1px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  position: relative;
  transform-origin: 50% 50%;
  transform: rotate(-42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img::after,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  bottom: -3px;
  left: calc(50% - 2px);
  background-color: #21d86e;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img img {
  height: 100%;
  width: auto;
  border-radius: 100%;
  display: block;
  transform-origin: 50% 50%;
  transform: rotate(42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .txt {
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon {
  font-size: 0;
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon img,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon img {
  height: 25%;
  width: auto;
  max-height: 24px;
  min-height: 16px;
  filter: grayscale(0.1);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-left > ul > li > .link .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .img {
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-left > ul > li > .link .img + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .img + .txt {
  margin-left: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-left > ul > li > .link .img > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .img > * {
  font-size: 1.6rem;
  vertical-align: middle;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt {
  display: inline-block;
  font-size: 1.3rem;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt + .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt + .node-icon {
  margin-left: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul,
.header .nav .nav-wrap .nav-right > ul > li ul {
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  min-width: 130px;
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
.header .nav .nav-wrap .nav-left > ul > li ul > li .link,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link {
  display: flex;
  align-items: center;
  height: var(--subMenuItemHeight);
  line-height: var(--subMenuItemHeight);
  cursor: pointer;
  padding: 0 1.5rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img {
  font-size: 0;
  height: 100%;
  margin-right: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img img {
  height: 40%;
  width: auto;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon {
  display: inline-block;
  height: 100%;
  margin-right: 1rem;
  text-align: center;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon img {
  height: 34%;
  width: auto;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link > .drop-label,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link > .drop-label {
  display: inline-block;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link:hover,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link:hover {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link.active,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link.active {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li.open ul,
.header .nav .nav-wrap .nav-right > ul > li.open ul {
  display: block;
  animation: huxy-header-animate-bottom-in 0.22s forwards;
}
.header .nav .nav-wrap .nav-left {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul > li {
  float: left;
  /*> .link {
              // border-left:1px solid rgba(0, 0, 0, 0.1);
              &::before {
                content: "";
                position: absolute;
                left: 0;
                top: calc(@headerHeight / 2 - 10px);
                height: 20px;
                width: 1px;
                background-color: rgba(0, 0, 0, 0.1);
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
  .header .nav .nav-wrap .nav-right > ul > li .link .avatar .txt {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .header .nav {
    padding-left: 0 !important;
  }
  .header .nav .nav-wrap .nav-left > ul > li:not(.sm-show) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li:not(.sm-show) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li .link .avatar .txt {
    display: none;
  }
}
`,""]);const s=l},658:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(758),o=r.n(a),n=r(935),i=r.n(n),l=i()(o());l.push([e.id,`@keyframes ani-fade-in {
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
.page-container {
  --pageHeight: calc(var(--containerHeight) - var(--footerHeight) - var(--topHeight));
  min-height: var(--pageHeight);
  position: relative;
  background: var(--pageBgColor);
}
.page-container .page-content {
  --contentHeight: calc(var(--pageHeight) - var(--breadHeight) - var(--frame-spacing) * 2);
  padding: var(--frame-spacing);
}
.page-container .page-content.ani-in {
  overflow: hidden;
  animation: ani-left-in 0.4s forwards;
}
.page-container .page-content.ani-out {
  overflow: hidden;
  animation: ani-left-out 0.4s forwards;
}
`,""]);const s=l},935:e=>{e.exports=function(t){var r=[];return r.toString=function(){return this.map(function(o){var n="",i=typeof o[5]<"u";return o[4]&&(n+="@supports (".concat(o[4],") {")),o[2]&&(n+="@media ".concat(o[2]," {")),i&&(n+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),n+=t(o),i&&(n+="}"),o[2]&&(n+="}"),o[4]&&(n+="}"),n}).join("")},r.i=function(o,n,i,l,s){typeof o=="string"&&(o=[[null,o,void 0]]);var c={};if(i)for(var u=0;u<this.length;u++){var g=this[u][0];g!=null&&(c[g]=!0)}for(var f=0;f<o.length;f++){var d=[].concat(o[f]);i&&c[d[0]]||(typeof s<"u"&&(typeof d[5]>"u"||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]&&(d[1]="@media ".concat(d[2]," {").concat(d[1],"}")),d[2]=n),l&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=l):d[4]="".concat(l)),r.push(d))}},r}},758:e=>{e.exports=function(t){return t[1]}},197:(e,t)=>{var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(n,i,l){var s=null;if(l!==void 0&&(s=""+l),i.key!==void 0&&(s=""+i.key),"key"in i){l={};for(var c in i)c!=="key"&&(l[c]=i[c])}else l=i;return i=l.ref,{$$typeof:r,type:n,key:s,ref:i!==void 0?i:null,props:l}}t.Fragment=a,t.jsx=o,t.jsxs=o},85:(e,t,r)=>{e.exports=r(197)},591:e=>{var t=[];function r(n){for(var i=-1,l=0;l<t.length;l++)if(t[l].identifier===n){i=l;break}return i}function a(n,i){for(var l={},s=[],c=0;c<n.length;c++){var u=n[c],g=i.base?u[0]+i.base:u[0],f=l[g]||0,d="".concat(g," ").concat(f);l[g]=f+1;var p=r(d),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(p!==-1)t[p].references++,t[p].updater(m);else{var v=o(m,i);i.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}s.push(d)}return s}function o(n,i){var l=i.domAPI(i);l.update(n);var s=function(u){if(u){if(u.css===n.css&&u.media===n.media&&u.sourceMap===n.sourceMap&&u.supports===n.supports&&u.layer===n.layer)return;l.update(n=u)}else l.remove()};return s}e.exports=function(n,i){i=i||{},n=n||[];var l=a(n,i);return function(c){c=c||[];for(var u=0;u<l.length;u++){var g=l[u],f=r(g);t[f].references--}for(var d=a(c,i),p=0;p<l.length;p++){var m=l[p],v=r(m);t[v].references===0&&(t[v].updater(),t.splice(v,1))}l=d}}},128:e=>{var t={};function r(o){if(typeof t[o]>"u"){var n=document.querySelector(o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}t[o]=n}return t[o]}function a(o,n){var i=r(o);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}e.exports=a},51:e=>{function t(r){var a=document.createElement("style");return r.setAttributes(a,r.attributes),r.insert(a,r.options),a}e.exports=t},855:(e,t,r)=>{function a(o){var n=r.nc;n&&o.setAttribute("nonce",n)}e.exports=a},740:e=>{function t(o,n,i){var l="";i.supports&&(l+="@supports (".concat(i.supports,") {")),i.media&&(l+="@media ".concat(i.media," {"));var s=typeof i.layer<"u";s&&(l+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),l+=i.css,s&&(l+="}"),i.media&&(l+="}"),i.supports&&(l+="}");var c=i.sourceMap;c&&typeof btoa<"u"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(l,o,n.options)}function r(o){if(o.parentNode===null)return!1;o.parentNode.removeChild(o)}function a(o){if(typeof document>"u")return{update:function(){},remove:function(){}};var n=o.insertStyleElement(o);return{update:function(l){t(n,o,l)},remove:function(){r(n)}}}e.exports=a},656:e=>{function t(r,a){if(a.styleSheet)a.styleSheet.cssText=r;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(r))}}e.exports=t}},oe={};function x(e){var t=oe[e];if(t!==void 0)return t.exports;var r=oe[e]={id:e,exports:{}};return _e[e](r,r.exports,x),r.exports}x.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return x.d(t,{a:t}),t},x.d=(e,t)=>{for(var r in t)x.o(t,r)&&!x.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),x.nc=void 0;var ae={};x.d(ae,{A:()=>er});var h=x(85);const we=()=>{const e={};return{on:(o,n)=>{e[o]||(e[o]=[]),e[o].indexOf(n)===-1&&e[o].push(n)},emit:(o,n)=>{e[o]&&e[o].map(i=>i(n))},off:(o,n=null)=>{if(e[o]){if(typeof n!="function")return delete e[o];const i=e[o].indexOf(n);i>-1&&(e[o].splice(i,1),e[o].length||delete e[o])}}}},J=we,Ce=J(),Ee=e=>{const{on:t,emit:r,off:a}=Ce;return{on:o=>t(e,o),emit:o=>r(e,o),off:o=>a(e,o)}},ne=Ee,ze=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),Q=ze,Ae=e=>Q(e)==="object",E=Ae,Pe=e=>Q(e)==="array",L=Pe,je=e=>e?.$$typeof&&typeof e.$$typeof=="symbol"&&e.$$typeof.description?.indexOf("react.")===0,Se=je,We=e=>e?.__v_isVNode,Me=We,Ie=(e,t)=>Object.prototype.hasOwnProperty.call(e??{},t),Z=Ie,ie=e=>{if(!L(e)&&!E(e))return e;const t=L(e)?[]:{};for(const r in e)if(Z(e,r)){const a=e[r];t[r]=Se(a)||Me(a)||typeof a!="object"?a:a!==e?ie(a):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t},q=ie,le=e=>{const t={};for(let r in e)Z(e,r)||(t[r]=e[r]);return t},Le=(e,t)=>{if(!E(e))return t;if(!E(t))return e;const r={...le(e),...le(t)},a={...e,...t};return Object.keys(r).map(o=>{Object.setPrototypeOf(a,{[o]:r[o]})}),a},Oe=Le,Be=(e=J())=>{const{on:t,emit:r,off:a}=e,o={};return{getState:c=>q(o[c]),setState:(c,u=!1)=>{if(typeof c=="function"&&(c=c(q(o))),!E(c))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const g=q(c);Object.keys(g).map(f=>{const d=o[f],p=g[f],m=E(p)&&E(d)?Oe(d,p):p;!u&&r(f,m),o[f]=m})},subscribe:(c,u)=>(t(c,u),()=>a(c,u)),unsubscribe:a,clean:c=>{typeof c=="string"?o[c]=void 0:Array.isArray(c)?c.map(u=>o[u]=void 0):Object.keys(o).map(u=>o[u]=void 0)}}},ee=Be,Te=(e=ee())=>(t,r)=>{const{getState:a,setState:o,subscribe:n,unsubscribe:i,clean:l}=e;return r!==void 0&&o({[t]:r},!0),{getState:()=>a(t),setState:(s,c)=>o({[t]:s},c),subscribe:s=>n(t,s),unsubscribe:()=>i(t),clean:()=>l(t)}},he=Te,He=ee(),Re=he(He),De=Re;var Ne=e=>{var t={};return x.d(t,e),t},rr=e=>()=>e;const y=Ne({useCallback:()=>I.useCallback,useEffect:()=>I.useEffect,useMemo:()=>I.useMemo,useRef:()=>I.useRef,useState:()=>I.useState}),Ue=e=>(t,r)=>{const[a,o]=(0,y.useState)(()=>{const s=e?.getState(t);return s!==void 0?s:(r!==void 0&&e?.setState({[t]:r},!0),r)}),n=(0,y.useCallback)(s=>e?.setState({[t]:typeof s=="function"?s(e?.getState(t)):s}),[]),i=(0,y.useCallback)(s=>e?.subscribe(t,s),[]),l=(0,y.useCallback)((s=s)=>e?.clean(s),[]);return(0,y.useEffect)(()=>{e?.subscribe(t,s=>o(s))},[]),[a,n,i,l]},Fe=Ue,or=ne("push-emitter"),ar=ne("replace-emitter"),nr=De("route-store"),$e=J(),se=ee($e),ir=he(se),ce=Fe(se),Ke=()=>![typeof window,typeof document].includes("undefined"),Xe=Ke,Ve=e=>Q(e).indexOf("element")>-1,Ye=Ve,Ge=(e=null)=>Xe()?Ye(e)?{width:e.clientWidth,height:e.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},ue=Ge,Je=(e=null)=>{const t=(0,y.useRef)(e);return()=>t},te=Je,Qe=(e={})=>{const t=te(0)(),[r,a]=(0,y.useState)(e),o=(0,y.useCallback)(n=>{cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>a(n))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(t.current),[]),[r,o]},Ze=Qe,qe=()=>{const[e,t]=Ze(ue());return(0,y.useEffect)(()=>{const r=()=>t(ue());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),e},de=qe,et=(e,t,r="id",a="children")=>{if(!L(e))return null;const o=n=>{for(let i=0,l=n.length;i<l;i++){const s=n[i];if(s[r]===t)return[s];if(L(s[a])){const c=o(s[a]);if(c)return[s].concat(c)}}};return o(e)},tt=et,rt=e=>++e,ot=()=>{const[,e]=(0,y.useState)(0);return(0,y.useCallback)(()=>e(rt),[])},at=ot,nt=e=>L(e)&&!!e.length,it=nt,lt=({to:e,preventDefault:t,stopPropagation:r,...a})=>t?(0,h.jsx)("span",{...a}):(0,h.jsx)("a",{href:e,...a}),ht=({item:e,...t})=>(0,h.jsx)("ul",{...t}),st=(e,...t)=>{const r={};return Object.keys(e).filter(Boolean).map(a=>{r[a]=o=>e[a](o,...t)}),r},fe=({data:e=[],events:t={},List:r=ht,Link:a=lt,leftIcon:o,rightIcon:n,isHorizontal:i,isCollapsed:l,level:s=0,parentOpen:c=!0})=>{const u=l&&!s,g=!i&&!l&&!c;return e.map(f=>{const{name:d,path:p,icon:m,rightIcon:v,active:k,open:N,children:U,linkProps:W}=f,G=it(U),_=f.id||`${p}${f.childSameRouteLevel??""}`,F=u?f.title??d:void 0,C=g?"hidden":"",w=m??o,b=v??n,M=w?(0,h.jsx)("div",{className:"node-left-icon",children:w===!0?(0,h.jsx)("i",{className:"default-left-icon"}):w}):null,re=d?(0,h.jsx)("div",{className:"node-text",children:(0,h.jsx)("span",{children:d})}):null;if(G){const ke=st(t,f,s),be=[C,N?"open":""].filter(Boolean).join(" ");return(0,h.jsxs)("li",{className:be,"has-children":"true",...ke,children:[(0,h.jsxs)(a,{title:F,className:`link${k?" active":""}`,to:p,preventDefault:!0,stopPropagation:!1,...W,children:[M,re,b?(0,h.jsx)("div",{className:"node-right-icon",children:b===!0?(0,h.jsx)("i",{className:"default-right-icon"}):b}):null]}),(0,h.jsx)(r,{item:f,children:fe({data:U,events:t,List:r,Link:a,leftIcon:o,rightIcon:n,isHorizontal:i,isCollapsed:l,level:s+1,parentOpen:!!N})})]},_)}return(0,h.jsx)("li",{className:C,children:(0,h.jsxs)(a,{title:F,className:`link${k?" active":""}`,to:p,...W,children:[M,re]})},_)})},ct=fe,xe=e=>{const{children:t,open:r}=e;let a=0;if(r&&t?.length){a=t.length;let o=0;return t.map(n=>o+=xe(n)),a+o}return a},ut=({item:e,style:t,...r})=>(0,h.jsx)("ul",{style:{...t,"--count":xe(e)},...r}),dt=ut;var ft=x(591),O=x.n(ft),xt=x(740),B=x.n(xt),pt=x(128),T=x.n(pt),yt=x(855),H=x.n(yt),gt=x(51),R=x.n(gt),vt=x(656),D=x.n(vt),$=x(133),z={};z.styleTagTransform=D(),z.setAttributes=H(),z.insert=T().bind(null,"head"),z.domAPI=B(),z.insertStyleElement=R();var lr=O()($.A,z);const hr=$.A&&$.A.locals?$.A.locals:void 0,mt=e=>(0,h.jsx)("ul",{...e}),kt=(e,t)=>e?dt:({item:r,...a})=>(0,h.jsx)(mt,{className:t==="right"?"left":"",...a}),bt=e=>{const{data:t=[],collapsed:r=!1,type:a="vertical",Link:o,width:n,bgColor:i,itemHeight:l,collapsedWidth:s,itemPadding:c,style:u,className:g,...f}=e,d=te()(),p=te()();(0,y.useEffect)(()=>()=>clearTimeout(d.current),[]);const m=at(),v=a==="horizontal",k=!v&&r,N={onClick:(C,w)=>{if(C.stopPropagation(),!v&&!k){const b=tt(t,w.path,"path"),M=b[b.length-1];M.open=!M.open,m()}},onMouseEnter:(C,w,b)=>{k&&!b&&(clearTimeout(d.current),p.current.style.width="var(--maxWidth)")},onMouseLeave:(C,w,b)=>{k&&!b&&(d.current=setTimeout(()=>p.current.style.width="",200))}},U=(v?["huxy-horizontal-tree",g]:["huxy-tree",g,k?"collapsed":""]).filter(Boolean).join(" "),{float:W,...G}=f?.style??{},_={"--bgColor":i,"--itemHeight":l,"--nodeListWidth":n,...G};v?(_["--itemPadding"]=c,_["--nodeFloat"]=W):(_["--width"]=n,_["--collapsedWidth"]=s);const F=kt(!v&&!k,W);return(0,h.jsx)("div",{ref:p,className:U,style:_,...f,children:(0,h.jsx)("div",{className:"huxy-tree-track",children:(0,h.jsx)("ul",{className:"huxy-tree-root",children:ct({data:t,events:N,List:F,Link:o,leftIcon:!0,rightIcon:!0,isHorizontal:v,isCollapsed:k})})})})},pe=bt,_t=e=>{const t=typeof e=="function"?e():e;return Z(t,"current")},wt=_t,Ct=(e,t,r="click")=>{(0,y.useEffect)(()=>{const a=n=>{const i=typeof e=="function"?e():e,l=wt(i)?i.current:i;l?.contains&&!l.contains(n.target)&&t(n)},o=typeof r=="string"?[r]:r;return o.map(n=>{document.addEventListener(n,a,!1)}),()=>{o.map(n=>{document.removeEventListener(n,a,!1)})}},[])},ye=Ct,Et=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),zt=Et,At=e=>new Promise((t,r)=>{const a=new FileReader;a.readAsDataURL(e),a.addEventListener("load",()=>t(a.result)),a.addEventListener("error",o=>r(o))}),Pt=At,jt=async e=>{if(!zt(e))return e;const r=await(await fetch(decodeURIComponent(e))).blob();return await Pt(r)},St=jt,Wt=e=>{const[t,r]=(0,y.useState)(e);return(0,y.useEffect)(()=>{(async o=>{const n=await St(o);r(n)})(e)},[e]),t},Mt=Wt,It=({src:e,...t})=>{const r=Mt(e);return(0,h.jsx)("img",{...t,src:r})},Lt=It,ge=({Ricon:e,open:t})=>e===!0?(0,h.jsx)("i",{className:`huxy-header-angle-${t?"top":"bt"}`}):(0,h.jsx)(e,{status:t}),Ot=({img:e,name:t,icon:r,Ricon:a,open:o})=>e?(0,h.jsxs)("div",{className:"avatar",children:[(0,h.jsx)("div",{className:"img",children:(0,h.jsx)(Lt,{src:e,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),t?(0,h.jsx)("span",{className:"txt",children:t}):null,a?(0,h.jsx)("span",{className:"node-icon",children:(0,h.jsx)(ge,{Ricon:a,open:o})}):null]}):(0,h.jsxs)(h.Fragment,{children:[r?(0,h.jsx)("span",{className:"node-icon",children:r}):null,t?(0,h.jsx)("span",{className:"txt",children:t}):null,a?(0,h.jsx)("span",{className:"node-icon",children:(0,h.jsx)(ge,{Ricon:a,open:o})}):null]}),ve=({item:e,open:t})=>{const{Custom:r,img:a,name:o,icon:n,Ricon:i,active:l}=e;return typeof r=="function"?(0,h.jsx)(r,{item:e,className:"link"}):(0,h.jsx)("span",{className:`link${l?" active":""}`,title:e.title||o,children:(0,h.jsx)(Ot,{img:a,name:o,icon:n,Ricon:i,open:t})})},Bt=({item:e,click:t})=>{const r=(0,y.useRef)(),[a,o]=(0,y.useState)(!1);ye(()=>r,f=>a&&o(!1));const{arrowDir:n,ChildRender:i,children:l,smShow:s}=e,c=l?.length,u=(f,d,p=null)=>{p===!1&&o(m=>!m),p&&(f.stopPropagation(),o(!1)),t(d,p)},g=s?"sm-show":"";return c||i?(0,h.jsxs)("li",{ref:r,className:`${g} ${a?"open":""}`,onClick:f=>u(f,e,!1),children:[(0,h.jsx)(ve,{item:e,open:a}),(0,h.jsx)("ul",{className:`huxy-header-arrow-${n||"rt"}`,children:c?l.map((f,d)=>(0,h.jsx)("li",{className:f.divider?"divider":"",children:(0,h.jsxs)("span",{onClick:p=>u(p,f,!0),className:`link${f.active?" active":""}`,children:[f.icon?(0,h.jsx)("span",{className:"node-icon",children:f.icon}):null,(0,h.jsx)("span",{className:"drop-label",children:f.name})]})},`subItem-${d}-${f.key||f.name}`)):(0,h.jsx)("li",{children:(0,h.jsx)(i,{item:e,close:()=>o(!1)})})})]}):(0,h.jsx)("li",{onClick:f=>u(f,e),className:g,children:(0,h.jsx)(ve,{item:e,open:a})})},Tt=({list:e,click:t})=>(0,h.jsx)("ul",{children:e.map((r,a)=>(0,h.jsx)(Bt,{click:t,item:r},`navItem-${a}-${r.key||r.name}`))}),me=Tt,Ht=e=>{const{leftList:t,rightList:r,handleNavClick:a,logo:o,title:n,Link:i}=e;return(0,h.jsxs)("div",{className:"header",children:[(0,h.jsxs)(i,{className:"banner",to:"/",children:[o?(0,h.jsx)("div",{className:"logo",children:(0,h.jsx)("img",{width:"1",height:"1",src:o,alt:"logo"})}):null,(0,h.jsx)("div",{className:"title",children:n??"Dashboard"})]}),(0,h.jsx)("div",{className:"nav",children:(0,h.jsxs)("div",{className:"nav-wrap",children:[(0,h.jsx)("div",{className:"nav-left",children:(0,h.jsx)(me,{list:t,click:a})}),(0,h.jsx)("div",{className:"nav-right",children:(0,h.jsx)(me,{list:r,click:a})})]})})]})},Rt=Ht;var K=x(754),A={};A.styleTagTransform=D(),A.setAttributes=H(),A.insert=T().bind(null,"head"),A.domAPI=B(),A.insertStyleElement=R();var sr=O()(K.A,A);const cr=K.A&&K.A.locals?K.A.locals:void 0,Dt=({language:e,...t})=>(0,y.useMemo)(()=>(0,h.jsx)(Rt,{...t}),[e]),Nt=e=>{const{navMenu:t,headerStyle:r,navMenuStyle:a,Link:o,leftList:n,rightList:i,handleNavClick:l,logo:s,title:c,language:u}=e;return(0,h.jsxs)("header",{className:"frame-header",style:r,children:[n?.length||i?.length?(0,h.jsx)(Dt,{Link:o,leftList:n,rightList:i,handleNavClick:(g,f)=>l(e,g,f),logo:s,title:c,language:u}):null,t?.length?(0,h.jsx)(pe,{data:t,type:"horizontal",Link:o,style:a}):null]})},Ut=Nt;var X=x(144),P={};P.styleTagTransform=D(),P.setAttributes=H(),P.insert=T().bind(null,"head"),P.domAPI=B(),P.insertStyleElement=R();var ur=O()(X.A,P);const dr=X.A&&X.A.locals?X.A.locals:void 0,Ft=({Footer:e})=>(0,h.jsx)("div",{className:"footer",children:e?(0,h.jsx)(e,{}):"copyright \xA9 2020-2022"}),$t=Ft,Kt=e=>{const{menu:t,MenuTop:r,MenuBottom:a,Link:o,inputPath:n,asideStyle:i}=e,[l,s]=ce("huxy-collapse"),{width:c}=de(),u=(0,y.useRef)();return ye(()=>u,g=>{c<=1024&&l&&s(!1)}),(0,y.useEffect)(()=>{c<=1024&&l&&s(!1)},[n]),(0,h.jsx)("aside",{className:"frame-aside",style:i,children:(0,h.jsxs)("div",{ref:u,style:{height:"100%"},children:[r&&(0,h.jsx)(r,{...e}),(0,h.jsx)(pe,{data:t,collapsed:l&&c>1024,Link:o}),a&&(0,h.jsx)(a,{collapsed:l,isSmall:c<=1024,setCollapsed:s})]})})},Xt=Kt,Vt=380,Yt=({inputPath:e,menuAnimate:t="ani-in"})=>{const r=(0,y.useRef)(e.split("?")[0]),a=(0,y.useRef)(),[o,n]=(0,y.useState)("");return(0,y.useEffect)(()=>{const i=e.split("?")[0];return i!==r.current&&(r.current=i,n(` ${t}`),a.current=setTimeout(()=>{n("")},Vt)),()=>{clearTimeout(a.current),n("")}},[e]),o},Gt=e=>{const{inputPath:t,contentStyle:r,menuAnimate:a,children:o}=e,n=Yt({inputPath:t,menuAnimate:a});return(0,h.jsx)("div",{className:`page-content${n}`,style:r,children:o})},Jt=Gt;var V=x(658),j={};j.styleTagTransform=D(),j.setAttributes=H(),j.insert=T().bind(null,"head"),j.domAPI=B(),j.insertStyleElement=R();var fr=O()(V.A,j);const xr=V.A&&V.A.locals?V.A.locals:void 0,Qt=e=>{const{menu:t,current:r,MainTop:a,children:o,inputPath:n,contentStyle:i,menuAnimate:l}=e,s=t?.length,c=l?l===!0?"ani-in":l:"";return(0,h.jsxs)("div",{className:`frame-container${s?"":" no-sidebar"}`,children:[s?(0,h.jsx)(Xt,{...e}):null,(0,h.jsx)("div",{className:"frame-view",children:(0,h.jsxs)("div",{className:"page-container",children:[a&&(0,h.jsx)(a,{current:r}),c?(0,h.jsx)(Jt,{inputPath:n,contentStyle:i,menuAnimate:c,children:o}):(0,h.jsx)("div",{className:"page-content",style:i,children:o})]})}),(0,h.jsx)("footer",{className:"frame-footer",children:(0,h.jsx)($t,{...e})})]})},Zt=Qt;var Y=x(524),S={};S.styleTagTransform=D(),S.setAttributes=H(),S.insert=T().bind(null,"head"),S.domAPI=B(),S.insertStyleElement=R();var pr=O()(Y.A,S);const yr=Y.A&&Y.A.locals?Y.A.locals:void 0,qt=e=>{const{vertical:t,horizontal:r,menu:a,leftList:o,rightList:n}=e,{width:i}=de(),[l]=ce("huxy-collapse"),s=i<=1024,c=s?a:t,u=s?[]:r,g=c?.length,f=u?.length,d=f&&g,p=d?"compose":f?"horizontal":l?"collapsed":"",m=d&&l?"composeCollapsed":"",v=o?.length||n?.length?"":"no-header",k=["frame",p,m,v].filter(Boolean).join(" ");return(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)(Ut,{...e,navMenu:u}),(0,h.jsx)("main",{className:"frame-main",children:(0,h.jsx)(Zt,{...e,menu:c})})]})},er=qt;var tr=ae.A;export{tr as default};
