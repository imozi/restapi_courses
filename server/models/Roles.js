'use strict';

import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
  role: {
    type: String,
    required: true
  } ,
  resources: [
    {
      urls: [String],
      actions: [String]
    }
  ],
})

const Role = mongoose.model('roles', roleSchema, 'roles');

export default Role;
