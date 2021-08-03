var mongoose = require("mongoose");

const RepairDevices = mongoose.Schema(
  {
    //_id:ObjectId,
    type: String,
    model: String,
    brandName: String,
    "Cracked Screen": Object,
    "LCD Replacement": Object,
    Battery: Object,
    "Charging Issue": Number,
    "Faulty Button": Object,
    "Audio Malfunction": Object,
    "Housing/Backglass": Object,
    Camera: Object,
    "Face Id": Number,
    "Water Damage": Number,
    "Auto-Restart": Number,
    "Cant Power On": Number,
    "Power Leakage": Number,
  },
  { strict: false }
);

module.exports = mongoose.model(
  "repair-devices",
  RepairDevices,
  "repair-devices"
);
