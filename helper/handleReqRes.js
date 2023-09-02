/*
 * Title: Request & Response Handling
 * Description: Request & Response Handling
 * Author: Md. Sajjadul Islam
 * Date: 31/08/2023, Thu, 0:33,AM
 */

// dependencies
const url = require("url");
const { StringDecoder } = require("node:string_decoder");
const routes = require("../routes");
const { notFoundHandler } = require("../handlers/routeHandler/notFoundHandler");

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  //request handling
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const requestPropertise = {
    parsedUrl,
    path,
    parsedUrl,
    method,
    queryStringObject,
    headerObject,
  };

  const decoder = new StringDecoder("utf8");

  console.log(decoder);

  let realData = "";

  const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(requestPropertise, (statusCode, payLoad) => {
      const typeOfstatusCode = typeof statusCode === "number" ? statusCode : 500;

      const typeOfPayLoad = typeof payLoad === "object" ? payLoad : {};

      const payLoadString = JSON.stringify(typeOfPayLoad);

      // Return the final response
      res.writeHead(typeOfstatusCode);
      res.end(payLoadString);
    });

    //response handle
    // res.end('Hello Sajjad');
  });
};

module.exports = handler;
