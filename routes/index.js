const express = require("express");
const router = express.Router();

const PricingDetails = require("../api/SellOldDevice");
const api = new PricingDetails();

const RepariPricingDetails = require("../api/RepairDevice");
const api_repair = new RepariPricingDetails();

//Pricing Details
router.get("/sellolddevice/getpricingdetails", function (req, res) {
  api.getPriceAndQuestionDetails(req.query, function (response) {
    res.status(response.statusCode);
    res.json(response.responseData);
  });
});

router.get("/sellolddevice/getbrandlist", function (req, res) {
  api.getBrandList(req.query, function (response) {
    res.status(response.statusCode);
    res.json(response.responseData);
  });
});

router.get("/sellolddevice/getdevicelist", function (req, res) {
  api.getDeviceList(req.query, function (response) {
    res.status(response.statusCode);
    res.json(response.responseData);
  });
});

//Repair Details
router.get("/repair/getrepairdetails", function (req, res) {
  api_repair.getRepairAndQuestionDetails(req.query, function (response) {
    res.status(response.statusCode);
    res.json(response.responseData);
  });
});

router.get("/repair/getbrandlist", function (req, res) {
  api_repair.getRepairBrandList(req.query, function (response) {
    res.status(response.statusCode);
    res.json(response.responseData);
  });
});

router.get("/repair/getdevicelist", function (req, res) {
  api_repair.getRepairDeviceList(req.query, function (response) {
    res.status(response.statusCode);
    res.json(response.responseData);
  });
});

// router.post("/modifysitedetails", function (req, res) {
//   api.modifysitedetails(req.body, function (response) {
//     res.status(response.statusCode);
//     res.json(response.responseData);
//   });
// });

module.exports = router;
