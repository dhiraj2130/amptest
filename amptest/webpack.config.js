/**
 * Created by dhiraj.kumar on 11/11/2016.
 */
module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        address: '0.0.0.0',
        port   : 8085
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    }
};