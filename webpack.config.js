const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$|css/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = {
    mode: 'development',
  };