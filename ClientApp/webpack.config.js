const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  
module.exports = {
    entry: {
        site: [
            './src/js/site.js',
            './src/js/site1.js'
        ],
        bootstrap_js: './src/js/bootstrap_js.js',
        validation: './src/js/validation.js',
        index: './src/js/index.js'
    },
    output: {
        clean: true,
        filename: '[name].entry.js',
        path: path.resolve(__dirname, '..', 'wwwroot', 'dist')
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
            },
            {
                test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
                type: 'asset'
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};
