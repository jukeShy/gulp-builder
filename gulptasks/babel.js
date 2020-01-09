const {src, dest} = require('gulp')
const sourcemap = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const include = require('gulp-include')

const settings = {
    presets: ['@babel/env']
}

const buildJs = (cb) => {
    return src('dev/js/app.js')
        .pipe(include())
            .on('error', console.log)
        .pipe(sourcemap.init())
        .pipe(babel(settings))
        .pipe(sourcemap.write())
        .pipe(dest('public/js'))
}

module.exports = buildJs