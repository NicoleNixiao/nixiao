module.exports = {
    devtool:"eval-source-map",
    entry: __dirname + "/public/js/index.js",
    output:{
        path:__dirname + "/public/js",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./views",//本地服务器所加载的页面所在的目录
        historyApiFallback:false,//跳转
        inline:true,//实时刷新
        port:3000
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"bable-loader",
                    options:{
                        presets:[
                            "env","react"
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    }
}