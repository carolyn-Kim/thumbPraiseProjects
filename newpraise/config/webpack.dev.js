const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const Manifest = require('webpack-manifest');

module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/add.js')
        ],
        praise: [
            path.join(__dirname, '../src/public/scripts/xpraise.es'),
            path.join(__dirname, '../src/public/scripts/xstar.es')
        ]
    },
    output: {
        path: path.join(__dirname, '../build/'),
        filename: 'public/scripts/[name].js'
    },
    module: {
        rules: [{
            test: /\.es$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": ['es2015']
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }]
            })
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'prod'
            }
        }),
        new ExtractTextPlugin('public/stylesheets/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'public/scripts/[name].js',
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
        new HtmlWebpackPlugin({
            filename: 'views/star.html',
            template: 'src/views/star.html',
            inject: false,
            chunks: ['index', 'praise', 'common']
        }),
        new LiveReloadPlugin({ appendScriptTag: true }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new Manifest({
            cache: [
                //需要缓存的内容
                '../public/stylesheets/praise.css'
            ],
            //Add time in comments. 时间戳
            timestamp: true,
            // 生成的文件名字，选填 
            // The generated file name, optional. 
            filename: 'cache.manifest',
            // 注意*星号前面用空格隔开 
            network: [
                '*'
            ],
            // 注意中间用空格隔开 
            // fallback: ['/ /404.html'],
            // manifest 文件中添加注释 
            // Add notes to manifest file. 
            headcomment: "koatesting",
            master: ['../views/layout.html']
        })

    ],
    devServer: {
        contentBase: path.join(__dirname, "/"),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}