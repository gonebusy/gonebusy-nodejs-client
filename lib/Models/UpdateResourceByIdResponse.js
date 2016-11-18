
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateResourceByIdResponse
 *
 * @constructor
 */
UpdateResourceByIdResponse = function (obj) {
    if(!obj) {
        this.resource = null;     
    } else {
        this.resource = new EntitiesResourceResponse(obj.resource);
    }
};

UpdateResourceByIdResponse.prototype = new BaseModel();
UpdateResourceByIdResponse.prototype.constructor = UpdateResourceByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesResourceResponse|null}
 */
UpdateResourceByIdResponse.prototype.getResource = function() {
    return this.resource;
};

/**
 * Setter for Resource
 * 
 * @param {EntitiesResourceResponse|null} value 
 */
UpdateResourceByIdResponse.prototype.setResource = function(value) {
    this.resource = value;
};


module.exports = UpdateResourceByIdResponse;