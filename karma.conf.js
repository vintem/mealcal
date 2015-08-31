// Karma configuration
// Generated on Mon Aug 31 2015 11:57:26 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    jspm: {
      loadFiles: ['src/**/*.ts', 'test/unit/**/*.js'],
      paths: {
        '*': '*.js',
      },
    },

    // list of files / patterns to load in the browser
    files: [],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.ts': ['typescript'],
      'test/unit/**/*.js': ['babel'],
    },

    typescriptPreprocessor: {
      options: {
        sourceMap: false,
        target: 'ES5',
        module: 'system',
        removeComments: true,
        noResolve: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
      },
      typings: [
        'typings/core-js/core-js.d.ts',
        'typings/datejs/datejs.d.ts',
        'typings/node/node.d.ts',
        'typings/aurelia/*.ts',
      ],
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      },
    },

    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
        modules: 'system',
        moduleIds: false,
        optional: [
          'es7.decorators',
          'es7.classProperties',
        ],
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
  });
};
