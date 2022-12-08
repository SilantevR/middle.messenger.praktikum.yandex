const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            handlebars: 'handlebars/dist/handlebars.js',
        },
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: './src/assets/favicon/logo_32x32.png',
            mode: 'webapp',
            devMode: 'webapp',
            prefix: 'assets/favicons/',
            cache: true,
            inject: htmlPlugin => {
                return true
                
            },
            favicons: {
                background: "#fff",
                theme_color: "#333"
            }
        }),

        new htmlPlugin({
            title: 'Conector',
            template: './src/index.html',
            inject: 'head',
        }),
    ],
};