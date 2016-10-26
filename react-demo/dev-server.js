/**
 * Created by lichengjun on 16/10/24.
 */

//启动一个http server 并且需要实时监控文件变化，实时更新页面
// npm install webpack-dev-server --save-dev
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
//需要一个webpack配置文件
var webpackConfig = require('./webpack.config');

//inline hot module replacement
webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server");

//启动服务
var server = new webpackDevServer(webpack(webpackConfig),{
    publicPath:webpackConfig.output.publicPath,
    hot: true
});

//将其他路由，全部返回index.html
//server.app.get('*', function (req,res) {
//    res.sendFile(__dirname + '/index.html')
//});

server.listen(3000);




