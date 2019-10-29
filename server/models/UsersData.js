'use strict';

import mongoose from 'mongoose';

const userDataSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  role: {
    ref: 'roles',
    type: mongoose.Schema.Types.ObjectId
  }
})

const UserData = mongoose.model('users.data', userDataSchema, 'users.data');

export default UserData;
