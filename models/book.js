const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, require: true },
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  description: { type: String, required: true },
  image: { type: String, unique: true, dropDups: true },
  link: { type: String, required: true }
});

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;
