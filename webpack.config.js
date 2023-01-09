const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/",
    },
    devtool: 'source-map',
    mode: "development",
    resolve:{
        extensions: [".js",".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(scss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3005,
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};