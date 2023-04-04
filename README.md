## layout

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ahyiru/layout/blob/develop/LICENSE)
[![npm version](https://img.shields.io/npm/v/@huxy/layout.svg)](https://www.npmjs.com/package/@huxy/layout)
[![Build Status](https://api.travis-ci.com/ahyiru/layout.svg?branch=master)](https://app.travis-ci.com/github/ahyiru/layout)
[![](https://img.shields.io/badge/blog-ihuxy-blue.svg)](http://ihuxy.com/)

### 功能

该 `layout` 框架是传统的中后台 `layout` 模板，提供了头部导航栏、菜单栏、底部栏、logo、面包屑等。

- 支持菜单栏展示、隐藏，展开、缩小等配置。
- 支持左侧垂直菜单、顶部水平菜单、水平垂直菜单组合。
- 支持自适应屏幕。根据屏幕大小展开、缩小、隐藏菜单，头部信息展示方式切换。
- 支持 nav 导航栏自定义。自定义导航信息、下拉信息、点击事件等。

### 使用

常用配置：

- menuType: vertical | horizontal | compose, 默认 vertical。横纵菜单配置。
- MenuBottom：菜单底部内容
- MainTop：主页顶部内容。如：面包屑。
- Footer：页面底部内容。
- headerStyle、asideStyle、menuStyle、contentStyle：样式。
- handleNavClick：导航栏点击事件。
- leftList、rightList：左侧导航栏、右侧导航栏配置。
- logo、title、Link：logo、标题、Link 组件 注入。
- menuAnimate: Boolean | String, 默认 false。

### nav configs

```javascript
export const leftNav = () => {
  const left = getIntls('nav.left', {});
  return [
    {
      key: 'collapse',
      name: left?.collapse ?? 'collapse',
      type: 'collapse',
      smShow: true,
      Custom: props => <CustomCollapse {...props} />,
    },
    {
      key: 'projectList',
      name: left?.projectList ?? 'projectList',
      type: 'projectList',
      arrowDir: 'lt',
      Ricon: true,
      children: [
        {
          key: 'API文档',
          name: left?.apis ?? 'API文档',
          icon: <Icon icon="ApiOutlined" />,
          type: 'link',
          link: 'http://ihuxy.com:8010',
        },
      ],
    },
    {
      key: 'wechat',
      title: 'wechat',
      icon: <Icon icon="WechatOutlined" />,
      arrowDir: 'lt',
      ChildRender: item => (
        <div className="follow-me">
          <img src={wx} alt="wechat" />
          <p>{left?.followMe ?? 'followMe'}：yiru_js</p>
        </div>
      ),
    },
    {
      key: 'configs',
      icon: <Icon icon="ToolOutlined" />,
      type: 'configs',
      smShow: true,
      Custom: props => <Settings {...props} />,
    },
    {
      key: 'search',
      title: left?.search ?? '搜索',
      Custom: props => <Search {...props} />,
    },
  ];
};
```

- key: 标识符
- name: 展示名
- type: 类型
- title: tooltop 展示信息
- icon: 图标
- smShow: 小屏是否展示，默认不展示
- Custom: 自定义组件
- ChildRender: 自定义渲染
- children: 下拉子菜单配置