const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin =require('webpack-livereload-plugin');


module.exports={
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/add.js')
        ],
        praise: [
            path.join(__dirname, '../src/public/scripts/xpraise.es')
        ]
    },
    output: {
        path: path.join(__dirname, '../build/'),
        // publicPath: publicPath,
        filename: 'public/scripts/[name]-[hash:5].js'
    },
    module: {
        rules: [{
            test: /\.es$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": ['es2015',
                        'stage-0'
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader:'css-loader',
                    options:{
                        minimize:true
                    }
                }]
            })
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'prod'
            }
        }),
        new ExtractTextPlugin('public/stylesheets/[name]-[hash:5].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'public/scripts/[name]-[hash:5].js',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            filename: 'views/layout.html',
            template: 'src/views/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'views/index.html',
            template: 'src/views/index.html',
            inject: false,
            chunks: ['index', 'praise', 'common']
        }), 
        new LiveReloadPlugin({ appendScriptTag:true}),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
                drop_console:false
            }
        })
    ]
}