import { ApolloServer } from '@apollo/server';
import http from 'http';
import mongoose from 'mongoose';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema';
import express from 'express';
import cors from 'cors';
import body_parser_pkg from 'body-parser';
const { json } = body_parser_pkg;

interface MyContext {
  
};

const resolvers = {

};


const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

/*
app.use('/graphql', 
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server, {
    context: async() => ({
      
    })},
   )
);
*/

app.use(cors())
console.log(process.env.DATABASE_PASSWORD!);

const DB = process.env.DATABASE_DEV!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!
);

mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));


await new Promise<void>((resolve) => httpServer.listen({ port: 4001 }, resolve));
console.log(`🚀 GraphQL Server ready at http://localhost:4001/graphql`);
