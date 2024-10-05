/*
 * Title: Uptime Monitoring Application
 * Description: It's an uptime monitoring application which user will track to their up and down links.
 * Author: Md. Sajjadul Islam
 * Date: 25/08/2023, Fri, 1:35,AM
 */

// Dependencies
const http = require("http");

// handle request and response
const { handleRegRes } = require("./helper/handleReqRes");

//App object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

//Create Server
app.createServer = () => {
  const server = http.createServer(app.handleRegRes);

  server.listen(app.config.port, () => {
    console.log(`Listining to the port ${app.config.port}`);
  });
};

//handle request response
app.handleRegRes = handleRegRes;

//start the server
app.createServer();
