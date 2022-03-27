const { Schema }, mongoose = require('mongoose');

const courseSchema = new Schema ({
  courseType: { type: Schema.Types.ObjectId, ref: 'CourseData'},
  instructor: { type: Schema.Types.ObjectId, ref: 'User'},
  learnerList: [
    { type: Schema.Types.ObjectId, ref: 'User'}
  ],
  courseName: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  startTime: { type: String },
  endTIme: { type: String },
  totalSpots: { type: Number },
  spotsLeft: { type: Number } 
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;