/*
 * Title: Handling Routes for the Application
 * Description: Handling Routes for the Application
 * Author: Md. Sajjadul Islam
 * Date: 1/09/2023, Fri, 21:14,PM
 */

//dependencies
const { sampleHandler } = require("./handlers/routeHandler/sampleHandler");
const { aboutHandler } = require("./handlers/routeHandler/aboutHandler");
const { contactHandler } = require("./handlers/routeHandler/contactHandler");
const { userHandler } = require('./handlers/routeHandler/userhandler');
//scaffolding

const routes = {
  user: userHandler,
  sample: sampleHandler,
  about: aboutHandler,
  contact: contactHandler,
};

module.exports = routes;
