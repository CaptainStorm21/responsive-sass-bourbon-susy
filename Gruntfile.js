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
        },
        /**
         * Grunt Contrib Watch
         * Monitor the changes
         */

         watch: {
             sass: {
                 files: [
                     'asset/scss/*.scss'
                 ],
                 tasks:[
                     'sass'
                 ]
             }
         }
    });

    //loading grunt
    require ('load-grunt-tasks')(grunt);

    //custom tasks
    grunt.registerTask ('default', ['watch']);
}