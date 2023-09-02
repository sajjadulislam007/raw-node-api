/*
 * Title: Contact Handler
 * Description: Contact Handler
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:5,AM
 */

// modules scaffolding
const handler = {};

handler.contactHandler = (requestPropertise, callback) => {
  console.log(requestPropertise);

  callback(200, {
    message: "This is the contact route",
  });
};

module.exports = handler;
