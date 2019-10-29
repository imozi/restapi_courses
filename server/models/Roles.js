'use strict';

import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
  role: {
    type: String,
    required: true
  } ,
  resources: [
    {
      url: String,
      actions: [String]
    }
  ],
})

const Role = mongoose.model('roles', roleSchema);

export default Role;
