
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateScheduleBody
 *
 * @constructor
 */
CreateScheduleBody = function (obj) {
    if(!obj) {
        this.serviceId = null;     
        this.dateRecursBy = null;     
        this.days = null;     
        this.endDate = null;     
        this.endTime = null;     
        this.frequency = null;     
        this.occurrence = null;     
        this.recursBy = null;     
        this.resourceId = null;     
        this.startDate = null;     
        this.startTime = null;     
        this.totalMinutes = null;     
        this.userId = null;     
        //Append to variable dictionary
        this._variableDict['serviceId'] = 'service_id';
        this._variableDict['dateRecursBy'] = 'date_recurs_by';
        this._variableDict['endDate'] = 'end_date';
        this._variableDict['endTime'] = 'end_time';
        this._variableDict['recursBy'] = 'recurs_by';
        this._variableDict['resourceId'] = 'resource_id';
        this._variableDict['startDate'] = 'start_date';
        this._variableDict['startTime'] = 'start_time';
        this._variableDict['totalMinutes'] = 'total_minutes';
        this._variableDict['userId'] = 'user_id';
    } else {
        this.serviceId = obj.service_id;
        this.dateRecursBy = obj.date_recurs_by;
        this.days = obj.days;
        this.endDate = new Date(obj.end_date);
        this.endTime = obj.end_time;
        this.frequency = obj.frequency;
        this.occurrence = obj.occurrence;
        this.recursBy = obj.recurs_by;
        this.resourceId = obj.resource_id;
        this.startDate = new Date(obj.start_date);
        this.startTime = obj.start_time;
        this.totalMinutes = obj.total_minutes;
        this.userId = obj.user_id;
        //Append to variable dictionary
        this._variableDict['serviceId'] = 'service_id';
        this._variableDict['dateRecursBy'] = 'date_recurs_by';
        this._variableDict['endDate'] = 'end_date';
        this._variableDict['endTime'] = 'end_time';
        this._variableDict['recursBy'] = 'recurs_by';
        this._variableDict['resourceId'] = 'resource_id';
        this._variableDict['startDate'] = 'start_date';
        this._variableDict['startTime'] = 'start_time';
        this._variableDict['totalMinutes'] = 'total_minutes';
        this._variableDict['userId'] = 'user_id';
    }
};

CreateScheduleBody.prototype = new BaseModel();
CreateScheduleBody.prototype.constructor = CreateScheduleBody;

/**
 * ID of Service being scheduled.
 *
 * @return {int}
 */
CreateScheduleBody.prototype.getServiceId = function() {
    return this.serviceId;
};

/**
 * Setter for ServiceId
 * 
 * @param {int} value 
 */
CreateScheduleBody.prototype.setServiceId = function(value) {
    this.serviceId = value;
};

/**
 * Required only when :recurs_by is 'monthly' or 'yearly' to differentiate between exact date or 'day in month/year'.  See Schedule examples.
 *
 * @return {DateRecursByEnum|null}
 */
CreateScheduleBody.prototype.getDateRecursBy = function() {
    return this.dateRecursBy;
};

/**
 * Setter for DateRecursBy
 * 
 * @param {DateRecursByEnum|null} value 
 */
CreateScheduleBody.prototype.setDateRecursBy = function(value) {
    this.dateRecursBy = value;
};

/**
 * List of comma-separated days of the week this window of time falls on.  If provided, at least one must be specified.
 *
 * @return {string|null}
 */
CreateScheduleBody.prototype.getDays = function() {
    return this.days;
};

/**
 * Setter for Days
 * 
 * @param {string|null} value 
 */
CreateScheduleBody.prototype.setDays = function(value) {
    this.days = value;
};

/**
 * Optional End Date of first TimeWindow, leave blank for infinitely available.  Several formats are supported: '2014-10-31', 'October 31, 2014'.
 *
 * @return {dateTime|null}
 */
CreateScheduleBody.prototype.getEndDate = function() {
    return this.endDate;
};

/**
 * Setter for EndDate
 * 
 * @param {dateTime|null} value 
 */
