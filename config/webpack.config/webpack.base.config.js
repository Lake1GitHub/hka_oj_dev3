const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const fs = require("fs");
const webpack = require("webpack");
const WriteFilePlugin = require("write-file-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
let entry = {};
let output = {};
let { keys, values, entries } = Object;

let files = fs.readdirSync("src/routes");
files.forEach(file => {
  let routes = fs.readdirSync(`src/routes/${file}`);
  routes.forEach(route => {
    if (route.endsWith(".js")) {
      entry[`routes/${file}/${route}`] = path.resolve(
        `src/routes/${file}/${route}`
      );
    }
  });
});

files = fs.readdirSync("src/components");
files.forEach(file => {
  let components = fs.readdirSync(`src/components/${file}`);
  components.forEach(component => {
    if (component.endsWith(".js")) {
      entry[`components/${file}/${component}`] = path.resolve(
        `src/components/${file}/${component}`
      );
    }
  });
});

files = fs.readdirSync("src");
files.forEach(file => {
  let newFile = path.resolve("src", file);
  if (fs.statSync(newFile).isFile()) {
    if (newFile.endsWith(".js")) {
      entry[`${file}`] = path.resolve(`src/${file}`);
    }
  }
});

module.exports = {
  entry: entry,
  output: {
    filename: "[name]",
    path: path.resolve("dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.styl(us)?$/,
        use: ["vue-style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin(),
    new CleanWebpackPlugin(['dist/*.*'], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
