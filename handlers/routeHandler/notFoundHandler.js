/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:11,AM
 */

// modules scaffolding
const handler = {};

handler.notFoundHandler = (requestPropertise, callBack) => {
  console.log(requestPropertise);

  callBack(404, {
    message: "Your Requested URL was not found!",
  });
};

module.exports = handler;
