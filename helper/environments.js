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
const currentEnvironment = typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// export the corresponding environment object

const environmentToExport = typeof environments[currentEnvironment] === "object" ? environments[currentEnvironment] : environments.staging;

module.exports = environmentToExport;
