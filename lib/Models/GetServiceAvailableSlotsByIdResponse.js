
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetServiceAvailableSlotsByIdResponse
 *
 * @constructor
 */
GetServiceAvailableSlotsByIdResponse = function (obj) {
    if(!obj) {
        this.service = null;     
    } else {
        this.service = new EntitiesAvailabilityResponse(obj.service);
    }
};

GetServiceAvailableSlotsByIdResponse.prototype = new BaseModel();
GetServiceAvailableSlotsByIdResponse.prototype.constructor = GetServiceAvailableSlotsByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesAvailabilityResponse|null}
 */
GetServiceAvailableSlotsByIdResponse.prototype.getService = function() {
    return this.service;
};

/**
 * Setter for Service
 * 
 * @param {EntitiesAvailabilityResponse|null} value 
 */
GetServiceAvailableSlotsByIdResponse.prototype.setService = function(value) {
    this.service = value;
};


module.exports = GetServiceAvailableSlotsByIdResponse;