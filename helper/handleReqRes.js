/*
 * Title: Request & Response Handling
 * Description: Request & Response Handling
 * Author: Md. Sajjadul Islam
 * Date: 31/08/2023, Thu, 0:33,AM
 */

// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");

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

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    console.log(realData);
    console.log("headersObject : ", headersObject);
  });

  console.log("headersObject : ", headersObject);
  //respons handle
  res.end("Hello World!");
};

module.exports = handler;
