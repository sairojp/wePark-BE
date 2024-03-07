const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  frame_nmr: Number,
  car_bbox: String,
  license_plate_bbox: String,
  license_number: String,
  license_number_score: Decimal128,
  entry_time:String,
  exit_time:String,
  exited:Boolean
})
module.exports = mongoose.model('Vehicle',vehicleSchema);