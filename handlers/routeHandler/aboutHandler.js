/*
 * Title: About Handler
 * Description: About Handler
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:5,AM
 */

// modules scaffolding
const handler = {};

handler.aboutHandler = (requestPropertise, callback) => {
  console.log(requestPropertise);

  callback(200, {
    message: "This is the about route",
  });
};

module.exports = handler;
