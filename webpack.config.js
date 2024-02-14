const path = require("path");
module.exports = {
    resolve: {
        alias: {
            ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
            '@': path.resolve('resources/js')
        },
    },
    output: {
        chunkFilename: "js/[name].js?id=[chunkhash]",
    },
}
