/*
 * Title: Contact Handler
 * Description: Contact Handler
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:5,AM
 */

// modules scaffolding
const handler = {};

handler.contactHandler = (requestPropertise, callBack) => {
  console.log(requestPropertise);

  callBack(200, {
    message: "This is a Contact route",
  });
};

module.exports = handler;
