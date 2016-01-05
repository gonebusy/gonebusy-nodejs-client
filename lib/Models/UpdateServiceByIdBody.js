
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 01/05/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateServiceByIdBody
 *
 * @constructor
 */
function UpdateServiceByIdBody() {
    this.name = null;     
    this.description = null;     
    this.duration = null;     
    this.shortName = null;     
    this.priceModelId = null;     
    this.resources = null;     
    this.categories = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['shortName'] = 'short_name';
    this._variableDict['priceModelId'] = 'price_model_id';
    this._variableDict['apiKey'] = 'api_key';
}

UpdateServiceByIdBody.prototype = new BaseModel();
UpdateServiceByIdBody.prototype.constructor = BaseModel;

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
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
UpdateServiceByIdBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
UpdateServiceByIdBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = UpdateServiceByIdBody;