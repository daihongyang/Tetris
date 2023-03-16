const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve("./dist"),
        filename: "script/bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin()//清理目录后打包
    ],
    mode: 'production',
    module: {
        rules: [
            { test: /.ts$/, loader: "ts-loader" }
        ]
    },
    resolve:{
        extensions: [".ts",".js"]
    }
}