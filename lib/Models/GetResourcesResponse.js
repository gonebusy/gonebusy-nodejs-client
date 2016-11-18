
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetResourcesResponse
 *
 * @constructor
 */
GetResourcesResponse = function (obj) {
    if(!obj) {
        this.resources = null;     
    } else {
        this.resources = obj.resources.map(function(model){
            return new EntitiesResourceResponse(model);
        });
    }
};

GetResourcesResponse.prototype = new BaseModel();
GetResourcesResponse.prototype.constructor = GetResourcesResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetResourcesResponse.prototype.getResources = function() {
    return this.resources;
};

/**
 * Setter for Resources
 * 
 * @param {array|null} value 
 */
GetResourcesResponse.prototype.setResources = function(value) {
    this.resources = value;
};


module.exports = GetResourcesResponse;