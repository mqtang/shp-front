'use strict'
const path = require('path')
const conf = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : process.env.VUE_APP_T_VAL,
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        index: 'index.html',
        port: 9190,
        open: true,
        hot: true
    },
    pages: {
        index: {
            entry: 'src/pages/index/index.js',
            template: 'src/pages/index/index.html',
            filename: 'index.html',
            title: conf.title,
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}




