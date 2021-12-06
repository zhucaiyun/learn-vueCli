const { processSlotOutlet } = require("@vue/compiler-core");

/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-11-23 14:44:59
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-12-03 15:32:38
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
  productionSourceMap: true, // 生产环境生成source map 可以将其设置为false 以加速生产环境构建： source map(http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html) 1、sourcemap是一个信息文件，包含转换后的代码对应的转换前代码的位置，一般用于错误追踪。
  crossorigin: 'anonymous', // what is this ''|'anonymous'|'use-credentials'|undefined 只影响 html-webpack-plugin构建时inject的标签 静态资源也有跨域问题吗？ 同域和跨域对接口和静态资源的影响
  integrity: true, // <script src="/pro/static/file/js/app.js" crossorigin="anonymous" integrity="sha384-T0CXHL+EaFg2W1P2f3WXCyHv55eI2f+x5WVP3/tXKcaMbs8Q/eYSr3OHNAlXGY1K"></script>  cdn文件的安全性 https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity


  // TODO
  configureWebpack: config => { // 配置webpack
    if (process.env.NODE_ENV === 'production') {
      
    } else {
      // dev
    }
  },
  chainWebpack: config => {
    
  },
  css: {
    requireModuleExtension: false, // module的
    // extract: false, // default（生产环境是true，开发环境是false）是否将css提取到一个独立的css中而不是注入到js的inline代码中
    sourceMap: false, // 影响构建性能 true
    loaderOptions: { // loader的选项 也可以在chainWebpack手动指定loader更推荐上面这样做
      css: {},
      scss: {},    
    }
  },
  devServer: {
    // 所有webpack-dev-server的选项
    host: '',
    port: '8080',
    https: '' // 不应该修改publicPath和historyApiFallback
    proxy: {
      '/api': {
        
      }
    }
  },
  

  
  


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
