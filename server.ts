import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

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

// Tells express to use the React build folder for static files
app.use(express.static('public'));

// Tells express to route any requests outside of the graphql route to React
app.get('*', (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Back-end server running on port ${PORT}`));
