
const Timestamp = new Date().getTime();

module.exports = {
  publicPath: '/parent/', // 公共路径
  outputDir: 'dist', // 输出文件名称
  assetsDir: 'static', // 输出静态文件放置的文件夹
  devServer: {
    port: 8080, // 本地启动的端口号
    proxy: {
      /**
       * target: 'http://192.168.0.44:60139/', 肖文本地
       * target: 'http://192.168.0.41:63100/', 邓诗龙本地
       * target: 'http://192.168.0.53:9999/, 开发环境
       */
      // 测试 http://test.local.yjzhixue.com/
      // 开发 http://dev.local.yjzhixue.com/
      '/api/': {
        target: 'http://dev.local.yjzhixue.com/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/'
        }
      }
    }
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
