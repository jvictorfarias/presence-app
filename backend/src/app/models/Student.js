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

  imei: {
    type: String,
    required: false
  },

  disciplines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'discipline'
    }
  ]
});

export default mongoose.model('student', student);
