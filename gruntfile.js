module.exports = function(grunt) {

    //Loads all grunt related packages from package.json
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        express: {
            options: {
                port: 9000
            },
            dev: {
                options: {
                    background: false,
                    script: 'server/server.js'
                }
            }
        }
    });

    grunt.registerTask('serve', ['express:dev']);
    grunt.registerTask('default', ['serve']);

};