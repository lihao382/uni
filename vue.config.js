module.exports = {
  publicPath: "./",
  devServer: {
    port: 8080, //设置端口号
    open: true, //启动服务，自动打开浏览器
    https: false, //是否开启https协议，false不开启
    host: "localhost", //主机名
    proxy:{  //配置解决跨域
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_SERVICE_URL, //代理地址
        changeOrigin:true, //开启代理
        pathRewrite:{ //
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  lintOnSave: false, //关闭eslint
  productionSourceMap: false //打包时不生成.map文件
};