const withLess = require('@zeit/next-less')
const withCSS = require("@zeit/next-css");

const config = {
  cssModules:true,
  cssLoaderOptions: {
    importLoaders:1,
    localIdentName:"[local]_[hash:base64:5]",
  }
}

module.exports = withLess(withCSS(config))

// const withPlugins = require("next-compose-plugins");
// const withCSS = require("@zeit/next-css");
// const withLess = require("@zeit/next-less");

// const config = {
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: "[local]_[hash:base64:5]",
//     }
// };
// module.exports = withLess(withCSS(config))