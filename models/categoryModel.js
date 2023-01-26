const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {type: String, required: true},
  createdAt: { default: Date.now(), type: Date },
});

const Category = model("Catogary", categorySchema);

exports.Category = Category
