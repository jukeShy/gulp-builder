const {src, dest} = require('gulp')
const fi = require('gulp-file-include');

const settings = {
    prefix: '@@',
    basepath: '@file'
}

const htmlInclude = (cb) => {
    return src('dev/*.html')
        .pipe(fi(settings))
        .pipe(dest('public/'))
}

module.exports = htmlInclude