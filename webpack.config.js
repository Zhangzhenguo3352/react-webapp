var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var folderName = process.env.npm_lifecycle_event; //获取当前执行的命令，编译到对应的目录
var OpenBrowserPlugin = require('open-browser-webpack-plugin');// 打开浏览器 插件
var node_modules = path.resolve(__dirname, 'node_modules');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var plugins = [];

if (process.argv.indexOf('-p') > -1) { //生产环境
    plugins.push(new webpack.DefinePlugin({ //编译成生产版本
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
}

plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包
plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:3333' })); // 打开浏览器插件
plugins.push(new webpack.HotModuleReplacementPlugin()); // 启动 热更新 插件
plugins.push(new uglifyJsPlugin({compress: {warnings: false}}));


if (folderName == 'html5plus') {
    plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        filename: 'index.html', //生成的html存放路径，相对于 path
        template: './src/template/html5plus.html', //html模板路径
        hash: true,    //为静态资源生成hash值
    }));
}
else {
    plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        filename: '../index.html', //生成的html存放路径，相对于 path
        template: './src/template/web.html', //html模板路径
        hash: true,    //为静态资源生成hash值
    }));
}

module.exports = {
    // 开发 配置
    devServer:{
        historyApiFallback:true, //开启 历史管理 到达某个目录 ,也就是 webpack --history-api-fallback  不用写了
        port:3333,// 设置开启服务的 端口号
        inline:true // 热更新 开启
    },
     // 入口
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3333', // 服务器的名字，指定了下
            path.resolve(__dirname, 'src/App') // 启动服务时的 入口文件
        ],
        vendor: ['react', 'react-dom'] // 那一个进行 解析
    },
    output: {
        publicPath: folderName == 'html5plus' ? '' : `/${folderName}/`, //编译好的文件，在服务器的路径
        path: __dirname + `/${folderName}`, //编译到当前目录
        filename: '[name].js' //编译后的文件名字
    },
     // 解析那些 文件
    resolve: {
        extension: ['', '.jsx', '.js', '.json'],// 那些文件 后缀 的 自动补全
        // 提高webpack搜索的速度
        alias: { }
    },
    // 启动 开发工具 进行调试
    devtool: 'source-map',
    // 显示 错误的 细节
    'display-error-details': true,
    // 使用externals可以将react分离，然后用<script>单独将react引入
    externals: [],
    module: {
        // 使用module.noParse针对单独的react.min.js这类没有依赖的模块，速度会更快
        noParse: [
            path.resolve(node_modules, 'react/dist/react.min.js'),
            path.resolve(node_modules, 'react-dom/dist/react-dom..min.js')
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['react-hot', 'babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: plugins

};
