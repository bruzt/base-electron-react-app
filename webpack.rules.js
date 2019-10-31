module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(m?js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  },
  {
    test: /\.(png|jpg|jpe?g|gif|ico|ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "fonts/",
      publicPath: "../fonts/"
    }
  }
];