const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry:[
        './app/index.js'
    ],
    output:{
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};