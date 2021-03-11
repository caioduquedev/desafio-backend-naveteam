const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  navers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Naver",
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
