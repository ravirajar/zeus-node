var mongoose = require("mongoose");

const SellOldDevices = mongoose.Schema(
  {
    //_id:ObjectId,
    type: String,
    brandName: String,
    model: String,
    deviceType: Object,
    storage: Object,
    screen: Object,
    accessories: Object,
    other: Object,
  },
  { strict: false }
);

module.exports = mongoose.model(
  "sell-old-devices",
  SellOldDevices,
  "sell-old-devices"
);
