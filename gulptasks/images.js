const {src, dest} = require('gulp')
const imagemin = require('gulp-imagemin')

const settings = [
    imagemin.gifsicle({ interlaced: true }),
    imagemin.jpegtran({ progressive: true }),
    imagemin.optipng({ optimizationLevel: 7 }),
    imagemin.svgo({
        plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
        ]
    })
]

const minifyImages = (cb) => {
    return src('dev/images/**/*')
        .pipe(imagemin(settings))
        .pipe(dest('public/images'))
}

module.exports = minifyImages