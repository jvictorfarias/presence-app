import express from 'express';
import cors from 'cors';
import log from './app/middlewares/log';
import routes from './routes';
import 'dotenv/config';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(log('tiny'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
