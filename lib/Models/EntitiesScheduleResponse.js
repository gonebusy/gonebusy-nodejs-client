
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesScheduleResponse
 *
 * @constructor
 */
EntitiesScheduleResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.ownerId = null;     
        this.resourceId = null;     
        this.serviceId = null;     
        this.timeWindows = null;     
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['resourceId'] = 'resource_id';
        this._variableDict['serviceId'] = 'service_id';
        this._variableDict['timeWindows'] = 'time_windows';
    } else {
        this.id = obj.id;
        this.ownerId = obj.owner_id;
        this.resourceId = obj.resource_id;
        this.serviceId = obj.service_id;
        this.timeWindows = obj.time_windows.map(function(model){
            return new EntitiesTimeWindowResponse(model);
        });
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['resourceId'] = 'resource_id';
        this._variableDict['serviceId'] = 'service_id';
        this._variableDict['timeWindows'] = 'time_windows';
    }
};

EntitiesScheduleResponse.prototype = new BaseModel();
EntitiesScheduleResponse.prototype.constructor = EntitiesScheduleResponse;

/**
 * id of Schedule
 *
 * @return {int|null}
 */
EntitiesScheduleResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesScheduleResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * id of owner of Schedule
 *
 * @return {int|null}
 */
EntitiesScheduleResponse.prototype.getOwnerId = function() {
    return this.ownerId;
};

/**
 * Setter for OwnerId
 * 
 * @param {int|null} value 
 */
EntitiesScheduleResponse.prototype.setOwnerId = function(value) {
    this.ownerId = value;
};

/**
 * id of Resource
 *
 * @return {int|null}
 */
EntitiesScheduleResponse.prototype.getResourceId = function() {
    return this.resourceId;
};

/**
 * Setter for ResourceId
 * 
 * @param {int|null} value 
 */
EntitiesScheduleResponse.prototype.setResourceId = function(value) {
    this.resourceId = value;
};

/**
 * id of Service
 *
 * @return {int|null}
 */
EntitiesScheduleResponse.prototype.getServiceId = function() {
    return this.serviceId;
};

/**
 * Setter for ServiceId
 * 
 * @param {int|null} value 
 */
EntitiesScheduleResponse.prototype.setServiceId = function(value) {
    this.serviceId = value;
};

/**
 * array of TimeWindows making up Schedule
 *
 * @return {array|null}
 */
EntitiesScheduleResponse.prototype.getTimeWindows = function() {
    return this.timeWindows;
};

/**
 * Setter for TimeWindows
 * 
 * @param {array|null} value 
 */
EntitiesScheduleResponse.prototype.setTimeWindows = function(value) {
    this.timeWindows = value;
};


module.exports = EntitiesScheduleResponse;
