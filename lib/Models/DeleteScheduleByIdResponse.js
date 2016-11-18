
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of DeleteScheduleByIdResponse
 *
 * @constructor
 */
DeleteScheduleByIdResponse = function (obj) {
    if(!obj) {
        this.schedule = null;     
    } else {
        this.schedule = new EntitiesScheduleResponse(obj.schedule);
    }
};

DeleteScheduleByIdResponse.prototype = new BaseModel();
DeleteScheduleByIdResponse.prototype.constructor = DeleteScheduleByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesScheduleResponse|null}
 */
DeleteScheduleByIdResponse.prototype.getSchedule = function() {
    return this.schedule;
};

/**
 * Setter for Schedule
 * 
 * @param {EntitiesScheduleResponse|null} value 
 */
DeleteScheduleByIdResponse.prototype.setSchedule = function(value) {
    this.schedule = value;
};


module.exports = DeleteScheduleByIdResponse;