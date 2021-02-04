
const Timestamp = new Date().getTime();

module.exports = {
  publicPath: '/parent/', // 公共路径
  outputDir: 'dist', // 输出文件名称
  assetsDir: 'static', // 输出静态文件放置的文件夹
  devServer: {
    port: 8080 // 本地启动的端口号
  },
  configureWebpack: config => {
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      console.log(process.env.NODE_ENV)
      // 给js和css配置版本号
      config.output.filename('static/js/[name].' + Timestamp + '.js').end();
      config.output.chunkFilename('static/js/[name].' + Timestamp + '.js').end();
      config.plugin('extract-css').tap(args => [{
        filename: `static/css/[name].${Timestamp}.css`,
        chunkFilename: `static/css/[name].${Timestamp}.css`
      }])
    }
  }
}
