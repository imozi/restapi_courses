'use strict';

import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const Course = mongoose.model('courses', courseSchema);

export default Course;
