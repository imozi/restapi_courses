'use strict';

import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'listener'
  }
})

const Users = mongoose.model('users', usersSchema);

export default Users;
