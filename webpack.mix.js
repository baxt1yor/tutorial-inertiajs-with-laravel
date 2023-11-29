const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
        },
    },
    output: {
        chunkFilename: "js/[name].js?id=[chunkhash]",
    },
});

mix.js("resources/js/app.js", "public/js")
    .vue({version: 3})
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .version();
