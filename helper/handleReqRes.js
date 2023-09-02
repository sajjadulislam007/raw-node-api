/*
 * Title: Request & Response Handling
 * Description: Request & Response Handling
 * Author: Md. Sajjadul Islam
 * Date: 31/08/2023, Thu, 0:33,AM
*/

// dependencies
const url = require('url');
const {StringDecoder} = require('node:string_decoder');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandler/notFoundHandler');


// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  //request handling
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const requestPropertise = {
    parsedUrl, path, parsedUrl, method, queryStringObject, headerObject
  };

  const decoder = new StringDecoder('utf8');

  console.log(decoder)

  let realData = '';

  const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

  chosenHandler(requestPropertise);


  req.on('data', (buffer) => {
    realData += decoder.write(buffer)
  });

  req.on('end', () => {
    realData += decoder.end();
    //response handle
    res.end('Hello Sajjad');
  })
}


module.exports = handler;