
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdatePricingModelByIdBody
 *
 * @constructor
 */
function UpdatePricingModelByIdBody() {
    this.name = null;     
    this.apiKey = null;     
    this.notes = null;     
    this.price = null;     
    this.currency = null;     
    //Append to variable dictionary
    this._variableDict['apiKey'] = 'api_key';
}

UpdatePricingModelByIdBody.prototype = new BaseModel();
UpdatePricingModelByIdBody.prototype.constructor = BaseModel;

/**
 * PricingModel Name
 *
 * @return {string|null}
 */
UpdatePricingModelByIdBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
UpdatePricingModelByIdBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
UpdatePricingModelByIdBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
UpdatePricingModelByIdBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

/**
 * Optional Notes Field
 *
 * @return {string|null}
 */
UpdatePricingModelByIdBody.prototype.getNotes = function() {
    return this.notes;
};

/**
 * Setter for Notes
 * 
 * @param {string|null} value 
 */
UpdatePricingModelByIdBody.prototype.setNotes = function(value) {
    this.notes = value;
};

/**
 * Price
 *
 * @return {double|null}
 */
UpdatePricingModelByIdBody.prototype.getPrice = function() {
    return this.price;
};

/**
 * Setter for Price
 * 
 * @param {double|null} value 
 */
UpdatePricingModelByIdBody.prototype.setPrice = function(value) {
    this.price = value;
};

/**
 * 3 Letter ISO Currency Code
 *
 * @return {string|null}
 */
UpdatePricingModelByIdBody.prototype.getCurrency = function() {
    return this.currency;
};

/**
 * Setter for Currency
 * 
 * @param {string|null} value 
 */
UpdatePricingModelByIdBody.prototype.setCurrency = function(value) {
    this.currency = value;
};

module.exports = UpdatePricingModelByIdBody;