const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const CategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'public'
  },
  videos: [{
    title: String,
    videoID: String,
    url: String,
  }],
  // Version 2.0
  // ratings: [{
  //   date:{
  //     type: Date,
  //     default: Date.now
  //   },
  //   user:{
  //     typ e: Schema.Types.ObjectId,
  //     ref:'User'
  //   },
  //   value: Number
  // }],
  // allowComments: {
  //   type: Boolean,
  //   default:true
  // },
  comments: [{
    body: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    user: String
  }],
  username: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true
  }
});

CategorySchema.virtual('user', {
  ref: 'User',
  localField: 'username',
  foreignField: 'username',
  justOne: true
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = {
  Category
};