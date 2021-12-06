/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-11-03 17:18:11
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-12-03 16:44:42
 * @Description  : 测试快速原型开发
 */
console.log('@vue/cli-service-global')

console.log('vue serve')
// 必须以app.vue为入口Valid entry file should be one of: main.js, index.js, App.vue or app.vue.
// const openUrl = (() => {
//   return inApp
//     ? url => {
//       openPage({
//         scheme: `xdfstudent://moonBridge/universal?bgType=1&url=${encodeURIComponent(url)}`
//       })
//     }
//     : (url, isReplace) => sendMessage({
//       url,
//       target: '_self',
//       replace: isReplace,
//       eventName: 'openNewPage'
//     })
// })()

const testParams = (() => {
  return (url, h) => { console.log(url,h)}
})()

testParams(1,3)