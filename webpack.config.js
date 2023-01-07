const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: [".js","jsx"],
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.html$/,
            use: "html-loader"
        }
        ]
    },
    devServer: {
        'static': {
        directory: './dist'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
        templateContent: "./public/index.html",
        filename: 'index.html',
        })
    ]
};