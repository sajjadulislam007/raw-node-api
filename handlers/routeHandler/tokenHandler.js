/*
 * Title: User Route
 * Description: Handle token Route
 * Author: Md. Sajjadul Islam
 * Date: 5/09/2023, Tue, 1:37,AM
 */

//dependencies
const {
  stringHash,
  parseJson,
  createRandomToken,
} = require("../../helper/utilities");
const data = require("../../lib/data");

//scufholding
const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
  const acceptedMethods = ["get", "post", "put", "delete"];

  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._token[requestProperties.method](requestProperties, callback);
  } else {
    callback(405, {
      message: `The method you used '${requestProperties.method}' is not allowed!`,
    });
  }
};
// modules scaffolding for users different methods
handler._token = {};

// Post method handling for user
handler._token.post = (requestProperties, callback) => {
  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone
      : false;

  const password =
    typeof requestProperties.body.password === "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;

  if (phone && password) {
    data.read("users", phone, (err1, userData) => {
      let hashedPassword = stringHash(password);

      //checking if the both password the user sent and the password that we have in the database
      if (hashedPassword === parseJson(userData).password) {
        //creating a random token in string
        let tokenId = createRandomToken(20);

        // expires time of one hour
        let expires = Date.now() + 60 * 60 * 100;

        //creating a token object
        let tokenObject = {
          phone,
          id: tokenId,
          expires,
        };

        // store the token in the database
        data.create("tokens", tokenId, tokenObject, (err2) => {
          if (!err2) {
            callback(200, tokenObject);
          } else {
            callback(500, {
              message: "There was a problem server side to create a token!",
            });
          }
        });
      } else {
        callback(400, {
          message: "password is not valid",
        });
      }
    });
  } else {
    callback(400, {
      message: "You have a problem in your request!",
    });
  }
};

// Get method handling for user
handler._token.get = (requestProperties, callback) => {
  // check the if the id is valid
  const id =
    typeof requestProperties.queryStringObject.id === "string" &&
    requestProperties.queryStringObject.id.trim().length === 20
      ? requestProperties.queryStringObject.id
      : false;

  if (id) {
    // look up the token first if its there
    data.read("tokens", id, (err, tokenData) => {
      // get the data from file systme as string and make it a json object
      const token = { ...parseJson(tokenData) };
      if (!err && token) {
        callback(200, token);
      } else {
        callback(404, {
          message: "The token not found! in the file system",
        });
      }
    });
  } else {
    callback(404, {
      message: "Requested token was not found!",
    });
  }
};

// Put method handling for user
handler._token.put = (requestProperties, callback) => {};

// Delete method handling for user
handler._token.delete = (requestProperties, callback) => {};

module.exports = handler;
