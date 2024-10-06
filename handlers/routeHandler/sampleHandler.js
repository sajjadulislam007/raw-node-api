/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:5,AM
 */

// modules scaffolding
const handler = {};

handler.sampleHandler = (requestPropertise, callBack) => {
  console.log(requestPropertise);

  callBack(200, {
    message: "This is a Sample route",
  });
};

module.exports = handler;
