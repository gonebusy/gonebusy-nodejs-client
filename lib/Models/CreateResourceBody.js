
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateResourceBody
 *
 * @constructor
 */
function CreateResourceBody() {
    this.name = null;     
    this.type = null;     
    this.userId = null;     
    this.apiKey = null;     
    this.description = null;     
    this.capacity = null;     
    this.gender = null;     
    this.thingTypeId = null;     
    //Append to variable dictionary
    this._variableDict['userId'] = 'user_id';
    this._variableDict['apiKey'] = 'api_key';
    this._variableDict['thingTypeId'] = 'thing_type_id';
}

CreateResourceBody.prototype = new BaseModel();
CreateResourceBody.prototype.constructor = BaseModel;

/**
 * Resource Name
 *
 * @return {string}
 */
CreateResourceBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
CreateResourceBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Type of Resource
 *
 * @return {string}
 */
CreateResourceBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
CreateResourceBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * Create a Resource for this User Id.  You must be authorized to manage this User Id.
 *
 * @return {int|null}
 */
CreateResourceBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {int|null} value 
 */
CreateResourceBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
CreateResourceBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
CreateResourceBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

/**
 * Optional Description
 *
 * @return {string|null}
 */
CreateResourceBody.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
CreateResourceBody.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * Optional Capacity
 *
 * @return {int|null}
 */
CreateResourceBody.prototype.getCapacity = function() {
    return this.capacity;
};

/**
 * Setter for Capacity
 * 
 * @param {int|null} value 
 */
CreateResourceBody.prototype.setCapacity = function(value) {
    this.capacity = value;
};

/**
 * Optional Gender
 *
 * @return {string|null}
 */
CreateResourceBody.prototype.getGender = function() {
    return this.gender;
};

/**
 * Setter for Gender
 * 
 * @param {string|null} value 
 */
CreateResourceBody.prototype.setGender = function(value) {
    this.gender = value;
};

/**
 * When Resource is a Thing, the type Id
 *
 * @return {int|null}
 */
CreateResourceBody.prototype.getThingTypeId = function() {
    return this.thingTypeId;
};

/**
 * Setter for ThingTypeId
 * 
 * @param {int|null} value 
 */
CreateResourceBody.prototype.setThingTypeId = function(value) {
    this.thingTypeId = value;
};

module.exports = CreateResourceBody;