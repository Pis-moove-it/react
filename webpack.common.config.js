const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|__tests__)/,
                loader: 'babel-loader',
                options: {presets: ['env', 'react'], plugins: ['styled-components', 'transform-object-rest-spread']},
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
               test: /\.(png|jpg|gif)$/i,
               use: [
                   {
                       loader: 'url-loader',
                       options: {
                           limit: 8192
                       }
                   }
               ]
            },
        ],
    },
    resolve: {extensions: ['*', '.js', '.jsx']},
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
};
