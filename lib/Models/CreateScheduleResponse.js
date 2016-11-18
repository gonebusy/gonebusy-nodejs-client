
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateScheduleResponse
 *
 * @constructor
 */
CreateScheduleResponse = function (obj) {
    if(!obj) {
        this.schedule = null;     
    } else {
        this.schedule = new EntitiesScheduleResponse(obj.schedule);
    }
};

CreateScheduleResponse.prototype = new BaseModel();
CreateScheduleResponse.prototype.constructor = CreateScheduleResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesScheduleResponse|null}
 */
CreateScheduleResponse.prototype.getSchedule = function() {
    return this.schedule;
};

/**
 * Setter for Schedule
 * 
 * @param {EntitiesScheduleResponse|null} value 
 */
CreateScheduleResponse.prototype.setSchedule = function(value) {
    this.schedule = value;
};


module.exports = CreateScheduleResponse;