
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