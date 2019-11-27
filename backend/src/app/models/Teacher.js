import mongoose, { Schema } from 'mongoose';

const teacher = new Schema({
  name: {
    type: String,
    required: true
  },

  siape: {
    type: Number,
    required: true
  },

  password_hash: {
    type: String,
    required: true
  }
});

export default mongoose.model('teacher', teacher);
