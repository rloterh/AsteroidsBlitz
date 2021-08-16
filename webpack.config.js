const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "app.js",
    path:path.resolve(__dirname, "dist"),
    assetModuleFilename: '[name][ext]'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
    ],
  },
  devServer: {
    port: 9000,
    contentBase: "./dist",
    hot: true,
  },
}


