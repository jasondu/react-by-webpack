var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000', // 用以接收Webpack推送过来的代码模块 *和在server.js中启动Webpack开发服务器的地址匹配*
        'webpack/hot/only-dev-server', // 用以接收Webpack推送过来的代码模块
        './src/app.jsx'     // 入口
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
        chunkFilename: '[chunkhash:8].chunk.min.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index',
            inject: 'body',
            chunks: ['bundle']
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['react-hot', 'jsx-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!postcss!less',
                include: path.join(__dirname, 'src')
            }
        ]
    },
    postcss: [autoprefixer]
};