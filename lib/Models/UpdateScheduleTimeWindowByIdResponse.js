
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateScheduleTimeWindowByIdResponse
 *
 * @constructor
 */
UpdateScheduleTimeWindowByIdResponse = function (obj) {
    if(!obj) {
        this.schedule = null;     
    } else {
        this.schedule = new EntitiesScheduleResponse(obj.schedule);
    }
};

UpdateScheduleTimeWindowByIdResponse.prototype = new BaseModel();
UpdateScheduleTimeWindowByIdResponse.prototype.constructor = UpdateScheduleTimeWindowByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesScheduleResponse|null}
 */
UpdateScheduleTimeWindowByIdResponse.prototype.getSchedule = function() {
    return this.schedule;
};

/**
 * Setter for Schedule
 * 
 * @param {EntitiesScheduleResponse|null} value 
 */
UpdateScheduleTimeWindowByIdResponse.prototype.setSchedule = function(value) {
    this.schedule = value;
};


module.exports = UpdateScheduleTimeWindowByIdResponse;