const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader只负责将css文件进行加载
                //style-loader负责将样式添加到DOM中
                //使用多个loader是从右向读取
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 13000
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                //exclude:排除
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归aaa所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        //打包过程中需要
        // new UglifyjsWebpackPlugin()

    ],
    //开发测试的配置,运行不需要
    devServer: {
        contentBase: './dist',
        inline: true
    }

}