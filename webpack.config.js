const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval', // When production: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: './client',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], // browserslist (reference github page)
            },
            debug: true
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties'
        ]
      }
    }],
  },
  plugins: [],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  }
};
