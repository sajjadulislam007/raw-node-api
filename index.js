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
const appEnvironment = require("./helper/environments");
const data = require("./lib/data");

//App object - module scaffolding
const app = {};

//testing file system
// data.create(
//   "test",
//   "newFile",
//   { name: "bangladesh", language: "bangla" },
//   (err) => {
//     console.log("Error Was :", err);
//   },
// );
// data.read("test", "newFile", (err, result) => {
//   console.log(err, result);
// });
// data.delete("test", "newFile", (err) => {
//   console.log(err);
// });

//Create Server
app.createServer = () => {
  const server = http.createServer(app.handleRegRes);

  server.listen(appEnvironment.port, () => {
    console.log(`Listining to the port ${appEnvironment.port}`);

    console.log(appEnvironment.port);
  });
};

//handle request response
app.handleRegRes = handleRegRes;

//start the server
app.createServer();
