const wallabyWebpack = require("wallaby-webpack");
const testConfig = require("./config/webpack/test");
const webpackPostprocess = wallabyWebpack(testConfig);

const compilerOptions = require("./tsconfig.json").compilerOptions;

module.exports = w => {
    return {
        files: [
            { pattern: "node_modules/chai/chai.js", instrument: false },
            { pattern: "node_modules/sinon/lib/sinon.js", instrument: false },
            { pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false },
            { pattern: 'test/testShims.js', instrument: false },
            { pattern: "config/**/*.ts", load: false },
            { pattern: "src/**/*.ts", load: false },
            { pattern: "src/**/*.tsx", load: false },
        ],
        tests: [
            { pattern: "test/unit/render/**/*spec.tsx", load: false },
        ],
        compilers: {
            "**/*.ts": w.compilers.typeScript(compilerOptions),
            "**/*.tsx": w.compilers.typeScript(compilerOptions),
        },
        env: {
            runner: require('phantomjs-prebuilt').path,
            params: {
                runner: '--web-security=false',
                env: "NODE_ENV=test",
            },
        },
        postprocessor: webpackPostprocess,
        setup: () => {
            window.expect = chai.expect;
            window.sinon = sinon;
            window.__moduleBundler.loadTests();
        },
        testFramework: "mocha",
        debug: true,
    };
};