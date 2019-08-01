const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");

const app = express();
const PORT = 3005;

mongoose.connect('mongodb+srv://admin:L95Fd295@graphql-yxjbg.mongodb.net/GraphQL?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log(`Connection to DB!`));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server start');
});