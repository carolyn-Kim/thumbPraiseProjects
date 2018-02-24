const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

// var publicPath = 'http://localhost:3000/';
// var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports={
    entry:{
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/add.js')
        ],
        praise: [
            path.join(__dirname, '../src/public/scripts/xpraise.es')
        ]
    },
    output:{
        path:path.join(__dirname,'../build/'),
        // publicPath: publicPath,
        filename:'public/scripts/[name].js'
    },
    module:{
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
                    use: "css-loader"
                })
            }]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'dev'
            }
        }),
        new ExtractTextPlugin('public/stylesheets/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'public/scripts/[name].js',
            minChunks:2
        }),
        new HtmlWebpackPlugin({
            filename:'views/layout.html',
            template:'src/views/layout.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            filename: 'views/index.html',
            template: 'src/views/index.html',
            inject: false,
            chunks: ['index', 'praise','common']
        }), 
        new LiveReloadPlugin({ appendScriptTag: true }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]/* ,
    devServer: {
        //我们在这里对webpack-dev-server进行配置
        contentBase: path.resolve(__dirname, "../build"),
        historyApiFallback:true,
        inline:true,
        hot:true,
        port:8000
    } */
}