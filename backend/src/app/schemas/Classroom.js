import mongoose, { Schema } from 'mongoose';

const classroom = new Schema({
  name: {
    type: String,
    required: true
  },

  cod: {
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

export default mongoose.model('classroom', classroom);
