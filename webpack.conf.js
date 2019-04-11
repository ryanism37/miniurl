const path = require('path');

const rootPath = path.resolve(__dirname, '');
module.exports = {
    entry: path.resolve(rootPath, '', 'index.js'),
    output: {
        filename: 'miniurl.min.js',
        path: path.resolve(rootPath, 'dist'),
        library: 'miniurl',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};
