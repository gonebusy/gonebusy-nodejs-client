
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of RegisterUserAsProBody
 *
 * @constructor
 */
function RegisterUserAsProBody() {
    this.businessName = null;     
    this.externalUrl = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['businessName'] = 'business_name';
    this._variableDict['externalUrl'] = 'external_url';
    this._variableDict['apiKey'] = 'api_key';
}

RegisterUserAsProBody.prototype = new BaseModel();
RegisterUserAsProBody.prototype.constructor = BaseModel;

/**
 * User Name
 *
 * @return {string}
 */
RegisterUserAsProBody.prototype.getBusinessName = function() {
    return this.businessName;
};

/**
 * Setter for BusinessName
 * 
 * @param {string} value 
 */
RegisterUserAsProBody.prototype.setBusinessName = function(value) {
    this.businessName = value;
};

/**
 * User's Website URL
 *
 * @return {string|null}
 */
RegisterUserAsProBody.prototype.getExternalUrl = function() {
    return this.externalUrl;
};

/**
 * Setter for ExternalUrl
 * 
 * @param {string|null} value 
 */
RegisterUserAsProBody.prototype.setExternalUrl = function(value) {
    this.externalUrl = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
RegisterUserAsProBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
RegisterUserAsProBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = RegisterUserAsProBody;