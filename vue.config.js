const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'component': '@/component',
        'network': '@/network',
        'views': '@/views',
        //router和store 引用的少，可以不用别名
      }
    }
  }
})
