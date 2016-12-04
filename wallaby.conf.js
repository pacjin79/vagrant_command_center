// var wallabyWebpack = require("wallaby-webpack");
// var testConfig = require("./config/webpack/test");

// var webpackPostprocessor = wallabyWebpack(testConfig);

var compilerOptions = require("./main_proc_tsconfig.json").compilerOptions;

module.exports = function (wallaby) {
    return {

        compilers: {
            "**/*.ts": wallaby.compilers.typeScript(compilerOptions),
        },
        env: {
           type: "node",
           params: {
               env: "NODE_ENV=test"
           }
        },
        files: [
            {pattern: "node_modules/chai/chai.js", instrument: false},
            "main/**/*.ts",
            "config/**/*.ts",
            { pattern: "main/entry.ts", instrument: false, load: false, ignore: true }
        ],

        tests: [
            "test/unit/main/**/*.ts",
        ],

        testFramework: "mocha",

        setup: () => {
            // to allow `require`-ing local node modules
            // https://github.com/electron/electron/issues/11
            // require("module").globalPaths.push(require("path").join(process.cwd(), "node_modules"));
            // require("module").globalPaths.push(require("path").join(process.cwd(), "main"));
            // console.log("require module path = ", require("module").globalPaths);            
            // window.expect = chai.expect;
        },
        debug: true,
    };
};