module.exports = {
	www: {
		files: [{
			dot: true,
			src: [ '<%= config.dist %>/*','!<%= config.dist %>/.git' ],
		}]
	},
};