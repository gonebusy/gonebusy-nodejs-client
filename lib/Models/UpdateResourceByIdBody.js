
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 01/05/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateResourceByIdBody
 *
 * @constructor
 */
function UpdateResourceByIdBody() {
    this.name = null;     
    this.apiKey = null;     
    this.description = null;     
    this.capacity = null;     
    this.gender = null;     
    //Append to variable dictionary
    this._variableDict['apiKey'] = 'api_key';
}

UpdateResourceByIdBody.prototype = new BaseModel();
UpdateResourceByIdBody.prototype.constructor = BaseModel;

/**
 * Resource Name
 *
 * @return {string|null}
 */
UpdateResourceByIdBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
UpdateResourceByIdBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
UpdateResourceByIdBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
UpdateResourceByIdBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

/**
 * Optional Description
 *
 * @return {string|null}
 */
UpdateResourceByIdBody.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
UpdateResourceByIdBody.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * Optional Capacity
 *
 * @return {int|null}
 */
UpdateResourceByIdBody.prototype.getCapacity = function() {
    return this.capacity;
};

/**
 * Setter for Capacity
 * 
 * @param {int|null} value 
 */
UpdateResourceByIdBody.prototype.setCapacity = function(value) {
    this.capacity = value;
};

/**
 * Optional Gender
 *
 * @return {string|null}
 */
UpdateResourceByIdBody.prototype.getGender = function() {
    return this.gender;
};

/**
 * Setter for Gender
 * 
 * @param {string|null} value 
 */
UpdateResourceByIdBody.prototype.setGender = function(value) {
    this.gender = value;
};

module.exports = UpdateResourceByIdBody;