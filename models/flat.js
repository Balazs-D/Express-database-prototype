const mongoose = require("mongoose")


// ?  =================================================== Mongoose database schema

const flatSchema = new mongoose.Schema({
 
  fullAddress: {
    streetNr: Number,
    zipcode: Number,
    city: String,
    country: String
  },
  district: String,
  area_sqm: Number,
  rooms: {
    type: Number,
    default: 1
  },
  rent: Number,
  landlord: String
});

const Flat = mongoose.model('flat', flatSchema);

module.exports = Flat