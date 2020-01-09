const del = require('del')

const clean = cb => {
    return del([
        'public/css/**/*',
        'public/js/**/*'
    ])
}

module.exports = clean