const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    detalis: {
      type: String,
      required: true,
   },
  },
  { timestamps: true }
);

const Note = mongoose.nodel("StickyNote", noteSchema);
module.exports = Note;