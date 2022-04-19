const base =  require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
    mode: "development",
    entry: {
        index: './lib/example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-ui',
            template: 'index.html'
        })
    ],
})