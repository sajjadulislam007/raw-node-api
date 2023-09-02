/*
 * Title: Uptime Monitoring Application
 * Description: It's an uptime monitoring application which user will track to their up and down links.
 * Author: Md. Sajjadul Islam
 * Date: 25/08/2023, Fri, 1:35,AM
 */

// Dependencies
const http = require("http");

const { handleReqRes } = require("./helper/handleReqRes");
const environment = require("./helper/environments");
const data = require("./lib/data");

//App object - module scaffolding
const app = {};

//Configuration
// app.config = {
//   port: 3000,
// };

// data.create("test", "newFile", { name: "Bangladesh", langulage: "Bangla" }, (err) => {
//   console.log("error was" + err);
// });

// data.read("test", "newFile", (err, data) => {
//   console.log(err, data);
// });

// data.update("test", "newFile", { name: "England", langulage: "English" }, (err) => {
//   console.log(err);
// });

// data.delete("test", "newFile", (err) => {
//   console.log(err);
// });

//Create Server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(environment.port, () => {
    console.log(`Listening to port ${environment.port}`);
  });
};

//handle request response
app.handleReqRes = handleReqRes;

//start the server
app.createServer();
