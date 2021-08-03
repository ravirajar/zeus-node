const mongoose = require("mongoose");

require("../models/SellOldDevices");
require("../models/RepairDevices");

const pricingAndQuestions = mongoose.model("sell-old-devices");
const repairDevices = mongoose.model("repair-devices");

function dbAccessMethods() {
  return {
    getPriceAndQuestionData: getPriceAndQuestionData,
    getRepairQuestionData: getRepairQuestionData,
  };
}

function getPriceAndQuestionData(
  deviceDetails,
  returnFields,
  callBackFunction
) {
  let returnBackData = {};
  let statusCode, responseData;
  pricingAndQuestions.find(
    deviceDetails,
    returnFields,
    function (err, response) {
      if (err) {
        statusCode = 500;
        responseData = "Something went wrong!";
      } else {
        statusCode = 200;
        responseData = response;
      }
      returnBackData = {
        statusCode: statusCode,
        responseData: responseData,
      };
      callBackFunction(returnBackData);
    }
  );
}

function getRepairQuestionData(deviceDetails, returnFields, callBackFunction) {
  let returnBackData = {};
  let statusCode, responseData;

  repairDevices.find(deviceDetails, returnFields, function (err, response) {
    if (err) {
      statusCode = 500;
      responseData = "Something went wrong!";
    } else {
      statusCode = 200;
      responseData = response;
    }
    returnBackData = {
      statusCode: statusCode,
      responseData: responseData,
    };
    callBackFunction(returnBackData);
  });
}

module.exports = dbAccessMethods;
