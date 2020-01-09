const browserSync = require('browser-sync')

const settings = {
    server: {
        baseDir: 'public/',
    },
}   

const server = cb => {
    browserSync.init(settings)
}   

exports.server = server
exports.reload = browserSync.reload