// /*
//  * @Author: Zhuxb ZhuxbClouds@gmail.com
//  * @Date: 2022-07-02 13:13:38
//  * @LastEditors: Zhuxb ZhuxbClouds@gmail.com
//  * @LastEditTime: 2022-07-05 16:02:20
//  * @FilePath: \huashuo-CardList\vue.config.js
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
})
