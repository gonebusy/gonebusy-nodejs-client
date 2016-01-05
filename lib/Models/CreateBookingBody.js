
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 01/05/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateBookingBody
 *
 * @constructor
 */
function CreateBookingBody() {
    this.serviceId = null;     
    this.date = null;     
    this.time = null;     
    this.resourceId = null;     
    this.duration = null;     
    this.userId = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['serviceId'] = 'service_id';
    this._variableDict['resourceId'] = 'resource_id';
    this._variableDict['userId'] = 'user_id';
    this._variableDict['apiKey'] = 'api_key';
}

CreateBookingBody.prototype = new BaseModel();
CreateBookingBody.prototype.constructor = BaseModel;

/**
 * ID of Service being booked
 *
 * @return {int}
 */
CreateBookingBody.prototype.getServiceId = function() {
    return this.serviceId;
};

/**
 * Setter for ServiceId
 * 
 * @param {int} value 
 */
CreateBookingBody.prototype.setServiceId = function(value) {
    this.serviceId = value;
};

/**
 * Desired date of booking.  Several formats are supported: "2014-10-31", "October 31, 2014"
 *
 * @return {string}
 */
CreateBookingBody.prototype.getDate = function() {
    return this.date;
};

/**
 * Setter for Date
 * 
 * @param {string} value 
 */
CreateBookingBody.prototype.setDate = function(value) {
    this.date = value;
};

/**
 * Desired time of booking.  Several formats are supported: '9am', '09:00', '9:00', '0900'
 *
 * @return {string}
 */
CreateBookingBody.prototype.getTime = function() {
    return this.time;
};

/**
 * Setter for Time
 * 
 * @param {string} value 
 */
CreateBookingBody.prototype.setTime = function(value) {
    this.time = value;
};

/**
 * ID of a Resource to be booked.  If not provided, the first available Resource will be booked.
 *
 * @return {int|null}
 */
CreateBookingBody.prototype.getResourceId = function() {
    return this.resourceId;
};

/**
 * Setter for ResourceId
 * 
 * @param {int|null} value 
 */
CreateBookingBody.prototype.setResourceId = function(value) {
    this.resourceId = value;
};

/**
 * Length of time, in minutes, for the desired booking - if Service allows requesting a variable amount of time
 *
 * @return {int|null}
 */
CreateBookingBody.prototype.getDuration = function() {
    return this.duration;
};

/**
 * Setter for Duration
 * 
 * @param {int|null} value 
 */
CreateBookingBody.prototype.setDuration = function(value) {
    this.duration = value;
};

/**
 * Create a booking for this User Id.  You must be authorized to manage this User Id.
 *
 * @return {int|null}
 */
CreateBookingBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {int|null} value 
 */
CreateBookingBody.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
CreateBookingBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
CreateBookingBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = CreateBookingBody;