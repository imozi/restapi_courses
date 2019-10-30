'use strict';

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  data: {
    ref: 'users.data',
    type: mongoose.Schema.Types.ObjectId
  }
})

const User = mongoose.model('users', userSchema, 'users');

export default User;
