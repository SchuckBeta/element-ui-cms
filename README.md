## 示例

[点击预览](https://panhezeng.github.io/element-ui-cms/)

账号密码随便填

示例代码目录 docs

示例使用的apiary mock服务每次Request获得的Response都是不变的。免费服务可能会出现无响应等错误。免费又稳定，限制少，同时支持https的mock服务，也就apiary了。

## 目录

```bash
.
├── README.md     # 文档
├── dist    # 生产部署文件
├── docs    # 示例部署文件
├── public
│   ├── index.html    # 入口页的HTML模板文件
│   └── favicon.ico
├── server    # local-web-server配置文件
│   ├── build.example.js    # 编译示例文件
│   ├── config.mock.js    # mock接口
│   ├── config.prod.example.js    # 示例
│   ├── config.prod.js    # 生产
│   └── mocks    # mock数据
├── src
│   ├── api    # 接口
│   ├── assets
│   │   ├── css
│   │   └── img
│   ├── components    # 组件
│   │   ├── App.vue    # 根组件
│   │   ├── common   # 公共组件
│   │   ├── layouts   # 布局组件
│   │   └── pages   # 页面组件
│   ├── i18n    # 国际化
│   │   ├── en
│   │   ├── index.js
│   │   └── zh-CN
│   ├── main.js    # 入口js
│   ├── mixins    # 混入
│   ├── router    # 路由
│   ├── store
│   │   ├── config    # 项目配置数据，常量
│   │   ├── index.js    # vuex主文件
│   │   └── modules    # vuex模块
│   └── utils    # 工具方法文件
│       ├── init    # 初始化组件和插件
│       ├── load-component    # 加载组件方法
│       └── index.js
├── tool # 软件工具相关安装文件
├── vue.config.js    # vue cli项目配置文件
├── jsconfig.json    # 用于VSCodeIDE智能提示的配置文件
├── apiary.apib     # 接口文档
├── package.json
└── README.md
```

## 阐述

- 本项目是基于[Element UI](http://element-cn.eleme.io)开发的 CMS原型，依赖 vue，vue-router，vuex 等类库，详见 package.json。
- 本项目的理念是简单好改，专注解决开发 CMS 最基本和核心的需求，用户访问页面权限，数据列表的展示，列表查询筛选排序，列表项的增删查改等。
- 本项目主要是对本人以前开发的 CMS 的抽象封装和重构优化，参考了 Ant Design Pro 和 Vue Element Admin，和它们的最重要区别在于，当用户通过点击菜单浏览列表页面，然后进行翻页，筛选等操作后，再刷新页面，依然可以恢复刷新前的列表查询条件。
- 最佳实践，最大限度使用 Vue 的组合，插槽（slot），混入 (mixins)，抽象封装可复用代码。
- 本项目 Element UI 使用按需加载方式，可以修改 src/utils/init-components/element-ui.js 文件增减组件，自定义主题则参考 Element 文档的搭配插件按需引入组件主题部分。
- 为减少编译时间，项目初始化依赖的 vue 等类库，除了 element-ui 外，都使用 externals 方法加载，具体见 vue.config.js的 externals 和 HtmlWebpackIncludeAssetsPlugin，为了 IDE 提示等功能，所有 external 模块配置了 package.json 的 dependencies，如无此需求可删除。本项目使用类库都采用 latest 版本策略，如有其他需要自行修改。
- 浏览器兼容 "browserslist": last 2 chrome version,last 2 firefox version,last 2 safari version,last 2 edge version,ie 11。
- 不需要的功能可以删除相关代码，比如如果不需要国际化，可以说删除所有 VueI18n 相关代码；不需要切换菜单布局，则可以删除多余的菜单布局代码
- 本页面国际化切换后，使用reload方式生效，虽然有点不太友好，但是考虑很多地方国际化不是依赖vue i18n模块，而是通过其他方式，还有如果服务端数据也有多语言版本，还需要重新通过接口请求数据等
- 根据项目需求不同，团队人员技术选型不同，在权限设计上会有所不同，本cms原型的菜单通过后端获得，权限只到页面级别，API按照后端语言Python的Django框架要求设计。如果希望菜单放到前端，权限要细化到增删查改级别，后端使用后端PHP框架，则需要修改相关代码，在相关功能处已经通过注释说明

## 开发流程

- 在 src/components/pages/ 目录内建立以模块名命名 PascalCase（Pascal Case 命名规范）的目录，index.vue 是该模块默认页。 比如公告 Announcement 模块 src/components/pages/Announcement/ ，index.vue 是公告列表页， Item.vue 是公告详情页，components/Form.vue 是添加和编辑公告的表单组件。

- 在 src/store/config/pages/ 目录内建立以模块名命名 kebab-case（kebab Case 命名规范）的 js 文件，配置该模块的页面路由相关配置。具体页面配置规则请阅读 src/store/config/pages/index.js 内 pages 对象的注释，参考 announcement.js 。

- 如果模块需要出现在导航菜单中，则需要在 api mock 文档的账户信息 /api/cms/account/ 接口的 menu 字段中填写上对应的菜单数据，menu 的 path 必须和页面配置的 path 一致。

- 在 src/api/ 目录内建立以模块名命名 kebab-case（kebab Case 命名规范）的 js 文件，配置该模块的接口。接口 url 请到 mock 文档查看，如果是列表类的增删查改模块，api 方法可继承 list-fn.js，参考 announcement.js 。

- 如果想把关联度高的模块放在一起，也可以采用父模块名目录嵌套子模块名目录或文件的形式。

- 拿到开发需求后，拷贝粘贴 Announcement 模块相关目录文件，改成新需求的模块名，即可快速开始。具体细节请阅读注释。请修改 index.vue 和 Form.vue 内的 import api from '@/api/announcement' 的 announcement 为 新需求模块的 api 文件名

## 用法

- 如需**单文件上传**，src 目录搜索 single-upload ，查看 SingleUpload 组件用法示例

- 如需**多文件上传**，src 目录搜索 multiple-upload ，查看 MultipleUpload 组件用法示例

- 如需**文本框输入联想搜索**，src 目录搜索 fetchSuggestions ，查看 el-autocomplete 组件用法示例

- 如需**远程搜索多选 tag 和创建 tag 类数据**，src 目录搜索 select-remote-multiple ，查看 SelectRemoteMultiple 组件用法示例

- 如需**列表项筛选**, src 目录搜索 :filters ，查看 el-table-column 组件用法示例

- 如需**富文本编辑器**, src 目录搜索 Editor ，查看 Editor 组件用法示例

- 富文本编辑器、单文件上传组件等自定义组件的表单项验证需要设置 :show-message="!formData.bar" 才能实现预期效果

- src/store/config/form-rules.js src/mixins/form.js 提供常用的表单验证规则

- element 的表单验证支持的类型和扩展使用方法见[async-validator](https://github.com/yiminghe/async-validator)

- 如果 element ui 的 icon 不够用，可以使用 svg-icon 组件，src 目录搜索 svg-icon ，查看用法示例。 在[iconfont](http://www.iconfont.cn/)制作下载 icon 的 svg 文件放到 src/assets/img/icons/svg 目录，在 svg-icon 标签的 icon 属性上添上 svg 的名字即可

- 如果是在 jsx 中使用组件，需要通过 Vue.component 方式注册组件

- 注意，用 element 组件的 Table 表格组件，用属性修改宽度样式等，需要刷新页面才能看到正式效果，热更新的方式会异常

- 有些热更新情况下会出现的警告之类的可以忽略，正常刷新无问题

## IDE

WebStorm:

Languages and Frameworks | JavaScript | Webpack，点击文件夹图标选择项目的node_modules/@vue/cli-service/webpack.config.js文件，实现智能跳转和提示

搜索 eslint，打钩激活

安装prettier插件，搜索File Watchers，点击+，选择prettier，添加js和vue的watcher，可能需要翻墙下载插件，可以使用tool目录内的本地文件安装，和导入watcher [官方文档](https://prettier.io/docs/en/webstorm.html)

Languages and Frameworks | JavaScript ，选择 JSX

每次安装了新版本 node，需要搜索 Node.js ， Node interpreter 选择最新版本 node ， 勾选 Coding assistance for Node.js ， Package manager 选择 npm

VSCode:

配置 jsconfig.json 文件，实现智能跳转和提示

安装prettier插件，[官方文档](https://prettier.io/docs/en/editors.html)

配置

```
    "prettier.eslintIntegration": true, // 开启 eslint 支持
    "eslint.autoFixOnSave": true, // 每次保存的时候双引号
    "eslint.validate": [ //开启对.vue文件中错误的检查
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        }
    ]
```

## 环境

- Ubuntu 系统第一次需要执行 `sudo apt-get install -y build-essential`

- 重置前端依赖环境，cd 到项目目录，删除前端依赖相关文件

  ```bash
  rm -rf node_modules package-lock.json yarn.lock && npm uninstall -g node-gyp && npm cache clean --force
  ```

- 安装项目依赖包 ** 如果需要把老版本的全局模块安装到新版本 node，请把 nvm install node 替换为 nvm install node --reinstall-packages-from=node, 有些系统 nvm 命令需要手动添加到 bash，所以下面命令会找不到 nvm 报错中断，请查看 nvm 安装文档 **
  ```bash
  curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && export NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node && nvm install node && nvm use node && npm config set registry=https://registry.npm.taobao.org && npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass && npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/ && npm config set phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs && npm config set chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver && npm config set selenium_cdnurl=https://npm.taobao.org/mirrors/selenium && npm install -g nrm && npm install -g node-gyp && npm i
  ```
- 本地测试 http://0.0.0.0:8001/

  `npm run dev`

- 正式发版

  `npm run build`

- 如果 npm run build 失败报错，可以尝试删除 node_modules 文件夹，package-lock.json yarn.lock 文件（如果有的话），再重新执行上面的命令

npm WARN deprecated nomnom babel-preset-es 可以无视，是因为项目依赖的底层包没有更新造成的，不影响项目使用

## 部署

1.  编译

- 线上环境编译命令
  `npm run build`

2.  拷贝 dist 目录内所有文件到服务器的 cms 域名映射的目录内
