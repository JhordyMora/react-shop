const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
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
        template: "./public/index.html",
        filename: './index.html',
        })
    ]
};