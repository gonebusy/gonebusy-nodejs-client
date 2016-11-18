
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetSchedulesResponse
 *
 * @constructor
 */
GetSchedulesResponse = function (obj) {
    if(!obj) {
        this.schedules = null;     
    } else {
        this.schedules = obj.schedules.map(function(model){
            return new EntitiesScheduleResponse(model);
        });
    }
};

GetSchedulesResponse.prototype = new BaseModel();
GetSchedulesResponse.prototype.constructor = GetSchedulesResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetSchedulesResponse.prototype.getSchedules = function() {
    return this.schedules;
};

/**
 * Setter for Schedules
 * 
 * @param {array|null} value 
 */
GetSchedulesResponse.prototype.setSchedules = function(value) {
    this.schedules = value;
};


module.exports = GetSchedulesResponse;