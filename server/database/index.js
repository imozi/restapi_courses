'use strict';

import mongoose from 'mongoose';
import saslprep from 'saslprep';

mongoose.Promise = global.Promise;

const mongoDb = mongoose;

mongoDb.connect(
  process.env.DATA_BASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
  }
);

export default mongoDb;
