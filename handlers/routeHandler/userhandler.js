/*
 * Title: User Route
 * Description: Handle User Route
 * Author: Md. Sajjadul Islam
 * Date: 5/09/2023, Tue, 1:37,AM
 */

// modules scaffolding
const handler = {};

handler.userHandler = (requestPropertise, callback) => {
  const acceptedPropertise = ["get", "post", "put", "delete"];

  if (acceptedPropertise.indexOf(requestPropertise.method) > -1) {
    handler._user[requestPropertise.method](requestPropertise, callback);
  } else {
    callback(405, {
      message: "YOU ARE NOT ALLOWED TO THIS METHOD!",
    });
  }
};

handler._user = {};

// user post request handler
handler._user.post = (requestPropertise, callback) => {};
// user get request handler
handler._user.get = (requestPropertise, callback) => {};
// user put request handler
handler._user.put = (requestPropertise, callback) => {};
// user delete request handler
handler._user.delete = (requestPropertise, callback) => {};

module.exports = handler;
