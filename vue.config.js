'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        index: {
            entry: 'src/pages/index/index.js',
            template: 'src/pages/index/index.html',
            filename: 'index.html',
            title: 'new title',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}




