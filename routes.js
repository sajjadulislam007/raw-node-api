/*
 * Title: Handling Routes for the Application
 * Description: Handling Routes for the Application
 * Author: Md. Sajjadul Islam
 * Date: 1/09/2023, Fri, 21:14,PM
 */

//dependencies
const { sampleHandler } = require("./handlers/routeHandler/sampleHandler");
const { userHandler } = require("./handlers/routeHandler/userhandler");
const { aboutHandler } = require("./handlers/routeHandler/aboutHandler");
const { contactHandler } = require("./handlers/routeHandler/contactHandler");
const { tokenHandler } = require("./handlers/routeHandler/tokenHandler");

//scaffolding

const routes = {
  sample: sampleHandler,
  user: userHandler,
  about: aboutHandler,
  contact: contactHandler,
  token: tokenHandler,
};

module.exports = routes;
