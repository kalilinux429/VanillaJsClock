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
            minify: { // Minify HTML for production
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css', // Extracted CSS file name (output to dist folder)
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
    resolve: {
        extensions: ['.js', '.css'], // Automatically resolve these extensions
    },
    mode: 'production', // Set to 'development' or 'production'
};
