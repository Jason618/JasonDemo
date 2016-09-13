module.exports = {
    entry: {
        index : "./src/entry.js",
        page1 : './src/page1.js',
        page2 : ['./src/page21.js','./src/page22.js']
    },
    output: {
        path: './build',
        //filename: 'bundle.js'
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                // I want to uglify with mangling only app files, not thirdparty libs
                test: /\.js$/,
                //exclude: /.spec.js/, // excluding .spec files
                loader: "uglify"
            }
        ]
    }
};