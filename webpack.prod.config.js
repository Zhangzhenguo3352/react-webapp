'use strict';

var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");


if (process.argv.indexOf('-p') > -1) { //生产环境
    plugins.push(new webpack.DefinePlugin({ //编译成生产版本
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
}

plugins.push(new ExtractTextPlugin("main.[hash:8].css", {allChunks: true,disable: false}));
plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash:8].js'));
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
    entry: [
      path.resolve(__dirname, 'src/App') // 启动服务时的 入口文件
    ],
    output: {
        publicPath: folderName == 'html5plus' ? '' : `/${folderName}/`, //编译好的文件，在服务器的路径
        path: __dirname + `/${folderName}`, //编译到当前目录
        filename: '[name].js' //编译后的文件名字
    },
    resolve: {
      extension: ['', '.jsx', '.js', '.json'],
      alias: {}
    },
    'display-error-details': true,
    module: {
      noParse: [],
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
