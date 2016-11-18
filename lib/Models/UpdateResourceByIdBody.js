
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateResourceByIdBody
 *
 * @constructor
 */
UpdateResourceByIdBody = function (obj) {
    if(!obj) {
        this.capacity = null;     
        this.description = null;     
        this.gender = null;     
        this.name = null;     
        this.thingTypeId = null;     
        //Append to variable dictionary
        this._variableDict['thingTypeId'] = 'thing_type_id';
    } else {
        this.capacity = obj.capacity;
        this.description = obj.description;
        this.gender = obj.gender;
        this.name = obj.name;
        this.thingTypeId = obj.thing_type_id;
        //Append to variable dictionary
        this._variableDict['thingTypeId'] = 'thing_type_id';
    }
};

UpdateResourceByIdBody.prototype = new BaseModel();
UpdateResourceByIdBody.prototype.constructor = UpdateResourceByIdBody;

/**
 * Optional Capacity
 *
 * @return {int|null}
 */
UpdateResourceByIdBody.prototype.getCapacity = function() {
    return this.capacity;
};

/**
 * Setter for Capacity
 * 
 * @param {int|null} value 
 */
UpdateResourceByIdBody.prototype.setCapacity = function(value) {
    this.capacity = value;
};

/**
 * Optional Description
 *
 * @return {string|null}
 */
UpdateResourceByIdBody.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
UpdateResourceByIdBody.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * Optional Gender
 *
 * @return {GenderEnum|null}
 */
UpdateResourceByIdBody.prototype.getGender = function() {
    return this.gender;
};

/**
 * Setter for Gender
 * 
 * @param {GenderEnum|null} value 
 */
UpdateResourceByIdBody.prototype.setGender = function(value) {
    this.gender = value;
};

/**
 * Resource Name
 *
 * @return {string|null}
 */
UpdateResourceByIdBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
UpdateResourceByIdBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * When Resource is a Thing, the type Id
 *
 * @return {int|null}
 */
UpdateResourceByIdBody.prototype.getThingTypeId = function() {
    return this.thingTypeId;
};

/**
 * Setter for ThingTypeId
 * 
 * @param {int|null} value 
 */
UpdateResourceByIdBody.prototype.setThingTypeId = function(value) {
    this.thingTypeId = value;
};


module.exports = UpdateResourceByIdBody;