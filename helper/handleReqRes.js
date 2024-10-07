/*
 * Title: Request & Response Handling
 * Description: Request & Response Handling
 * Author: Md. Sajjadul Islam
 * Date: 31/08/2023, Thu, 0:33,AM
 */

// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");

const routes = require("../routes");
const { notFoundHandler } = require("../handlers/routeHandler/notFoundHandler");
const { parseJson } = require("../helper/utilities");

// module scaffolding
const handler = {};

handler.handleRegRes = (req, res) => {
  //request handling
  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestpropertise = {
    parsedUrl,
    path,
    trimedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimedPath]
    ? routes[trimedPath]
    : notFoundHandler;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    requestpropertise.body = parseJson(realData);

    chosenHandler(requestpropertise, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      //return the final response
      res.writeHead(statusCode);
      res.end(payloadString);
    });

    // console.log("headersObject : ", headersObject);
    // res.end("Hello World!");
  });
};

module.exports = handler;
