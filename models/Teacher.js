const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Teacher Schema
const TeacherSchema = new Schema({
  firstName: { type: String, required: true, trim: true, minlength: 2 },
  lastName: { type: String, required: true, trim: true, minlength: 2 },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true, minlength: 6 }
});

module.exports = mongoose.model('Teacher', TeacherSchema);
