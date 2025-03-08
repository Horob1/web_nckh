import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './src/init/routes';
import db from './src/init/db';
import theApp from './src/init/theApp';
import cors from 'cors';

dotenv.config({
  path: `${process.env.NODE_ENV}.env`,
});

const app: Express = express();

const corsOptions = {
  origin: 'http://localhost:8081',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
theApp(app);
db();
routes(app);

app.listen(3000, () => {
  console.log(`⚡️ [server]: Server is running at https://localhost:${3000}`);
  console.log(`⚡️ [server]: Server is running in  ${process.env.NODE_ENV} mode!`);
});

export default app;
