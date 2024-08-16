const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const { dynamicDB, staticDB } = require('./config/connection');
const AWS = require('aws-sdk');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
console.log('TDUD_01_URI:', process.env.TDUD_01_URI);
console.log('TDSD_01_URI:', process.env.TDSD_01_URI);

const PORT = process.env.PORT || 3001;
const app = express();

// Configure AWS credentials
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// Initialize the S3 client
const s3 = new AWS.S3();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

const startApolloServer = async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: authMiddleware
        });

        await server.start();
        server.applyMiddleware({ app });

        // Wait for both databases to be connected before starting the server
        Promise.all(
            [dynamicDB, staticDB].map(
                (db) =>
                    new Promise((resolve, reject) => {
                        db.once('open', resolve);
                        db.on('error', reject);
                    })
            )
        )
            .then(() => {
                app.listen(PORT, () => {
                    console.log(`API server running on port ${PORT}!`);
                    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
                });
            })
            .catch((err) => {
                console.error('Error connecting to databases:', err);
            });
    } catch (error) {
        console.error('Error starting Apollo Server:', error);
    }
};

startApolloServer();
