const {} = require('../models');

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world Yall!';
        },
    },
};

module.exports = resolvers;
