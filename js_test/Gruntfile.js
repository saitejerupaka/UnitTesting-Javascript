
module.exports = function(grunt) {

grunt.initConfig({
  watch: {
  livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '*.html',
          'js/validate.js',
          'styles.css'
        ]
      },
      karma: {
        files: ['js/*.js', 'tests/*.js'],
        tasks: ['karma:unit'] //NOTE the :run flag
      }
  },
  karma: {
  unit: {
    configFile: 'karma.conf.js'
    }
  },
  connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        base: {
          path: '.',
          options: {
            index: 'security.html',
            maxAge: 300000
          }
        }
      },
      livereload: {
        options: {
          open: true
        }
      },
  }

   
});
grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-karma');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [ 'connect:livereload', 'watch']);
};