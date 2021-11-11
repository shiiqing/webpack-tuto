const path = require("path");
// extract-text-webpack-plugin 已弃用
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// webpack 中的配置都有默认值，从而实现了开箱即用，零配置的特点

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`
    })
  ],
  resolve: {
    alias: {
      // 使用 别名代替一些绝对路径，方便路径管理
      utils: path.resolve(__dirname, 'src/utils')
    },
    // 设定 从npm 导包时按何种字段导入模块
    mainFields: ['browser', 'module', 'main'],
    // 解析目录时要使用的文件名，省略文件名
    mainFiles: ['index'],
    // 解析未带后缀的文件时的默认顺序
    extensions: ['.js'],
    //  配置 webpack 去哪些目录下找第三方包
    modules: ['node_modules'],
  },
  //  只用通过 DevServer 启动webpack 此配置才会奏效
  devServer: {
    //  是否开启g-zip 压缩模式
    compress: true,
    //  服务监听地址
    host: '0.0.0.0',
    //  服务器 端口号
    port: 8089
  },
  // 是否生产source-map
  devtool: 'source-map',
  // 目标对象
  target: 'web',
};