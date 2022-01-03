const mongoose = require("mongoose")

const receipySchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      ingredients: { type: String, required: true },
      time_to_cook: { type: String, required: false },
      img: { type: String, required: false },
      instruction: { type: String, required: false}      
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
const Receipy = mongoose.model("receipy", receipySchema); // receipys

module.exports = Receipy;