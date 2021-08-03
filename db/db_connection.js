const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/zeus-mobile",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err, db) => {
    console.log(`DB Connection successful`);
  }
);