CreateScheduleBody.prototype.setEndDate = function(value) {
    this.endDate = value;
};

/**
 * End Time of first TimeWindow.  Several formats are supported: '5pm', '17:00', '1700'
 *
 * @return {string|null}
 */
CreateScheduleBody.prototype.getEndTime = function() {
    return this.endTime;
};

/**
 * Setter for EndTime
 * 
 * @param {string|null} value 
 */
CreateScheduleBody.prototype.setEndTime = function(value) {
    this.endTime = value;
};

/**
 * Optional frequency of recurrence as specified by :recurs_by.  E.g, :single, :every, :every_other, etc. If not provided, assumed to be :every
 *
 * @return {FrequencyEnum|null}
 */
CreateScheduleBody.prototype.getFrequency = function() {
    return this.frequency;
};

/**
 * Setter for Frequency
 * 
 * @param {FrequencyEnum|null} value 
 */
CreateScheduleBody.prototype.setFrequency = function(value) {
    this.frequency = value;
};

/**
 * Optional occurrence of frequency. E.g, :first, :2nd, :last, :2nd_to_last, etc.  If not provided, assumed to be :every
 *
 * @return {OccurrenceEnum|null}
 */
CreateScheduleBody.prototype.getOccurrence = function() {
    return this.occurrence;
};

/**
 * Setter for Occurrence
 * 
 * @param {OccurrenceEnum|null} value 
 */
CreateScheduleBody.prototype.setOccurrence = function(value) {
    this.occurrence = value;
};

/**
 * One of the possible recurrence values
 *
 * @return {RecursByEnum|null}
 */
CreateScheduleBody.prototype.getRecursBy = function() {
    return this.recursBy;
};

/**
 * Setter for RecursBy
 * 
 * @param {RecursByEnum|null} value 
 */
CreateScheduleBody.prototype.setRecursBy = function(value) {
    this.recursBy = value;
};

/**
 * ID of Resource being scheduled.  If not provided and :user_id is not present, the default Resource of the API user is assumed to be the Resource being scheduled.  If not provided and :user_id is present, the default Resource of the User is assumed to be the Resource being Scheduled.
 *
 * @return {int|null}
 */
CreateScheduleBody.prototype.getResourceId = function() {
    return this.resourceId;
};

/**
 * Setter for ResourceId
 * 
 * @param {int|null} value 
 */
CreateScheduleBody.prototype.setResourceId = function(value) {
    this.resourceId = value;
};

/**
 * Start Date of first TimeWindow.  Several formats are supported: '2014-10-31', 'October 31, 2014'.
 *
 * @return {dateTime|null}
 */
CreateScheduleBody.prototype.getStartDate = function() {
    return this.startDate;
};

/**
 * Setter for StartDate
 * 
 * @param {dateTime|null} value 
 */
CreateScheduleBody.prototype.setStartDate = function(value) {
    this.startDate = value;
};

/**
 * Start Time of first TimeWindow.  Several formats are supported: '9am', '09:00', '9:00', '0900'
 *
 * @return {string|null}
 */
CreateScheduleBody.prototype.getStartTime = function() {
    return this.startTime;
};

/**
 * Setter for StartTime
 * 
 * @param {string|null} value 
 */
CreateScheduleBody.prototype.setStartTime = function(value) {
    this.startTime = value;
};

/**
 * Optional total number of minutes in TimeWindow.  Useful when duration of window is greater than 24 hours.
 *
 * @return {int|null}
 */
CreateScheduleBody.prototype.getTotalMinutes = function() {
    return this.totalMinutes;
};

/**
 * Setter for TotalMinutes
 * 
 * @param {int|null} value 
 */
CreateScheduleBody.prototype.setTotalMinutes = function(value) {
    this.totalMinutes = value;
};

/**
 * ID of User to create Schedule for.  You must be authorized to manage this User Id and User must own desired Service and Resource.
 *
 * @return {int|null}
 */
CreateScheduleBody.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {int|null} value 
 */
CreateScheduleBody.prototype.setUserId = function(value) {
    this.userId = value;
};


module.exports = CreateScheduleBody;