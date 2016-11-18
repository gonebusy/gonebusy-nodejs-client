
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateServiceResponse
 *
 * @constructor
 */
CreateServiceResponse = function (obj) {
    if(!obj) {
        this.service = null;     
    } else {
        this.service = new EntitiesServiceResponse(obj.service);
    }
};

CreateServiceResponse.prototype = new BaseModel();
CreateServiceResponse.prototype.constructor = CreateServiceResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesServiceResponse|null}
 */
CreateServiceResponse.prototype.getService = function() {
    return this.service;
};

/**
 * Setter for Service
 * 
 * @param {EntitiesServiceResponse|null} value 
 */
CreateServiceResponse.prototype.setService = function(value) {
    this.service = value;
};


module.exports = CreateServiceResponse;