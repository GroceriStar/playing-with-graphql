const express = require('express'); // requiring express web framework
const app = express(); // executing express as app
const graphqlHTTP = require('express-graphql'); // requiring express-graphql to mount GraphQL API server
const { buildSchema } = require('graphql'); // requiring graphql function for executing queries

// Setting up the port
const port = 3000 || process.env.PORT;

// A sample schema using GraphQL schema language
const helloSchema = buildSchema(`
    type Query {
        hello: String
    }
`);

// root provides a resolver function for each API endpoint
const helloRoot = {
    hello: () => {
        return 'Welcome to GraphQL';
    },
};

// A sample endpoint 
app.use('/graphql', graphqlHTTP({
    schema: helloSchema,
    rootValue: helloRoot,
    graphiql: true // set true to manually issue queries with GraphiQL tool
}));

app.get('/', (req, res) => {
    res.redirect('/graphql'); // automatically redirecting to /graphql when user visits root route
});

// starting the server
app.listen(port, () => {
    console.log(`GraphQL server started at http://localhost:${port}/graphql`);
});