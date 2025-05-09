const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = 3000;

// REST route example
app.get('/api/health', (req, res) => {
  res.send('API Gateway is running!');
});

// GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL API Gateway!'
  }
};

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`API Gateway running on http://localhost:${port}`);
    console.log(`GraphQL at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer();
