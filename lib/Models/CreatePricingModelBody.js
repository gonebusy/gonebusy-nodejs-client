
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreatePricingModelBody
 *
 * @constructor
 */
CreatePricingModelBody = function (obj) {
    if(!obj) {
        this.name = null;     
        this.type = null;     
        this.currency = null;     
        this.notes = null;     
        this.price = null;     
        this.userId = null;     
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
    } else {
        this.name = obj.name;
        this.type = obj.type;
        this.currency = obj.currency;
        this.notes = obj.notes;
        this.price = obj.price;
        this.userId = obj.user_id;
        //Append to variable dictionary
        this._variableDict['userId'] = 'user_id';
    }
};

CreatePricingModelBody.prototype = new BaseModel();
CreatePricingModelBody.prototype.constructor = CreatePricingModelBody;

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


module.exports = CreatePricingModelBody;