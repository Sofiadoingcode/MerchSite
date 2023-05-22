import {ApolloServer} from '@apollo/server';
import http from 'http';
import mongoose from 'mongoose';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import {startStandaloneServer} from '@apollo/server/standalone';
import typeDefs from './schema';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import body_parser_pkg from 'body-parser';
import Query from './resolvers/Query';
import Mutation from './resolvers/mutation';
import Product from './resolvers/product';
import Order from './resolvers/order';
import ProductLine from './resolvers/productLine';
import Review from './resolvers/review';
import User from './resolvers/user';
const {json} = body_parser_pkg;
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

dotenv.config({path: './config.env'})

interface MyContext {
    user: string | JwtPayload
  }

const resolvers = {
    Query,
    Mutation,
    Product,
    Order,
    ProductLine,
    Review,
    User
};


const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
})

await server.start();


app.use('/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
        context: async({req, res}) => {
             const token = req.headers.authorization || ''
             const user = await getUser(token)
             return {user}
            }
        },
    )
);


app.use(cors())

await new Promise<void>((resolve) => httpServer.listen({port: 4001}, resolve));
console.log(`🚀 GraphQL Server ready at http://localhost:4001/graphql`);

const DB = process.env.DATABASE_DEV!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!
);

mongoose.connect(DB, {}).then(() => console.log('DB connection successful!'));

const getUser = (token : string) => {
    if (token) {
      try {
        token = token.split(' ')[1]
        return jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        return { error: true, msg: "Session invalid" };
      }
    }
  };
  