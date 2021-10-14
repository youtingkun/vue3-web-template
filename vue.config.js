const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const address = require("address");
const needHost = address.ip() || "localhost";
const port = process.env.port || process.env.npm_config_port || 8081;
module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  outputDir: "web",
  devServer: {
    host: needHost,
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/api": {
        target: "", // 测试服务器
        changeOrigin: true,
      },
    },
    disableHostCheck: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@assets": path.resolve(__dirname, "src", "assets"),
      },
    },
  },
};
