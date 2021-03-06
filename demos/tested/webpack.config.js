const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/'
  },

  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    historyApiFallback: true
  },
  watch: true,

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  // externals: {
  //   // Use external version of React
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
