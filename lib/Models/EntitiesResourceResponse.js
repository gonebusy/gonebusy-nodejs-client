
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesResourceResponse
 *
 * @constructor
 */
EntitiesResourceResponse = function (obj) {
    if(!obj) {
        this.capacity = null;     
        this.description = null;     
        this.gender = null;     
        this.id = null;     
        this.name = null;     
        this.ownerId = null;     
        this.resourceType = null;     
        this.thingTypeId = null;     
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['primaryCal'] = 'primary_cal';
        this._variableDict['resourceType'] = 'resource_type';
        this._variableDict['thingTypeId'] = 'thing_type_id';
    } else {
        this.capacity = obj.capacity;
        this.description = obj.description;
        this.gender = obj.gender;
        this.id = obj.id;
        this.name = obj.name;
        this.ownerId = obj.owner_id;
        this.primaryCal = obj.primary_cal;
        this.resourceType = obj.resource_type;
        this.thingTypeId = obj.thing_type_id;
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['primaryCal'] = 'primary_cal';
        this._variableDict['resourceType'] = 'resource_type';
        this._variableDict['thingTypeId'] = 'thing_type_id';
    }
};

EntitiesResourceResponse.prototype = new BaseModel();
EntitiesResourceResponse.prototype.constructor = EntitiesResourceResponse;

/**
 * capacity of Resource, if applicable
 *
 * @return {int|null}
 */
EntitiesResourceResponse.prototype.getCapacity = function() {
    return this.capacity;
};

/**
 * Setter for Capacity
 * 
 * @param {int|null} value 
 */
EntitiesResourceResponse.prototype.setCapacity = function(value) {
    this.capacity = value;
};

/**
 * description of Resource
 *
 * @return {string|null}
 */
EntitiesResourceResponse.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
EntitiesResourceResponse.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * gender of Resource, if applicable
 *
 * @return {string|null}
 */
EntitiesResourceResponse.prototype.getGender = function() {
    return this.gender;
};

/**
 * Setter for Gender
 * 
 * @param {string|null} value 
 */
EntitiesResourceResponse.prototype.setGender = function(value) {
    this.gender = value;
};

/**
 * id of Resource
 *
 * @return {int|null}
 */
EntitiesResourceResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesResourceResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * name of Resource
 *
 * @return {string|null}
 */
EntitiesResourceResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
EntitiesResourceResponse.prototype.setName = function(value) {
    this.name = value;
};

/**
 * id of User owning Resource
 *
 * @return {int|null}
 */
EntitiesResourceResponse.prototype.getOwnerId = function() {
    return this.ownerId;
};

/**
 * Setter for OwnerId
 * 
 * @param {int|null} value 
 */
EntitiesResourceResponse.prototype.setOwnerId = function(value) {
    this.ownerId = value;
};

/**
 * if Calendar is primary, if applicable
 *
 * @return {bool|null}  Returns {primaryCal} property of EntitiesResourceResponse class
 */
EntitiesResourceResponse.prototype.getPrimaryCal = function() {
    return this.primaryCal;
};

/**
 * Setter for PrimaryCal
 *
 * @param {bool|null} value  Sets the value of primaryCal property of EntitiesResourceResponse class
 */
EntitiesResourceResponse.prototype.setPrimaryCal = function(value) {
    this.primaryCal = value;
};

/**
 * type of Resource
 *
 * @return {string|null}
 */
EntitiesResourceResponse.prototype.getResourceType = function() {
    return this.resourceType;
};

/**
 * Setter for ResourceType
 * 
 * @param {string|null} value 
 */
EntitiesResourceResponse.prototype.setResourceType = function(value) {
    this.resourceType = value;
};

/**
 * type Id of Thing Resource, if applicable
 *
 * @return {int|null}
 */
EntitiesResourceResponse.prototype.getThingTypeId = function() {
    return this.thingTypeId;
};

/**
 * Setter for ThingTypeId
 * 
 * @param {int|null} value 
 */
EntitiesResourceResponse.prototype.setThingTypeId = function(value) {
    this.thingTypeId = value;
};


module.exports = EntitiesResourceResponse;
