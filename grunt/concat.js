module.exports = {
	js: {
		src: [
			'bower_components/jquery/dist/jquery.js',
			'bower_components/bootstrap/dist/js/bootstrap.js',
			'<%= config.src %>/assets/scripts/navbar-autocollapse.js',
		],
		dest: '<%= config.dist %>/assets/scripts/wenode.js',
	},
};