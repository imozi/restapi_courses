'use strict';

import mongoose from 'mongoose';

const supervisorSchema = mongoose.Schema({
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

const Supervisor = mongoose.model('supervisors', supervisorSchema);

export default Supervisor;
