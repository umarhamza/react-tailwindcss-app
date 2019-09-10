const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        // require('postcss-import'),
        postcss([ require('postcss-easy-import') ]),
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};