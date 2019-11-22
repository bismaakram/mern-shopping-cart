const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Book = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  author: {
    type: String
  },
  price: {
    type: Number
  },
  cover: {
    type: String
  }
});

module.exports = mongoose.model("Book", Book);
