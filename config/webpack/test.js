const baseConfig = require('./base'),
    webpack = require('webpack'),
    _ = require('lodash'),
    path = require('path');

const testConfig = baseConfig;
testConfig.resolve.alias = {
    'sinon': 'sinon/pkg/sinon'
};



testConfig.output = {};

// Line below is needed for sinon to work with webpack https://github.com/webpack/webpack/issues/177
testConfig.module.loaders.push(
    { test: /sinon.*\.js$/, loader: "imports?define=>false,require=>false" }
);
//excluding electron module for unit test
testConfig.module.noParse = [
    /node_modules\/sinon\//,
    /node_modules\/electron\//
];

testConfig.externals = {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
};

testConfig.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('test'),
    })
];

module.exports = testConfig;