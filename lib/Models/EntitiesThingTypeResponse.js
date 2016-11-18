
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesThingTypeResponse
 *
 * @constructor
 */
EntitiesThingTypeResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.name = null;     
    } else {
        this.id = obj.id;
        this.name = obj.name;
    }
};

EntitiesThingTypeResponse.prototype = new BaseModel();
EntitiesThingTypeResponse.prototype.constructor = EntitiesThingTypeResponse;

/**
 * id of Category
 *
 * @return {int|null}
 */
EntitiesThingTypeResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesThingTypeResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * name of Category
 *
 * @return {string|null}
 */
EntitiesThingTypeResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
EntitiesThingTypeResponse.prototype.setName = function(value) {
    this.name = value;
};


module.exports = EntitiesThingTypeResponse;