var mongoose = require('mongoose');

var AssetSchema = new mongoose.Schema({
  asset_tag: String,
  manufacturer: String,
  model: String,
  serial_number: String,
  description: String,
  manufacture_year: Number,
  device_type: String,
  status: String,
  lastupdate_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Asset', AssetSchema);

