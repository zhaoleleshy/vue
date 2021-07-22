//生产配置
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        //打包过程中需要
        new uglifyjsWebpackPlugin()
    ]
})


