const path = require("path");
// extract-text-webpack-plugin 已弃用
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  
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
  ]
};