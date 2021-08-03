const DBAccessMethods = require("../db");
const db = new DBAccessMethods();

function DeviceDetails() {
  return {
    getPriceAndQuestionDetails: getPriceAndQuestionDetails,
    getBrandList: getBrandList,
    getDeviceList: getDeviceList,
  };
}

function getPriceAndQuestionDetails(deviceDetails, callBackFunction) {
  db.getPriceAndQuestionData(deviceDetails, {}, function (response) {
    var returnBackData = {
      statusCode: response.statusCode,
      responseData: response.responseData,
    };
    callBackFunction(returnBackData);
  });
}

function getBrandList(deviceDetails, callBackFunction) {
  db.getPriceAndQuestionData(
    deviceDetails,
    { _id: 0, brandName: 1 },
    function (response) {
      let brandListSet = new Set();
      let brandList;
      if (
        response.responseData !== undefined &&
        response.responseData.length > 0
      ) {
        response.responseData.forEach((element) => {
          brandListSet.add(element.brandName);
        });
        brandList = [...brandListSet];
      }
      var returnBackData = {
        statusCode: response.statusCode,
        responseData: brandList,
      };
      callBackFunction(returnBackData);
    }
  );
}

function getDeviceList(deviceDetails, callBackFunction) {
  db.getPriceAndQuestionData(
    deviceDetails,
    { _id: 0, model: 1 },
    function (response) {
      let deviceListSet = new Set();
      let deviceList;
      if (
        response.responseData !== undefined &&
        response.responseData.length > 0
      ) {
        response.responseData.forEach((element) => {
          deviceListSet.add(element.model);
        });
        deviceList = [...deviceListSet];
      }
      var returnBackData = {
        statusCode: response.statusCode,
        responseData: deviceList,
      };
      callBackFunction(returnBackData);
    }
  );
}

module.exports = DeviceDetails;
