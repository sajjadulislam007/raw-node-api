/*
 * Title: User Route
 * Description: Handle User Route
 * Author: Md. Sajjadul Islam
 * Date: 5/09/2023, Tue, 1:37,AM
*/


// modules scaffolding
const handler = {};

  handler.userHandler = (requestPropertise, callback) => {
    const acceptedPropertise = ['get', 'post', 'put', 'delete'];

    if(acceptedPropertise.indexOf(requestPropertise.method) > -1){

    }else {
      callback(405, {
        message: 'YOU ARE NOT ALLOWED TO THIS METHOD!'
      })
    }


};


module.exports = handler;