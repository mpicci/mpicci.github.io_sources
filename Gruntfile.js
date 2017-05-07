'use strict';
module.exports = function(grunt){

githubPages: {
    target: {
      // The folder where your gh-pages repo is
      src: '_site',
      // The second ignored directory with the .git folder
      dest: '_site_git'
    }
  }
  
grunt.loadNpmTasks('grunt-gh-pages');
grunt.registerTask('deploy', ['githubPages:target']);
};