const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    devtool: 'source-map',

    entry: [
          'webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/only-dev-server',
          './src/index.js'
        ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './dist',
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/index.html' }
        ])
    ]
}
