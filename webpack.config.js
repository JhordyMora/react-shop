const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "./",
    },
    devtool: 'source-map',
    mode: "development",
    resolve:{
        extensions: [".js",".jsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@containers": path.resolve(__dirname, "src/Containers/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@icons": path.resolve(__dirname, "./src/assets/icons/"),
            "@logos": path.resolve(__dirname, "./src/assets/logos/"),
        }
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'assets',
                use: [
                    {
                        loader: 'file-loader',//['svg-url-loader','file-loader'],
                        options: {
                            limit: 10000,
                        }
                    }
                ]
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