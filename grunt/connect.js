module.exports = {

  options: {
    port: 9600,
    livereload: 19600,
    // '0.0.0.0' is to access the server from outside
    hostname: '0.0.0.0',
  },
  livereload: {
    options: {
      open: true,
      base: [
        '<%= config.dist %>',
      ]
    }
  },

};