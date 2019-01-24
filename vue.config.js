const path = require("path");

module.exports = {
  configureWebpack: {
    name: path.resolve(__dirname, "Directus"),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
        "@src": path.resolve(__dirname, "src"),
        "@router": path.resolve(__dirname, "src/router"),
        "@views": path.resolve(__dirname, "src/router/views"),
        "@layouts": path.resolve(__dirname, "src/router/layouts"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@state": path.resolve(__dirname, "src/state"),
        "@design": path.resolve(__dirname, "src/design/index.scss"),
      },
    },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
};
