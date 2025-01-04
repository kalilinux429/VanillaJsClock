const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/main.js', // Entry point for your app
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
        clean: true, // Clean the output folder before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Match CSS files
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Process CSS
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Match image files
                type: 'asset/resource', // Handle images
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Source HTML file
        }),
        new MiniCssExtractPlugin({
            filename: './src/style.css', // Extracted CSS file name
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(), // Minify JavaScript
            new CssMinimizerPlugin(), // Minify CSS
        ],
    },
    devServer: {
        static: './dist', // Serve files from dist folder
        port: 3000, // Server port
        open: true, // Automatically open the browser
    },
    mode: 'production', // Set to 'development' or 'production'
};
