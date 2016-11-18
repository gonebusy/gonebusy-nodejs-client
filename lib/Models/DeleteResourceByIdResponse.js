
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of DeleteResourceByIdResponse
 *
 * @constructor
 */
DeleteResourceByIdResponse = function (obj) {
    if(!obj) {
        this.resource = null;     
    } else {
        this.resource = new EntitiesResourceResponse(obj.resource);
    }
};

DeleteResourceByIdResponse.prototype = new BaseModel();
DeleteResourceByIdResponse.prototype.constructor = DeleteResourceByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesResourceResponse|null}
 */
DeleteResourceByIdResponse.prototype.getResource = function() {
    return this.resource;
};

/**
 * Setter for Resource
 * 
 * @param {EntitiesResourceResponse|null} value 
 */
DeleteResourceByIdResponse.prototype.setResource = function(value) {
    this.resource = value;
};


module.exports = DeleteResourceByIdResponse;