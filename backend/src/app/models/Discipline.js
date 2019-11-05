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
      required: true
    },
    ends: {
      type: Date,
      required: true
    }
  },

  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'teacher'
  }
});

export default mongoose.model('discipline', discipline);
