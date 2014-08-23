module.exports = {
	all: {
		expand: true,
		cwd: '<%= config.dist %>',
		dest: '<%= config.dist %>',
		src: [ '**/*.css' ],
	}
};