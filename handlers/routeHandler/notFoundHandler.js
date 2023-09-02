/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:11,AM
 */

// modules scaffolding
const handler = {};

handler.notFoundHandler = (requestPropertise, callback) => {
  callback(404, {
    message: "Sorry! Your requested URL not found!",
  });
};

module.exports = handler;
