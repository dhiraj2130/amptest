/**
 * Created by dhiraj.kumar on 11/11/2016.
 */

var webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path              = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var PATHS = {
    app  : __dirname + '/app',
    build: __dirname + '/build'
};

var aliases = {
    'angular': require.resolve('angular'),
    'bootstrap': require.resolve('bootstrap/dist/js/bootstrap.js')

}

module.exports = {
    context  : PATHS.app,
    entry: {
        app: [
            'bootstrap-loader',
            'webpack/hot/dev-server',
            './src/core/bootstrap.js'
        ]
    },
    output: {
         path    : PATHS.build,
        filename: "bundle.js"
    },
    devServer: {
        address: '0.0.0.0',
        port   : 8085
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html-loader"
        },{
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test  : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test  : /\.(woff|woff2)$/,
            loader: "url?prefix=font/&limit=5000"
        }, {
            test  : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test  : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }, { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'file-loader?limit=30000&name=[name]-[hash].[ext]'
        }, { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test  : /\.scss$/,
                loader: 'style!css!sass'
            }

        ]
    },
    plugins  : [
        // new ExtractTextPlugin("style.css", {
        //     allChunks: true
        // }),
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.app + '/index.html'
        }),
        new webpack.ProvidePlugin({
            $     : "jquery",
            jQuery: "jquery"
        })
    ]
};