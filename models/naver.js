const mongoose = require("mongoose");

const naverSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  admission_date: {
    type: Date,
    default: Date.now,
  },
  job_role: {
    type: String,
  },
});

module.exports = mongoose.model("Naver", naverSchema);
