import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Its running on port ${PORT}`));
