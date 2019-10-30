'use strict';

import mongoose from 'mongoose';

const leaderSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  } ,
  secondName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

const Leader = mongoose.model('leaders', leaderSchema, 'leaders');

export default Leader;
