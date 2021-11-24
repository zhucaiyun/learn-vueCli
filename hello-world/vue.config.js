const { processSlotOutlet } = require("@vue/compiler-core");

/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-11-23 14:44:59
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-11-24 18:16:03
 * @Description  : vue-cli配置文件
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/pro/' : '/dev/', //部署应用包时的基本URL 取代了baseUrl 和webpack的output.publicPath一致
  outputDir: 'testBuildDist', // 不要修改webpack的output.path
  assetsDir: './static/file/', // 放静态资源 img css js都放于此
  indexPath: './indexDir/first.html', // index.html的输出路径相对于 outputDir
  filenameHashing: false, // 所有的文件都不设置hash值了 如果index.html无法使用vue-cli生成的就需要设置成false
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true, // what is this
  transpileDependencies: [], //babel-loader显示转译一个依赖 node_modules
  productionSourceMap: false, // 生产环境生成source map 可以将其设置为false 以加速生产环境构建： source map(http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html) 1、sourcemap是一个信息文件，包含转换后的代码对应的转换前代码的位置，一般用于错误追踪。
  crossorigin: 'anonymous', // what is this ''|'anonymous'|'use-credentials'|undefined 只影响 html-webpack-plugin构建时inject的标签 静态资源也有跨域问题吗？ 同域和跨域对接口和静态资源的影响
  integrity: false, // what is this
  // configureWebpack: {
  //   plugin: [
  //     new MyAwesomeWebpackPlugin()
  //   ]
  // }
  configureWebpack: config => { // 配置webpack
    if (process.env.NODE_ENV === 'production') {
      
    } else {
      // dev
    }
  },
  chainWebpack: config => {
    
  }
  


  // 多页面模式
  // pages: {
  //   index: { // page入口的名字
  //     entry: 'src/main.js', //入口默认可以是 main.js、index.js、App.vue 或 app.vue 中的一个。你也可以显式地指定入口文件
  //     template: 'public/index.html', // 模板来源
  //     filename: 'first.html',
  //     title: 'hello cli',
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // }
  
}
