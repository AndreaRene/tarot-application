const {} = require('../models');

const resolvers = {
	Query: {
		hello: () => {
			return 'Hello world!';
		},
	},
};

module.exports = resolvers;
