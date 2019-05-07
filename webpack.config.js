const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    wheels: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname + 'dist/lib'),
    library: 'react-wheels',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}