const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("./db/db_connection");

const app = express();

//enable cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//This is to make sure request body is accessible in express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Router for the api end points
const zeusRoutes = require("./routes");
app.use("/api/v1", zeusRoutes);

//Views are present inside build folder
app.use(express.static(path.join(__dirname, "build")));

app.listen(process.env.port, function () {
  console.log(`Application running on port ${port}`);
});
