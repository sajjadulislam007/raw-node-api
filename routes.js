/*
 * Title: Handling Routes for the Application
 * Description: Handling Routes for the Application
 * Author: Md. Sajjadul Islam
 * Date: 1/09/2023, Fri, 21:14,PM
 */

//dependencies
const { sampleHandler } = require("./handlers/routeHandler/sampleHandler");

//scaffolding

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
