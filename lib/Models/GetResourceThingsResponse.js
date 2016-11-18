
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetResourceThingsResponse
 *
 * @constructor
 */
GetResourceThingsResponse = function (obj) {
    if(!obj) {
        this.things = null;     
    } else {
        this.things = obj.things.map(function(model){
            return new EntitiesThingTypeResponse(model);
        });
    }
};

GetResourceThingsResponse.prototype = new BaseModel();
GetResourceThingsResponse.prototype.constructor = GetResourceThingsResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetResourceThingsResponse.prototype.getThings = function() {
    return this.things;
};

/**
 * Setter for Things
 * 
 * @param {array|null} value 
 */
GetResourceThingsResponse.prototype.setThings = function(value) {
    this.things = value;
};


module.exports = GetResourceThingsResponse;