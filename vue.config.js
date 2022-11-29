const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   publicPath, // 和 publicPath 保持一致
  //   port: 8999,
  //   proxy: {
  //     '/mock': {
  //       target: 'http://localhost:8080',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/mock": ""
  //       }
  //     },
  //   }
  // },
})
