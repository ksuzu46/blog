const path = require('path')

module.exports = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')],
    },
}
