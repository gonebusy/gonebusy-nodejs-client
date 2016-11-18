
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateServiceByIdBody
 *
 * @constructor
 */
UpdateServiceByIdBody = function (obj) {
    if(!obj) {
        this.categories = null;     
        this.description = null;     
        this.duration = null;     
        this.name = null;     
        this.priceModelId = null;     
        this.resources = null;     
        this.shortName = null;     
        //Append to variable dictionary
        this._variableDict['priceModelId'] = 'price_model_id';
        this._variableDict['shortName'] = 'short_name';
    } else {
        this.categories = obj.categories;
        this.description = obj.description;
        this.duration = obj.duration;
        this.name = obj.name;
        this.priceModelId = obj.price_model_id;
        this.resources = obj.resources;
        this.shortName = obj.short_name;
        //Append to variable dictionary
        this._variableDict['priceModelId'] = 'price_model_id';
        this._variableDict['shortName'] = 'short_name';
    }
};

UpdateServiceByIdBody.prototype = new BaseModel();
UpdateServiceByIdBody.prototype.constructor = UpdateServiceByIdBody;

/**
 * Optional List of comma-separated Category IDs to associate with Service
 *
 * @return {string|null}
 */
UpdateServiceByIdBody.prototype.getCategories = function() {
    return this.categories;
};

/**
 * Setter for Categories
 * 
 * @param {string|null} value 
 */
UpdateServiceByIdBody.prototype.setCategories = function(value) {
    this.categories = value;
};

/**
 * Service Description
 *
 * @return {string|null}
 */
UpdateServiceByIdBody.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
UpdateServiceByIdBody.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * Duration in minutes of the Service
 *
 * @return {int|null}
 */
UpdateServiceByIdBody.prototype.getDuration = function() {
    return this.duration;
};

/**
 * Setter for Duration
 * 
 * @param {int|null} value 
 */
UpdateServiceByIdBody.prototype.setDuration = function(value) {
    this.duration = value;
};

/**
 * Service Name
 *
 * @return {string|null}
 */
UpdateServiceByIdBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
UpdateServiceByIdBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Optional Price Model Id
 *
 * @return {int|null}
 */
UpdateServiceByIdBody.prototype.getPriceModelId = function() {
    return this.priceModelId;
};

/**
 * Setter for PriceModelId
 * 
 * @param {int|null} value 
 */
UpdateServiceByIdBody.prototype.setPriceModelId = function(value) {
    this.priceModelId = value;
};

/**
 * Optional List of comma-separated Resource IDs that will provide this Service, default: API user's resource id
 *
 * @return {string|null}
 */
UpdateServiceByIdBody.prototype.getResources = function() {
    return this.resources;
};

/**
 * Setter for Resources
 * 
 * @param {string|null} value 
 */
UpdateServiceByIdBody.prototype.setResources = function(value) {
    this.resources = value;
};

/**
 * Optional abbreviated Service name
 *
 * @return {string|null}
 */
UpdateServiceByIdBody.prototype.getShortName = function() {
    return this.shortName;
};

/**
 * Setter for ShortName
 * 
 * @param {string|null} value 
 */
UpdateServiceByIdBody.prototype.setShortName = function(value) {
    this.shortName = value;
};


module.exports = UpdateServiceByIdBody;