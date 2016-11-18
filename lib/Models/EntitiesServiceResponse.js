
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesServiceResponse
 *
 * @constructor
 */
EntitiesServiceResponse = function (obj) {
    if(!obj) {
        this.categories = null;     
        this.description = null;     
        this.duration = null;     
        this.id = null;     
        this.isActive = null;     
        this.name = null;     
        this.ownerId = null;     
        this.priceModelId = null;     
        this.resources = null;     
        this.shortName = null;     
        //Append to variable dictionary
        this._variableDict['isActive'] = 'is_active';
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['priceModelId'] = 'price_model_id';
        this._variableDict['shortName'] = 'short_name';
    } else {
        this.categories = obj.categories;
        this.description = obj.description;
        this.duration = obj.duration;
        this.id = obj.id;
        this.isActive = obj.is_active;
        this.name = obj.name;
        this.ownerId = obj.owner_id;
        this.priceModelId = obj.price_model_id;
        this.resources = obj.resources;
        this.shortName = obj.short_name;
        //Append to variable dictionary
        this._variableDict['isActive'] = 'is_active';
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['priceModelId'] = 'price_model_id';
        this._variableDict['shortName'] = 'short_name';
    }
};

EntitiesServiceResponse.prototype = new BaseModel();
EntitiesServiceResponse.prototype.constructor = EntitiesServiceResponse;

/**
 * array of Category ids Service belongs to
 *
 * @return {array|null}
 */
EntitiesServiceResponse.prototype.getCategories = function() {
    return this.categories;
};

/**
 * Setter for Categories
 * 
 * @param {array|null} value 
 */
EntitiesServiceResponse.prototype.setCategories = function(value) {
    this.categories = value;
};

/**
 * description of Service
 *
 * @return {string|null}
 */
EntitiesServiceResponse.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
EntitiesServiceResponse.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * length in minutes of Service
 *
 * @return {int|null}
 */
EntitiesServiceResponse.prototype.getDuration = function() {
    return this.duration;
};

/**
 * Setter for Duration
 * 
 * @param {int|null} value 
 */
EntitiesServiceResponse.prototype.setDuration = function(value) {
    this.duration = value;
};

/**
 * id of Service
 *
 * @return {int|null}
 */
EntitiesServiceResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesServiceResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * status of Service
 *
 * @return {bool|null}
 */
EntitiesServiceResponse.prototype.getIsActive = function() {
    return this.isActive;
};

/**
 * Setter for IsActive
 * 
 * @param {bool|null} value 
 */
EntitiesServiceResponse.prototype.setIsActive = function(value) {
    this.isActive = value;
};

/**
 * name of Service
 *
 * @return {string|null}
 */
EntitiesServiceResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
EntitiesServiceResponse.prototype.setName = function(value) {
    this.name = value;
};

/**
 * id of owner of Service
 *
 * @return {int|null}
 */
EntitiesServiceResponse.prototype.getOwnerId = function() {
    return this.ownerId;
};

/**
 * Setter for OwnerId
 * 
 * @param {int|null} value 
 */
EntitiesServiceResponse.prototype.setOwnerId = function(value) {
    this.ownerId = value;
};

/**
 * id of Pricing Model
 *
 * @return {int|null}
 */
EntitiesServiceResponse.prototype.getPriceModelId = function() {
    return this.priceModelId;
};

/**
 * Setter for PriceModelId
 * 
 * @param {int|null} value 
 */
EntitiesServiceResponse.prototype.setPriceModelId = function(value) {
    this.priceModelId = value;
};

/**
 * array of Resource ids offering Service
 *
 * @return {array|null}
 */
EntitiesServiceResponse.prototype.getResources = function() {
    return this.resources;
};

/**
 * Setter for Resources
 * 
 * @param {array|null} value 
 */
EntitiesServiceResponse.prototype.setResources = function(value) {
    this.resources = value;
};

/**
 * abbreviated name for Service
 *
 * @return {string|null}
 */
EntitiesServiceResponse.prototype.getShortName = function() {
    return this.shortName;
};

/**
 * Setter for ShortName
 * 
 * @param {string|null} value 
 */
EntitiesServiceResponse.prototype.setShortName = function(value) {
    this.shortName = value;
};


module.exports = EntitiesServiceResponse;