const path = require('path');

module.exports = function(env) {
  return ({
    entry: [ './src/index.js' ],
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname + '/dist'),
      filename: 'app.[hash].js'
    },
    plugins: [
      new (require('html-webpack-plugin'))(),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          }
        }
      ],
    },

  });
}

