const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token =
            req.body.token || req.query.token || req.headers.authorization;

        // We split the token string into an array and return actual token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        // Initialize an empty user object
        let user = null;

        if (token) {
            // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
            try {
                const { data } = jwt.verify(token, secret, {
                    maxAge: expiration,
                });
                user = data;
            } catch {
                console.log('Invalid token');
            }
        }

        // return an object with the user property so it can be passed to the resolver as `context`
        return { user };
    },

    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
