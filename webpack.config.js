
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
    let production = options.mode === 'production';

    let config = {
        entry: './src/js/index.js',
        devtool : production ? false : 'eval-source-map',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'js/main.js'
        },
        devServer: {
            overlay: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.(png|jpeg|svg|jpg)$/,
                    exclude: '/node_modules/',
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                name: "./img/[name].[ext]",
                                // publicPath: '/build/',
                                limit: 1000
                            }
                        },
                        {
                            loader: "img-loader"
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|ttf|eot|otf)$/,
                    exclude: '/node_modules/',
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: './fonts/[name].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: '/node_modules/',
                    use: [
                        production ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                ident: 'postcss',
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                    require('cssnano')()
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: 'true'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            new MiniCssExtractPlugin({
                filename: production ? 'css/[name].css' : '[name].[hash].css',
                chunkFilename: production ? 'css/[id].css' : '[id].[hash].css',
            })
        ]
    };

    return config;

};