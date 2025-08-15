const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "images"),
          to: path.resolve(__dirname, "dist/images"),
          filter: (resourcePath) => {
            return !resourcePath.includes(path.normalize("images/icons"));
          },
        },
      ],
    }),
    new MiniCssExtractPlugin(),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },

      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "images/icons"),
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              spriteFilename: "sprite.svg",
              symbolId: "[name]",
              publicPath: "/",
            },
          },
          {
            loader: "svgo-loader",
            options: {
              plugins: [
                {
                  name: "removeAttrs",
                  params: {
                    attrs:
                      "(fill|stroke|stroke-width|stroke-linecap|stroke-linejoin)",
                  },
                },
                {
                  name: "addAttributesToSVGElement",
                  params: {
                    attributes: [
                      { fill: "currentFill" },
                      { stroke: "currentStroke" },
                      { "stroke-width": "2" },
                    ],
                  },
                },
                "removeTitle",
                "removeDesc",
              ],
            },
          },
        ],
      },
    ],
  },
};
