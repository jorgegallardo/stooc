const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Teacher Schema
const TeacherSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Teacher', TeacherSchema);
