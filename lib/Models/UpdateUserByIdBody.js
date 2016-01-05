
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 01/05/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateUserByIdBody
 *
 * @constructor
 */
function UpdateUserByIdBody() {
    this.email = null;     
    this.firstName = null;     
    this.lastName = null;     
    this.businessName = null;     
    this.externalUrl = null;     
    this.permalink = null;     
    this.timezone = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['firstName'] = 'first_name';
    this._variableDict['lastName'] = 'last_name';
    this._variableDict['businessName'] = 'business_name';
    this._variableDict['externalUrl'] = 'external_url';
    this._variableDict['apiKey'] = 'api_key';
}

UpdateUserByIdBody.prototype = new BaseModel();
UpdateUserByIdBody.prototype.constructor = BaseModel;

/**
 * User's email address
 *
 * @return {string|null}
 */
UpdateUserByIdBody.prototype.getEmail = function() {
    return this.email;
};

/**
 * Setter for Email
 * 
 * @param {string|null} value 
 */
UpdateUserByIdBody.prototype.setEmail = function(value) {
    this.email = value;
};

/**
 * Optional first name
 *
 * @return {string|null}
 */
UpdateUserByIdBody.prototype.getFirstName = function() {
    return this.firstName;
};

/**
 * Setter for FirstName
 * 
 * @param {string|null} value 
 */
UpdateUserByIdBody.prototype.setFirstName = function(value) {
    this.firstName = value;
};

/**
 * Optional last name
 *
 * @return {string|null}
 */
UpdateUserByIdBody.prototype.getLastName = function() {
    return this.lastName;
};

/**
 * Setter for LastName
 * 
 * @param {string|null} value 
 */
UpdateUserByIdBody.prototype.setLastName = function(value) {
    this.lastName = value;
};

/**
 * Optional name for your Business/Organization
 *
 * @return {string|null}
 */
UpdateUserByIdBody.prototype.getBusinessName = function() {
    return this.businessName;
};

/**
 * Setter for BusinessName
 * 
 * @param {string|null} value 
 */
UpdateUserByIdBody.prototype.setBusinessName = function(value) {
    this.businessName = value;
};

/**
 * Optional website URL
 *
 * @return {string|null}
 */
UpdateUserByIdBody.prototype.getExternalUrl = function() {
    return this.externalUrl;
};

/**
 * Setter for ExternalUrl
 * 
 * @param {string|null} value 
 */
UpdateUserByIdBody.prototype.setExternalUrl = function(value) {
    this.externalUrl = value;
};

/**
 * Optional vanity url - ex: www.gonebusy.com/[permalink] - must be unique
 *
 * @return {string|null}
 */
UpdateUserByIdBody.prototype.getPermalink = function() {
    return this.permalink;
};

/**
 * Setter for Permalink
 * 
 * @param {string|null} value 
 */
UpdateUserByIdBody.prototype.setPermalink = function(value) {
    this.permalink = value;
};

/**
 * Optional timezone
 *
 * @return {string|null}
 */
UpdateUserByIdBody.prototype.getTimezone = function() {
    return this.timezone;
};

/**
 * Setter for Timezone
 * 
 * @param {string|null} value 
 */
UpdateUserByIdBody.prototype.setTimezone = function(value) {
    this.timezone = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
UpdateUserByIdBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
UpdateUserByIdBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = UpdateUserByIdBody;