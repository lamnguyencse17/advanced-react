const path = require("path");

module.exports = {
  resolve: {
    modules: [path.resolve("./lib"), path.resolve("./node_modules")],
  },
  // entry: ["babel-polyfill", "./lib/renderers/dom.js"],
  entry: {
    vendor: [
      "babel-polyfill",
      "react",
      "react-dom",
      "prop-types",
      "axios",
      "lodash.debounce",
      "lodash.pickby",
    ],
    app: ["./lib/renderers/dom.js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-react', '@babel/preset-env']
      }
    } 
  }],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};
