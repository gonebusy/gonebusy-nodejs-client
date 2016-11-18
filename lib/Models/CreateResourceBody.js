
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateResourceBody
 *
 * @constructor
 */
CreateResourceBody = function (obj) {
    if(!obj) {
        this.name = null;     
        this.type = null;     
        this.capacity = null;     
        this.description = null;     
        this.gender = null;     
        this.thingTypeId = null;     
        this.userId = null;     
        //Append to variable dictionary
        this._variableDict['thingTypeId'] = 'thing_type_id';
        this._variableDict['userId'] = 'user_id';
    } else {
        this.name = obj.name;
        this.type = obj.type;
        this.capacity = obj.capacity;
        this.description = obj.description;
        this.gender = obj.gender;
        this.thingTypeId = obj.thing_type_id;
        this.userId = obj.user_id;
        //Append to variable dictionary
        this._variableDict['thingTypeId'] = 'thing_type_id';
        this._variableDict['userId'] = 'user_id';
    }
};

CreateResourceBody.prototype = new BaseModel();
CreateResourceBody.prototype.constructor = CreateResourceBody;

/**
 * Resource Name
 *
 * @return {string}
 */
CreateResourceBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
CreateResourceBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Type of Resource
 *
 * @return {string}
 */
CreateResourceBody.prototype.getType = function() {
    return this.type;
};

/**
 * Setter for Type
 * 
 * @param {string} value 
 */
CreateResourceBody.prototype.setType = function(value) {
    this.type = value;
};

/**
 * Optional Capacity
 *
 * @return {int|null}
 */
CreateResourceBody.prototype.getCapacity = function() {
    return this.capacity;
};

/**
 * Setter for Capacity
 * 
 * @param {int|null} value 
 */
CreateResourceBody.prototype.setCapacity = function(value) {
    this.capacity = value;
};

/**
 * Optional Description
 *
 * @return {string|null}
 */
CreateResourceBody.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
CreateResourceBody.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * Optional Gender
 *
 * @return {GenderEnum|null}
 */
CreateResourceBody.prototype.getGender = function() {
    return this.gender;
};

/**
 * Setter for Gender
 * 
 * @param {GenderEnum|null} value 
 */
CreateResourceBody.prototype.setGender = function(value) {
    this.gender = value;
};

/**
 * When Resource is a Thing, the type Id
 *
 * @return {int|null}
 */
CreateResourceBody.prototype.getThingTypeId = function() {
    return this.thingTypeId;
};

/**
 * Setter for ThingTypeId
 * 
 * @param {int|null} value 
 */
CreateResourceBody.prototype.setThingTypeId = function(value) {
    this.thingTypeId = value;
};

/**
 * Create a Resource for this User Id.  You must be authorized to manage this User Id.
 *
 * @return {int|null}
 */
CreateResourceBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {int|null} value 
 */
CreateResourceBody.prototype.setUserId = function(value) {
    this.userId = value;
};


module.exports = CreateResourceBody;