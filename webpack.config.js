const path = require("path");
// extract-text-webpack-plugin 已弃用
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// webpack 中的配置都有默认值，从而实现了开箱即用，零配置的特点

module.exports = {
  mode: 'development',
  // entry: {
  //   bundle1: './src/main.ts',
  //   bundle2: './src/main1.ts'
  // },
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
          'css-loader',
          /**
           * css 兼容性处理: post --> postcss-loader postcss-preset-env
           */
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // postcss 的插件
                require('postcss-preset-env')()
              ]
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          // you forgot to set the `loader` property
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // {
      //   test: /\.ts$/,
      //   use: ['ts-loader']
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `main.css`
    }),
    new HtmlWebpackPlugin({
      title: 'my app',
      template: './public/index.html',
      output: 'css',
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin()
    // 压缩 css 代码
    // new OptimizeCssAssetsWebpackPlugin()
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
    extensions: ['.ts', '.js'],
    //  配置 webpack 去哪些目录下找第三方包
    modules: ['node_modules'],
  },
  externals: {
    jquery: 'jQuery'
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
  target: ['web', 'es5'],
  // target: 'web',
};