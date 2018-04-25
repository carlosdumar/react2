const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].[hash].css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {

    entry: {
      "platzi-video": path.resolve(__dirname, 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.(gif|jpe?g|png)$/,
          loader: 'url-loader?limit=25000',
          query: {
            limit: 10000,
            name: 'static/media/images/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader?sourceMap', 'sass-loader?sourceMap'],
          include: path.resolve(__dirname, '../../')
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?importLoaders=1'
        },
        // Fonts
        {
          test: /\.(eot|woff|woff(2)?|ttf|svg|png|jpg|gif)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          query: {
            name: 'static/media/files/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader'
            },
            {
              loader: 'react-svg-loader',
              query: {
                jsx: true,
              },
            }
          ],
        }
      ]
    },
    plugins
  }
}