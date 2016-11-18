
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdatePricingModelByIdBody
 *
 * @constructor
 */
UpdatePricingModelByIdBody = function (obj) {
    if(!obj) {
        this.currency = null;     
        this.name = null;     
        this.notes = null;     
        this.price = null;     
    } else {
        this.currency = obj.currency;
        this.name = obj.name;
        this.notes = obj.notes;
        this.price = obj.price;
    }
};

UpdatePricingModelByIdBody.prototype = new BaseModel();
UpdatePricingModelByIdBody.prototype.constructor = UpdatePricingModelByIdBody;

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


module.exports = UpdatePricingModelByIdBody;