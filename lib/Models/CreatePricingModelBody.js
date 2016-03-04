
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreatePricingModelBody
 *
 * @constructor
 */
function CreatePricingModelBody() {
    this.name = null;     
    this.type = null;     
    this.userId = null;     
    this.apiKey = null;     
    this.notes = null;     
    this.price = null;     
    this.currency = null;     
    //Append to variable dictionary
    this._variableDict['userId'] = 'user_id';
    this._variableDict['apiKey'] = 'api_key';
}

CreatePricingModelBody.prototype = new BaseModel();
CreatePricingModelBody.prototype.constructor = BaseModel;

/**
 * PricingModel Name
 *
 * @return {string}
 */
CreatePricingModelBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
CreatePricingModelBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Type of PricingModel
 *
 * @return {string}
 */
CreatePricingModelBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
CreatePricingModelBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * Create a PricingModel for this User Id.  You must be authorized to manage this User Id.
 *
 * @return {int|null}
 */
CreatePricingModelBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {int|null} value 
 */
CreatePricingModelBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
CreatePricingModelBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
CreatePricingModelBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

/**
 * Optional Notes Field
 *
 * @return {string|null}
 */
CreatePricingModelBody.prototype.getNotes = function() {
    return this.notes;
};

/**
 * Setter for Notes
 * 
 * @param {string|null} value 
 */
CreatePricingModelBody.prototype.setNotes = function(value) {
    this.notes = value;
};

/**
 * Price
 *
 * @return {double|null}
 */
CreatePricingModelBody.prototype.getPrice = function() {
    return this.price;
};

/**
 * Setter for Price
 * 
 * @param {double|null} value 
 */
CreatePricingModelBody.prototype.setPrice = function(value) {
    this.price = value;
};

/**
 * 3 Letter ISO Currency Code
 *
 * @return {string|null}
 */
CreatePricingModelBody.prototype.getCurrency = function() {
    return this.currency;
};

/**
 * Setter for Currency
 * 
 * @param {string|null} value 
 */
CreatePricingModelBody.prototype.setCurrency = function(value) {
    this.currency = value;
};

module.exports = CreatePricingModelBody;