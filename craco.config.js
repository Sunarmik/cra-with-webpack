var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  webpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
  }
};
