/*
 * @Description: 
 * @Author: Libra
 * @Date: 2021-02-01 10:15:16
 * @LastEditors: Libra
 */
module.exports = {
  publicPath: '/yl-form-design',
  outputDir: 'docs',
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    // extract: false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    port: 8086
  }
}