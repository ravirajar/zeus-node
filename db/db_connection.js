const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://zeus-user:zeus@cluster0.8kyos.mongodb.net/zeus-mobiel?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err, db) => {
    console.log(`DB Connection successful`);
  }
);
