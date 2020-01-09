const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const sourcemap = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

sass.compiler = require('node-sass')

const sassSettings = {
    outputStyle: 'expanded'
}

const prefixerSettings = {
    browsers: ['last 5 versions'],
    cascade: false,
    grid: 'autoplace',
    remove: false
}

const buildSass = cb => {
    return src('dev/scss/*.scss')
        .pipe(sourcemap.init())
        .pipe(sass(sassSettings).on('error', sass.logError))
        .pipe(autoprefixer(prefixerSettings))
        .pipe(sourcemap.write())
        .pipe(dest('public/css'))
}

module.exports = buildSass