const baseConfig = require('./base'),
    webpack = require('webpack'),
    _ = require('lodash'),
    path = require('path');

const testConfig = baseConfig;
testConfig.resolve.alias = {
    'sinon': 'sinon/pkg/sinon'
};

testConfig.output = {};

//excluding electron module for unit test
testConfig.module.noParse = [
    /node_modules\/electron\//
];

testConfig.externals = {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
};

module.exports = testConfig;