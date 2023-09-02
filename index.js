/*
 * Title: Uptime Monitoring Application
 * Description: It's an uptime monitoring application which user will track to their up and down links.
 * Author: Md. Sajjadul Islam
 * Date: 25/08/2023, Fri, 1:35,AM
*/


// Dependencies
const http = require('http');

const {handleReqRes} = require('./helper/handleReqRes');


//App object - module scaffolding
const app = {};

//Configuration
app.config = {
  port: 3000,
};

//Create Server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(app.config.port, () => {
    console.log(`Listening to port ${app.config.port}`)
  })
}


//handle request response
app.handleReqRes = handleReqRes;


//start the server
app.createServer();