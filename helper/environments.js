/*
 * Title: Application Environments
 * Description: Application Environments Settings & Data
 * Author: Md. Sajjadul Islam
 * Date: 2/09/2023, Sat, 1:11,AM
 */

//Dependiences

// modules scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

//determine which invironment is passed

// export the corresponding environment object

module.exports = environmentToExport;
