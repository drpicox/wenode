module.exports = {
  options: {
    flatten: true,
    assets: '<%= config.dist %>/assets',
    layoutdir: '<%= config.src %>/templates/layouts',
    layoutext: '.hbs',
    layout: 'default',
    data: '<%= config.src %>/data/*.{json,yml}',
    partials: '<%= config.src %>/templates/partials/*.hbs',
    plugins: ['assemble-contrib-permalinks', 'assemble-contrib-sitemap'],
    helpers: ['handlebars-helper-slugify'],
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
};