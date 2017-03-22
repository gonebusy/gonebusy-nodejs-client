
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesPricingModelResponse
 *
 * @constructor
 */
EntitiesPricingModelResponse = function (obj) {
    if(!obj) {
        this.currency = null;     
        this.id = null;     
        this.name = null;     
        this.notes = null;     
        this.ownerId = null;     
        this.price = null;     
        this.pricingModelType = null;     
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['pricingModelType'] = 'pricing_model_type';
    } else {
        this.currency = obj.currency;
        this.id = obj.id;
        this.name = obj.name;
        this.notes = obj.notes;
        this.ownerId = obj.owner_id;
        this.price = obj.price;
        this.pricingModelType = obj.pricing_model_type;
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['pricingModelType'] = 'pricing_model_type';
    }
};

EntitiesPricingModelResponse.prototype = new BaseModel();
EntitiesPricingModelResponse.prototype.constructor = EntitiesPricingModelResponse;

/**
 * currency symbol, as per ISO-4217
 *
 * @return {string|null}
 */
EntitiesPricingModelResponse.prototype.getCurrency = function() {
    return this.currency;
};

/**
 * Setter for Currency
 * 
 * @param {string|null} value 
 */
EntitiesPricingModelResponse.prototype.setCurrency = function(value) {
    this.currency = value;
};

/**
 * id of PricingModel
 *
 * @return {int|null}
 */
EntitiesPricingModelResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesPricingModelResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * name of PricingModel
 *
 * @return {string|null}
 */
EntitiesPricingModelResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
EntitiesPricingModelResponse.prototype.setName = function(value) {
    this.name = value;
};

/**
 * notes and description
 *
 * @return {string|null}
 */
EntitiesPricingModelResponse.prototype.getNotes = function() {
    return this.notes;
};

/**
 * Setter for Notes
 * 
 * @param {string|null} value 
 */
EntitiesPricingModelResponse.prototype.setNotes = function(value) {
    this.notes = value;
};

/**
 * id of owner of PricingModel
 *
 * @return {int|null}
 */
EntitiesPricingModelResponse.prototype.getOwnerId = function() {
    return this.ownerId;
};

/**
 * Setter for OwnerId
 * 
 * @param {int|null} value 
 */
EntitiesPricingModelResponse.prototype.setOwnerId = function(value) {
    this.ownerId = value;
};

/**
 * price/rate
 *
 * @return {string|null}
 */
EntitiesPricingModelResponse.prototype.getPrice = function() {
    return this.price;
};

/**
 * Setter for Price
 * 
 * @param {string|null} value 
 */
EntitiesPricingModelResponse.prototype.setPrice = function(value) {
    this.price = value;
};

/**
 * type of PricingModel
 *
 * @return {string|null}
 */
EntitiesPricingModelResponse.prototype.getPricingModelType = function() {
    return this.pricingModelType;
};

/**
 * Setter for PricingModelType
 * 
 * @param {string|null} value 
 */
EntitiesPricingModelResponse.prototype.setPricingModelType = function(value) {
    this.pricingModelType = value;
};


module.exports = EntitiesPricingModelResponse;
