'use strict'
const path = require('path')
const conf = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' : process.env.VUE_APP_T_VAL,
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/': {
                target: 'http://127.0.0.1:8077/',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '/': ''
                }
            }
        },
        index: 'index.html',
        port: 9190,
        open: true,
        hot: true
    },
    configureWebpack: {
        name: conf.title,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}




