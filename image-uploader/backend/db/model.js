const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    // id: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: File,
      required: true,
    },
    // clicks: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    date: {
      type: String,
      default: Date.now,
    },
  });

  module.exports = mongoose.model('Url', UrlSchema);