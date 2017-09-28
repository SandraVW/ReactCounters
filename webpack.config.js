const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    devtool: 'source-map',

    entry: [
          'webpack-dev-server/client?http://localhost:7070',
          'webpack/hot/only-dev-server',
          'babel-polyfill',
          './src/index.js'

        ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.join(__dirname, '../Web/src'),
                    path.join(__dirname, '../Web/node_modules/powergrid')
                ],
                loader: 'babel'
            },
            {
              test: /\.css/,
              loaders: ['style', 'css'],
              include:[
                 path.resolve(__dirname, 'src'),
                 path.join(__dirname, '../Web/node_modules/powergrid')
             ]
           },{

               test: /\.scss$/,
               loaders: ['style', 'css', 'sass']
           },
          //  {
          //      test: /\.css$/,
          //      loader: 'style-loader!css-loader'
          //  },
           {
               test: /\.(jpg|png)$/,
               loader: 'url-loader'
           },
           {
               test: /\.(ttf|eot|svg|gif|woff(2)?)(\?[a-z0-9=&.]+)?$/,
               loader: 'url-loader'
           },
           {
               test: /\.html$/,
               loader: 'html'
           },
           {
               test: /\.json$/,
               loader: 'json'
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
        port:7070,
        hot: true,
        historyApiFallback: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/index.html' }
        ])
    ]
}
