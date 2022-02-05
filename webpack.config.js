const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (_env, args) => { 
  const isProd = args.mode === "production";

  !isProd && console.log("running in dev mode")
  const mode = args.mode || "development";

  return {
    mode: mode, 
    entry: {
      app: path.join(__dirname, "src", "index.tsx"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    target: "web",
    devtool: !isProd && "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: "/node_modules",
        },
        {
          test: /\.s?(a|c)ss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: { implementation: require("sass") },
            },
          ],
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: 'file-loader',
        },
      ],
    },
    devServer: {
      port: 3000,

    watchFiles: ["src/**"],

    },

    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, "src/index.html"),
      }),
    ],
  }
}
