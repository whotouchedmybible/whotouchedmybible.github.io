// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template

var CONFIG = {
    indexHtmlTemplate: "./index.html",
    fsharpEntry: "./src/App.fsproj",
    cssEntries: [
        "./src/style.scss"
    ],
    outputDir: "./deploy",
    assetsDir: "./public",
    devServerPort: 8080,
    // When using webpack-dev-server, you may need to redirect some calls
    // to a external API server. See https://webpack.js.org/configuration/dev-server/#devserver-proxy
    devServerProxy: undefined,
    // Use babel-preset-env to generate JS compatible with most-used browsers.
    // More info at https://babeljs.io/docs/en/next/babel-preset-env.html
    babel: {
        presets: [
            ["@babel/preset-env", {
                "targets": {
                    "browsers": ["last 2 versions"]
                },
                "modules": false,
                "useBuiltIns": "usage",
            }]
        ],
    }
}

// If we're running the webpack-dev-server, assume we're in development mode
var isProduction = !process.argv.find(v => v.indexOf('webpack-dev-server') !== -1);
console.log("Bundling for " + (isProduction ? "production" : "development") + "...");

var path = require("path");

module.exports = {
    mode: isProduction ? "production" : "development",
	devtool: isProduction ? "source-map" : "eval-source-map",
	entry: "./src/App.fsproj",
    output: {
        path: path.join(__dirname, CONFIG.outputDir),
        filename: isProduction ? '[name].[hash].js' : '[name].js'
    },
    devServer: {
        publicPath: "/",
        contentBase: CONFIG.assetsDir,
        port: CONFIG.devServerPort,
        proxy: CONFIG.devServerProxy,
        hot: true,
        inline: true
    },
    module: {
        rules: [{
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
        }]
    }
}