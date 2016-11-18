
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetServicesResponse
 *
 * @constructor
 */
GetServicesResponse = function (obj) {
    if(!obj) {
        this.services = null;     
    } else {
        this.services = obj.services.map(function(model){
            return new EntitiesServiceResponse(model);
        });
    }
};

GetServicesResponse.prototype = new BaseModel();
GetServicesResponse.prototype.constructor = GetServicesResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetServicesResponse.prototype.getServices = function() {
    return this.services;
};

/**
 * Setter for Services
 * 
 * @param {array|null} value 
 */
GetServicesResponse.prototype.setServices = function(value) {
    this.services = value;
};


module.exports = GetServicesResponse;