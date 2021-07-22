//开发时配置
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = WebpackMerge(baseConfig, {
    //开发测试的配置,运行不需要
    devServer: {
        contentBase: './dist',
        inline: true
    }
})