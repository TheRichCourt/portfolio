const path = require('path');
const globAll = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development';

    const config = {
        entry: './src/js/index.js',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'public/build'),
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].bundle.css',
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: '../index.html',
                hash: true,
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Extracts CSS into a separate file (see plugin above too)
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                    type: 'asset/resource'
                },
            ],
        },
        optimization: {
            minimize: !isDev,
            minimizer: [
                `...`,
                new CssMinimizerPlugin(),
            ],
        },
    };

    // Don't purge in dev - this keeps it possible to change class names in the inspector and see instant results
    if (!isDev) {
        config.plugins.push(
            new PurgeCSSPlugin({
                paths: globAll.sync([
                    './src/**/*.jsx',
                    './src/**/*.js',
                    './public/**/*.html'
                ])
            })
        );
    }

    return config;
};
