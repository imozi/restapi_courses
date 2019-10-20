'use strict';

import 'dotenv/config';
import app from './app';
import mongoDb from './database';

//Connecting to DB and start server
mongoDb.connection.once('open', () => {
  console.log(`Mongoose - successful connection ...`);
  app.listen({ port: process.env.PORT },
    () => console.log(`Server start 🚀  on http://localhost:${process.env.PORT}`));
}).on('error', error => console.warn(error));
