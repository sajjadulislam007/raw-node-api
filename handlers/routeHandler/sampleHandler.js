/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:5,AM
*/


// modules scaffolding
const handler = {};

handler.sampleHandler = (requestPropertise, callback) => {
  console.log(requestPropertise);

  callback(200, {
    message: 'This is the simple route'
  })
};


module.exports = handler;