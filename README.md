# stock2c1_app

#### 介绍
该项目是一个利用uniapp框架编写的一个app软件，主要是用来做网上资金交易，虚拟货币购买等

#### 软件架构
┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
├─pages                 业务页面文件存放的目录
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意： 静态资源只能存放于此
├─uni_modules           存放[uni_module](/uni_modules)。
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
└─uni.scss              这里是uni-app内置的常用样式变量 
└─api                   存放后端接口的请求方法文件夹
└─utils                 存放中间配置文件
└─node_modules          安装包依赖
└─store                 状态管理器
└─locale                国际化翻译文件夹
└─package.json          依赖管理
 
#### 安装教程
1.从git仓库 git clone 地址 克隆
2.直接在hbuilderx 进行打开，运行到手机或者浏览器，浏览器部分功能可能支持

#### 使用说明
1.需要登录注册
2.再进入app首页 进行用户操作

