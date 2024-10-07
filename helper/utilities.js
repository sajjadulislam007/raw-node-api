/*
 * Title: Application utilities functions
 * Description: Application utilities functions
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:11,AM
 */

//Dependiences
const crypto = require("crypto");

const environmentObject = require("../helper/environments");

// module scaffolding
const utilities = {};

// Paese JSON
utilities.parseJson = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch (error) {
    output = {
      message: "Error on Parsing Json String Data from USER end!",
      error: error,
    };
  }

  return output;
};

// String Hash
utilities.stringHash = (string) => {
  if (typeof string === "string" && string.length > 0) {
    const hash = crypto
      .createHmac("sha256", environmentObject.secretKey)
      .update(string)
      .digest("hex");
    return hash;
  } else {
    return false;
  }
};

// export module
module.exports = utilities;
