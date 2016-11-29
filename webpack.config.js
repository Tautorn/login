// var webpack = require('webpack');

/*module.exports = {
    entry:  ["webpack/hot/dev-server", "./src/index.js"],
    output: {
        path: './dist',
        filename: "js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: { stage: 1 } },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.css$/, loader: "style!css" },
            // { test: /\.jade$/, loader: "file?name=pages/[name].html!jade-html?pretty" },
            { test: /\.svg$/, loader: 'file-loader' },
            { test: /\.gif$/, loader: 'file-loader' },
            { test: /\.ttf$/, loader: 'file-loader' },
            { test: /\.eot$/, loader: 'file-loader' },
            { test: /\.woff$/, loader: 'file-loader' },
            { test: /\.png$/, loader: 'file-loader?name=img/[name].[ext]' }
        ]
    },
    resolve: {
        modulesDirectories: ["src", "node_modules"]
    },
    plugins: [
       new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
   ]
};*/