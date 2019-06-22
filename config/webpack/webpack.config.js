const port = 9090;

const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const sourcePath = path.resolve(process.cwd(), 'client/src');
const buildPath = path.resolve(process.cwd(), 'client');

const config = {
  context: sourcePath,
  entry: {
    app: ['babel-polyfill', 'index.js'],
  },
  devtool: 'source-map',
  output: {
    filename: 'static/js/[chunkhash:8].[name].js',
    path: buildPath,
    publicPath: '/'
  },
  devServer: {
    contentBase: sourcePath,
    compress: true,
    historyApiFallback: true,
    port
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
        'node_modules',
        sourcePath
    ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: sourcePath,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, `${sourcePath}/index.html`),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    })
  ]

};

module.exports = config;
