module.exports = {
	assemble: {
		files: [ '<%= config.src %>/{data,templates}/{,*/}*.{md,hbs,yml,json}' ],
		tasks: [ 'assemble' ],
	},
	css: {
		files: [ '<%= config.src %>/**/*.css' ],
		tasks: [ 'copy:css','autoprefixer' ],
	},
	images: {
		files: [ '<%= config.src %>/**/*.{jpg,png,gif}' ],
		tasks: [ 'newer:imagemin' ],
	},
	js: {
		files: [ '<%= config.src %>/**/*.js' ],
		tasks: [ 'concat:js' ],
	},
	less: {
		files: [ '<%= config.src %>/**/*.less' ],
		tasks: [ 'less','autoprefixer' ],
	},
	m2j: {
		files: [ '<%= config.src %>/speakers/{,*/}*.md' ],
		tasks: [ 'm2j','assemble' ],
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files: [
			'<%= config.dist %>/**',
		]
	}
};