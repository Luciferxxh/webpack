module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    devtool: 'eval-source-map',
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    mode: 'development',
    devServer: {
        static: "./public",//本地服务器所加载的页面所在的目录
        hot: true, // 实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}