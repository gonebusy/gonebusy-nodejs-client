
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateUserByIdBody
 *
 * @constructor
 */
UpdateUserByIdBody = function (obj) {
    if(!obj) {
        this.businessName = null;     
        this.email = null;     
        this.externalUrl = null;     
        this.firstName = null;     
        this.lastName = null;     
        this.permalink = null;     
        this.timezone = null;     
        //Append to variable dictionary
        this._variableDict['businessName'] = 'business_name';
        this._variableDict['externalUrl'] = 'external_url';
        this._variableDict['firstName'] = 'first_name';
        this._variableDict['lastName'] = 'last_name';
    } else {
        this.businessName = obj.business_name;
        this.email = obj.email;
        this.externalUrl = obj.external_url;
        this.firstName = obj.first_name;
        this.lastName = obj.last_name;
        this.permalink = obj.permalink;
        this.timezone = obj.timezone;
        //Append to variable dictionary
        this._variableDict['businessName'] = 'business_name';
        this._variableDict['externalUrl'] = 'external_url';
        this._variableDict['firstName'] = 'first_name';
        this._variableDict['lastName'] = 'last_name';
    }
};

UpdateUserByIdBody.prototype = new BaseModel();
UpdateUserByIdBody.prototype.constructor = UpdateUserByIdBody;

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


module.exports = UpdateUserByIdBody;