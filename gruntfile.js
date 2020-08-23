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
        },
        concurrent: {
            dev: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: [
                    'express:dev',
                    'shell:devWatch'
                ]
            }
        },
        shell: {
            devWatch: {
                command: [
                    'echo "$(tput bold)Building the Angular application. Please wait until this completes before trying to access the served application$(tput sgr0)"',
                    'ng build --watch'
                ].join('&&')
            } 
        }
    });

    grunt.registerTask('serve', ['concurrent:dev']);
    grunt.registerTask('default', ['serve']);

};