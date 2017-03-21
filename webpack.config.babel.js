import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
  entry: './index.js',
  output: {
    filename: './dist/bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }, {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/style.css',
    }),
  ],
};

export default config;
