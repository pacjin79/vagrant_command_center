const argv = require('yargs').argv;
const path = require('path');
const WebpackConfig = require('./config/webpack/test');

module.exports = (config) => {
    config.set({
        // only use PhantomJS for our 'test' browser
        browsers: ['Chrome'],
        // just run once by default unless --watch flag is passed
        singleRun: !argv.watch,
        // which karma frameworks do we want integrated
        frameworks: ['mocha', 'chai'],
        // displays tests in a nice readable format
        reporters: ['spec'],
        files: [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            './test/unit/render/**/*.ts',
            './test/unit/render/**/*.tsx'
        ],
        preprocessors: {
           ['./test/unit/render/**/*.ts']: ['webpack', 'sourcemap'],
           ['./test/unit/render/**/*.tsx']: ['webpack', 'sourcemap']
        },
        webpack: WebpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        // tell karma all the plugins we're going to be using to prevent warnings
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-spec-reporter',
            'karma-typescript',
            'karma-sourcemap-loader'
        ]
    });
}