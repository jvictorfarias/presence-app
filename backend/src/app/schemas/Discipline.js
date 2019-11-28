import mongoose, { Schema } from 'mongoose';

const discipline = new Schema({
  name: {
    type: String,
    required: true
  },

  cod: {
    type: String,
    required: true
  },

  class_time: {
    starts: {
      type: Date,

      required: false
    },
    ends: {
      type: Date,
      required: false
    }
  },

  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'teacher'
  },

  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'student'
    }
  ]
});

export default mongoose.model('discipline', discipline);
