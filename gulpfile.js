const { series, parallel, watch } = require('gulp')
const {server, reload} = require('./gulptasks/browserSync')
const buildSass = require('./gulptasks/scss')
const clean = require('./gulptasks/clean')
const buildJs = require('./gulptasks/babel')
const htmlInclude = require('./gulptasks/htmlInclude')
const minifyImages = require('./gulptasks/images')


exports.sass = buildSass
exports.clean = clean
exports.server = server
exports.babel = buildJs
exports.htmlInclude = htmlInclude
exports.minify = minifyImages

exports.default = () => {
    server(),
    clean(),
    buildSass(),
    buildJs(),
    minifyImages(),
    htmlInclude(),
    watch('dev/**/*', 
        series(
            clean, 
            parallel(
                buildSass, 
                buildJs, 
            ),
            htmlInclude
        )
    ).on('change', reload)
}