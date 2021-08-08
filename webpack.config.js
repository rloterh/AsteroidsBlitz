const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true, 
    hot: true,
    https: true,
    noInfo: true,
  },
}