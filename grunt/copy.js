module.exports = {
	options: {
		onlyIf: 'modified',
	},
	css: {
		expand: true,
		cwd: '<%= config.src %>',
		dest: '<%= config.dist %>',
		src: '**/*.css',
	},
	favicon: {
		src: '<%= config.src %>/favicon.ico',
		dest: '<%= config.dist %>/favicon.ico',
	},
	fonts: {
		src: 'bower_components/*/fonts/*',
		dest: '<%= config.dist %>/',
	},
	svg: {
		expand: true,
		cwd: '<%= config.src %>',
		dest: '<%= config.dist %>',
		src: '**/*.svg',
	},
};