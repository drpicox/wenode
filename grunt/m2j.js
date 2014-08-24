/* markdown to json, creates json data from */
module.exports = {
  all: {
    files: {
      '<%= config.tmp %>/data/speakers.json': [ '<%= config.src %>/speakers/*.md' ],
    },
  },
};