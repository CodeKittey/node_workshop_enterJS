// *** eslint hint for "module"
/* global module*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        path: {
            build: 'build/'
        },
        eslint: {
            files: {
                src: [
                    'test/**/*.js',
                    'src/js/**/*.js',
                    '!node_modules/**/*',
                    'build/**'
                ]
            }
        },
        concat: {
            production: {
                files: [{
                    src: 'build/src/js/**/*.js',
                    dest: 'build/src/js/release.js'
                }]
            }
        },
        uglify: {
            production: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'build/src/js'
                }]
            }
        },
        copy: {
            production: {
                files: [{
                    expand: true,
                    flatten: false,
                    src: [
                        'src/css/**',           // *** node js files and locales
                        'src/images/**',   // *** all images
                        'src/*.html'], //
                    dest: 'build/'    // *** they all go into the build directory
                },
                {
                    expand: true,
                    flatten: false,
                    src: ['src/bower.json'],
                    dest: 'build/'              // *** they all go into the build directory
                }
                ]}
        },
        mochaTest: {
            coverage: {
                options: {
                    reporter: 'tap',
                    clearRequireCache: true,
                    captureFile: 'reports/coverage.tap',
                    timeout: 30000
                },
                src: ['test/server/*.js']
            },
            production: {
                options: {
                    reporter: 'tap',
                    clearRequireCache: true,
                    captureFile: 'reports/production.tap',
                    timeout: 30000
                },
                src: ['test/*.js']
            },
            development: {
                options: {
                    reporter: 'spec',
                    clearRequireCache: true,
                    timeout: 30000,
                    bail: true
                },
                src: ['test/*.js']
            }
        }
    });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('unittest-production', [
        'mochaTest:production'
    ]);

    grunt.registerTask('test-jenkins', [
        'mochaTest:coverage'
    ]);

    grunt.registerTask('linting', [
        'eslint'
    ]);

  // Default task(s).
    grunt.registerTask('build-production', [
        'eslint',
        'unittest-production',
        'copy',
        'uglify',
        'concat'
    ]);
};
