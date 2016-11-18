
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetResourceByIdResponse
 *
 * @constructor
 */
GetResourceByIdResponse = function (obj) {
    if(!obj) {
        this.resource = null;     
    } else {
        this.resource = new EntitiesResourceResponse(obj.resource);
    }
};

GetResourceByIdResponse.prototype = new BaseModel();
GetResourceByIdResponse.prototype.constructor = GetResourceByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesResourceResponse|null}
 */
GetResourceByIdResponse.prototype.getResource = function() {
    return this.resource;
};

/**
 * Setter for Resource
 * 
 * @param {EntitiesResourceResponse|null} value 
 */
GetResourceByIdResponse.prototype.setResource = function(value) {
    this.resource = value;
};


module.exports = GetResourceByIdResponse;