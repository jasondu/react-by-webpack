var path = require('path');
var webpack = require('webpack');

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
        publicPath: 'http://localhost:3000/'    // 切记,要不然就会出现"Cannot find update. Need to do a full reload"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loaders: ['react-hot', 'jsx-loader'],
            include: path.join(__dirname, 'src')
        }]
    }
};