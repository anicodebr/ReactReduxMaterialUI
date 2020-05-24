const path = require('path');

module.exports = {
    webpack: {
        alias: {
            "Redux@Constants": path.resolve(__dirname, 'src/redux/_constants'),
            "Redux@Actions": path.resolve(__dirname, 'src/redux/_actions'),
            "Redux@Helpers": path.resolve(__dirname, 'src/redux/_helpers'),
            "@Components": path.resolve(__dirname, 'src/components'),
            "@Utils": path.resolve(__dirname, 'src/utils'),
            "@Assets": path.resolve(__dirname, 'src/assets'),
            "@App": path.resolve(__dirname, 'src/App.js')
        },
    },
}