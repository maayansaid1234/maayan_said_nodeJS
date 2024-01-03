const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
    name: String,
    price: Number
  
})

const toyModel = mongoose.model("myToys", toySchema);
module.exports = toyModel;