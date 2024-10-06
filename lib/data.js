/*
 * Title: Application Data
 * Description: Application Data Settings & Data
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:11,AM
 */

//Dependencies
const fs = require("fs");
const path = require("path");

// modules scaffolding
const lib = {};

// base directory of the data folder
lib.baseDir = path.join(__dirname, "/../.data/");

//write data to file...
lib.create = (dir, file, data, callBack) => {
  //open file for writing
  fs.open(`${lib.baseDir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      //convert data into string
      const stringData = JSON.stringify(data);

      //write data to the file and then close it
      fs.writeFile(fileDescriptor, stringData, (err) => {
        if (!err) {
          //closing the file
          fs.close(fileDescriptor, (err) => {
            if (!err) {
              callBack(false);
            } else {
              callBack("Error closing the new file! Original Error Is :", err);
            }
          });
        } else {
          callBack("Error Writing New File! Original Error Is :", err);
        }
      });
    } else {
      callBack(
        "Could not create new file, it may already exists! Original Error Is :",
        err,
      );
    }
  });
};

//Read data from the file
lib.read = (dir, file, callBack) => {
  fs.readFile(`${lib.baseDir + dir}/${file}.json`, "utf8", (err, data) => {
    callBack(err, data);
  });
};

//update existing files
lib.update = (dir, file, data, callBack) => {
  // for update a file we need to open the file first and then we need to read and then we can write and finally we will close it
  // open the file for writing
  fs.open(`${lib.baseDir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      //convert the data to string
      const stringData = JSON.stringify(data);

      // truncate the file
      fs.ftruncate(fileDescriptor, (err) => {
        if (!err) {
          // wrirte to the file and close it

          fs.writeFile(fileDescriptor, stringData, (err) => {
            if (!err) {
              //closing the file
              fs.close(fileDescriptor, (err) => {
                if (!err) {
                  callBack(false);
                } else {
                  callBack("Error Closing File!");
                }
              });
            } else {
              callBack("Error Writing to the File!");
            }
          });
        } else {
          callBack("Error Truncating File!");
        }
      });
    } else {
      callBack("Error updating, file may not exists!");
    }
  });
};

//Delete/Remove existing file
lib.delete = (dir, file, callBack) => {
  // Unlink File
  fs.unlink(`${lib.baseDir + dir}/${file}.json`, (err) => {
    if (!err) {
      callBack(false);
    } else {
      callBack("Error Deleting File!");
    }
  });
};

module.exports = lib;
