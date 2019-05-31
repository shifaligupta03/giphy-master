module.exports={
    entry:'./index.js',
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    devServer:{
        historyApiFallback: true
    },
    devtool:'eval-source-map',
    module:{
        loaders:[
            {
                test: /.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react'],
                    plugins:['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[path][name]__[local]_[hash:base64:5]',
                            },
                    }
                ]
            }
        ]
    }
}