const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                implementation: sass, 
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css' : 'asset/scss/styles.scss'
                }
            }
        }
    });

    //loading grunt
    require ('load-grunt-tasks')(grunt);

    //custom tasks
    grunt.registerTask ('default', ['sass']);
}