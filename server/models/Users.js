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
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  data: {
    ref: 'usersData',
    type: mongoose.Schema.Types.ObjectId,
    default: '5dad98187b021a494f0fe995'
  }
})

const Users = mongoose.model('users', usersSchema);

export default Users;
