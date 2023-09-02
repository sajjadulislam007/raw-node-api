/*
 * Title: Application Data
 * Description: Application Data Settings & Data
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:11,AM
 */

//Dependiences
const fs = require("fs");
const path = require("path");

// modules scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

//write data to file...
lib.create = (dir, file, data, callback) => {
  //open file for writing
  fs.open(lib.basedir + dir + "/" + file + ".json", "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      //convert data to string data
      const stringData = JSON.stringify(data);

      //write data  to the file
      fs.writeFile(fileDescriptor, stringData, (err) => {
        if (!err) {
          //close the file
          fs.close(fileDescriptor, (err) => {
            if (!err) {
              callback(false);
            } else {
              callback("error closing the new file!");
            }
          });
        } else {
          callback("error writing to new file!");
        }
      });
    } else {
      callback("Could not create new file, it may already exist!");
    }
  });
};

//Read the file
lib.read = (dir, file, callback) => {
  //Read the file from filesystem
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (err, data) => {
    callback(err, data);
  });
};

//update existing files
lib.update = (dir, file, data, callback) => {
  //opening the file for write
  fs.open(lib.basedir + dir + "/" + file + ".json", "r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      //convert the data to string
      const stringData = JSON.stringify(data);

      // truncate the file
      fs.ftruncate(fileDescriptor, (err) => {
        if (!err) {
          //Write to the file and close it
          fs.writeFile(fileDescriptor, stringData, (err) => {
            if (!err) {
              fs.close(fileDescriptor, (err) => {
                if (!err) {
                  callback(false);
                } else {
                  callback("Error to close the file!");
                }
              });
            } else {
              callback("Error writing to the file");
            }
          });
        } else {
          callback("Error truncating file");
        }
      });
    } else {
      callback("Error updating file, may not exist!");
    }
  });
};

//Delete/Remove existing file
lib.delete = (dir, file, callback) => {
  //Delete the file
  fs.unlink(lib.basedir + dir + "/" + file + ".json", (err) => {
    if(!err){
      callback(false);
    }else {
      callback('There was a problem with deleting file!')
    }
  });
}

module.exports = lib;
