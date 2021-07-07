/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  const webpackOptions = {
    // eslint-disable-next-line global-require
    webpackOptions: require('../webpack.config'),
  };
  on('file:preprocessor', webpackPreprocessor(webpackOptions));

  // if version not defined, use local
  const version = config.env.TARGET_ENV || 'local';
  // load env from json
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const environmentConfig = require(`../config/${version}.json`);

  return {
    ...config,
    ...environmentConfig,
  };
};
