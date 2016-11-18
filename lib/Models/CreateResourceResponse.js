
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateResourceResponse
 *
 * @constructor
 */
CreateResourceResponse = function (obj) {
    if(!obj) {
        this.resource = null;     
    } else {
        this.resource = new EntitiesResourceResponse(obj.resource);
    }
};

CreateResourceResponse.prototype = new BaseModel();
CreateResourceResponse.prototype.constructor = CreateResourceResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesResourceResponse|null}
 */
CreateResourceResponse.prototype.getResource = function() {
    return this.resource;
};

/**
 * Setter for Resource
 * 
 * @param {EntitiesResourceResponse|null} value 
 */
CreateResourceResponse.prototype.setResource = function(value) {
    this.resource = value;
};


module.exports = CreateResourceResponse;