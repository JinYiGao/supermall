/*
 * @Author: your name
 * @Date: 2020-10-08 16:24:42
 * @LastEditTime: 2020-10-08 16:29:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MyVue-CLI\supermall\vue.config.js
 */
modules.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network'
      }
    }
  }
}