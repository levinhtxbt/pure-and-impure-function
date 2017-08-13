var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app:'./js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }, 
    stats : {
        colors: true
    },
    devtool: 'source-map'
}