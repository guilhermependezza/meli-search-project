const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const { port } = require('../../constants/client');

const sourcePath = path.resolve(process.cwd(), 'client/src');
const buildPath = path.resolve(process.cwd(), 'client');

const config = {
  context: sourcePath,
  entry: {
    app: ['babel-polyfill', 'index.jsx']
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
    alias: {
      components: `${sourcePath}/components`,
      styles: path.resolve(__dirname, `${sourcePath}/styles`),
      images: path.resolve(__dirname, `${sourcePath}/images`)
    },
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
      },

      // configure eslint
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        include: sourcePath,
        loader: 'eslint-loader',
        options: {
          configFile: `${process.cwd()}/.eslintrc.json`,
          fix: true // autofix eslint errors
        }
      },

      // configure image loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },

      // configure sass loader
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: true }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: [autoprefixer] }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
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
