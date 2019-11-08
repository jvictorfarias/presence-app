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
  },

  disciplines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'discipline'
    }
  ]
});

export default mongoose.model('teacher', teacher);
