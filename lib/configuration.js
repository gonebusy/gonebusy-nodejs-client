/**
 * gonebusy
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.PRODUCTION] = [];
environmentsMap[environments.SANDBOX] = [];

environmentsMap[environments.PRODUCTION][servers.MDEFAULT] = 'https://beta.gonebusy.com/api/v1';
environmentsMap[environments.SANDBOX][servers.MDEFAULT] = 'https://sandbox.gonebusy.com/api/v1';

const Configuration = {
    // Set Authorization to "Token <your API key>"
    authorization: 'Token <your API key>',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        const urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
