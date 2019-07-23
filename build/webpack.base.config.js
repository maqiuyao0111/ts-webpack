const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: './src/index.ts',
  // 出口
  output: {
    filename: 'app.js',
  },
  // 所有依赖的模块 配置如何去找所对应的文件 
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], // 用到的后缀列表
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  // 所需要的第三方插件
  plugins: [
    new HtmlWebpackPlugin({ // 打包输出HTML
      template: './src/tpl/index.html'
    })
  ]


}