
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateScheduleTimeWindowResponse
 *
 * @constructor
 */
CreateScheduleTimeWindowResponse = function (obj) {
    if(!obj) {
        this.schedule = null;     
    } else {
        this.schedule = new EntitiesScheduleResponse(obj.schedule);
    }
};

CreateScheduleTimeWindowResponse.prototype = new BaseModel();
CreateScheduleTimeWindowResponse.prototype.constructor = CreateScheduleTimeWindowResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesScheduleResponse|null}
 */
CreateScheduleTimeWindowResponse.prototype.getSchedule = function() {
    return this.schedule;
};

/**
 * Setter for Schedule
 * 
 * @param {EntitiesScheduleResponse|null} value 
 */
CreateScheduleTimeWindowResponse.prototype.setSchedule = function(value) {
    this.schedule = value;
};


module.exports = CreateScheduleTimeWindowResponse;