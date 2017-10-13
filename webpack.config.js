const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './app'),

    entry: {
        javascript: "./js/index.js",
        html: "./index.html",
    },

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        root: path.resolve(__dirname, './app/js'),
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            }
        ],
    },
};
