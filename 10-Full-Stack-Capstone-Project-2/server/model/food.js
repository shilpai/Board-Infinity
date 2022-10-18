const mongoose = require("mongoose");

const foodmainPage = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  subItemsData: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("mainPage", foodmainPage);
