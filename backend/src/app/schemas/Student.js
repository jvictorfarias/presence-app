import mongoose, { Schema } from 'mongoose';

const student = new Schema({
  name: {
    type: String,
    required: true
  },

  matriculation: {
    type: Number,
    required: true
  },

  password_hash: {
    type: String,
    required: true
  },

  register: {
    type: String,
    required: false
  }
});

export default mongoose.model('student', student);
