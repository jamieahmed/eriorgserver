const { Schema }, mongoose = require('mongoose');

const courseDataSchema = new Schema ({
  name: { type: String },
  length: { type: String },
  description: { type: String },
  nextCourse: { type: Schema.Types.ObjectId, ref: 'Course'}
});

const CourseData = mongoose.model('CourseData', courseDataSchema);

module.exports = CourseData;