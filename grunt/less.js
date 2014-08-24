module.exports = {
	build: {
		files: {
			'<%= config.dist %>/assets/styles/wenode.css': '<%= config.src %>/assets/styles/wenode.less'
		},
		options: {
			paths: [ '<%= config.src %>/', '.' ],
			compress: false,
			yuicompress: false,
			dumpLineNumbers: 'comments',
			optimization: 0,
		},
	},
};