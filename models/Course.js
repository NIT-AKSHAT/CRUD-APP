
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  free_course: String,
  course_name: {
    type: String,
    required: true
  },
  link: String,
  difficulty: String,
  module_number: Number,
  certification: String
});

const Course = mongoose.model(
  'Course',
  courseSchema,
  'all courses'
);

module.exports = Course;
