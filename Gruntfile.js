/*
 * Generated on 2014-03-02
 * generator-assemble v0.4.10
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml,json}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.src %>/{,*/}*.html',
          '<%= config.src %>/assets/{,*/}*.css',
          '<%= config.src %>/assets/{,*/}*.js',
          '<%= config.src %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        assets: '<%= config.dist %>/assets',
        layoutdir: '<%= config.src %>/templates/layouts',
        layoutext: '.hbs',
        layout: 'default',
        data: '<%= config.src %>/data/*.{json,yml}',
        partials: '<%= config.src %>/templates/partials/*.hbs',
        plugins: ['assemble-contrib-permalinks', 'assemble-contrib-sitemap'],
      },
      pages: {
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      },
      speakers: {
        files: {
          '<%= config.dist %>/speaker/': ['<%= config.src %>/speakers/*.md']
        }
      },
    },

    copy: {
      assets: {
        expand: true,
        cwd: '<%= config.src %>/assets/',
        src: ['**'],
        dest: '<%= config.dist %>/assets/',
      },
      misc: {
        expand: true,
        dot: true,
        cwd: '<%= config.src %>',
        dest: '<%= config.dist %>',
        src: [
          '*.{ico,png,txt}',
          'CNAME'
        ]
      }
    },

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.*']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('serve', [
    'clean',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'copy'
  ]);

  grunt.registerTask('publish', ['gh-pages']);

  grunt.registerTask('default', [
    'build'
  ]);

};
