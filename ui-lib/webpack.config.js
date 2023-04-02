const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: "umd",
    library: "ui-lib"
  },
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          use: ['ts-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader']
        }
    ]
  },
  externals: {
    react: "react"
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  }
}