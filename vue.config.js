module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    //跨域
    open: true,
    host: 'localhost',
    https: false,
    proxy: {
      // 配置跨域处理 可以设置多个
      '/api': {
        target: 'http://localhost:8888/linux',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

