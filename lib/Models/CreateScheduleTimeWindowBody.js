
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 01/05/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateScheduleTimeWindowBody
 *
 * @constructor
 */
function CreateScheduleTimeWindowBody() {
    this.startDate = null;     
    this.endDate = null;     
    this.startTime = null;     
    this.endTime = null;     
    this.totalMinutes = null;     
    this.days = null;     
    this.recursBy = null;     
    this.frequency = null;     
    this.occurrence = null;     
    this.dateRecursBy = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['startDate'] = 'start_date';
    this._variableDict['endDate'] = 'end_date';
    this._variableDict['startTime'] = 'start_time';
    this._variableDict['endTime'] = 'end_time';
    this._variableDict['totalMinutes'] = 'total_minutes';
    this._variableDict['recursBy'] = 'recurs_by';
    this._variableDict['dateRecursBy'] = 'date_recurs_by';
    this._variableDict['apiKey'] = 'api_key';
}

CreateScheduleTimeWindowBody.prototype = new BaseModel();
CreateScheduleTimeWindowBody.prototype.constructor = BaseModel;

/**
 * Start Date of TimeWindow.  Several formats are supported: '2014-10-31', 'October 31, 2014'.
 *
 * @return {DateTime}
 */
CreateScheduleTimeWindowBody.prototype.getStartDate = function() {
    return this.startDate;
};

/**
 * Setter for StartDate
 * 
 * @param {DateTime} value 
 */
CreateScheduleTimeWindowBody.prototype.setStartDate = function(value) {
    this.startDate = value;
};

/**
 * Optional End Date of TimeWindow, leave blank for infinitely available.  Several formats are supported: '2014-10-31', 'October 31, 2014'.
 *
 * @return {DateTime|null}
 */
CreateScheduleTimeWindowBody.prototype.getEndDate = function() {
    return this.endDate;
};

/**
 * Setter for EndDate
 * 
 * @param {DateTime|null} value 
 */
CreateScheduleTimeWindowBody.prototype.setEndDate = function(value) {
    this.endDate = value;
};

/**
 * Start Time of TimeWindow.  Several formats are supported: '9am', '09:00', '9:00', '0900'
 *
 * @return {string}
 */
CreateScheduleTimeWindowBody.prototype.getStartTime = function() {
    return this.startTime;
};

/**
 * Setter for StartTime
 * 
 * @param {string} value 
 */
CreateScheduleTimeWindowBody.prototype.setStartTime = function(value) {
    this.startTime = value;
};

/**
 * End Time of TimeWindow.  Several formats are supported: '5pm', '17:00', '1700'
 *
 * @return {string}
 */
CreateScheduleTimeWindowBody.prototype.getEndTime = function() {
    return this.endTime;
};

/**
 * Setter for EndTime
 * 
 * @param {string} value 
 */
CreateScheduleTimeWindowBody.prototype.setEndTime = function(value) {
    this.endTime = value;
};

/**
 * Optional total number of minutes in TimeWindow.  Useful when duration of window is greater than 24 hours.
 *
 * @return {int|null}
 */
CreateScheduleTimeWindowBody.prototype.getTotalMinutes = function() {
    return this.totalMinutes;
};

/**
 * Setter for TotalMinutes
 * 
 * @param {int|null} value 
 */
CreateScheduleTimeWindowBody.prototype.setTotalMinutes = function(value) {
    this.totalMinutes = value;
};

/**
 * List of comma-separated days of the week this window of time falls on.  If provided, at least one must be specified.
 *
 * @return {string}
 */
CreateScheduleTimeWindowBody.prototype.getDays = function() {
    return this.days;
};

/**
 * Setter for Days
 * 
 * @param {string} value 
 */
CreateScheduleTimeWindowBody.prototype.setDays = function(value) {
    this.days = value;
};

/**
 * One of the possible recurrence values
 *
 * @return {string}
 */
CreateScheduleTimeWindowBody.prototype.getRecursBy = function() {
    return this.recursBy;
};

/**
 * Setter for RecursBy
 * 
 * @param {string} value 
 */
CreateScheduleTimeWindowBody.prototype.setRecursBy = function(value) {
    this.recursBy = value;
};

/**
 * Optional frequency of recurrence as specified by :recurs_by.  E.g, :single, :every, :every_other, etc. If not provided, assumed to be :every
 *
 * @return {string|null}
 */
CreateScheduleTimeWindowBody.prototype.getFrequency = function() {
    return this.frequency;
};

/**
 * Setter for Frequency
 * 
 * @param {string|null} value 
 */
CreateScheduleTimeWindowBody.prototype.setFrequency = function(value) {
    this.frequency = value;
};

/**
 * Optional occurrence of frequency. E.g, :first, :2nd, :last, :2nd_to_last, etc.  If not provided, assumed to be :every
 *
 * @return {string|null}
 */
CreateScheduleTimeWindowBody.prototype.getOccurrence = function() {
    return this.occurrence;
};

/**
 * Setter for Occurrence
 * 
 * @param {string|null} value 
 */
CreateScheduleTimeWindowBody.prototype.setOccurrence = function(value) {
    this.occurrence = value;
};

/**
 * Required only when :recurs_by is 'monthly' or 'yearly' to differentiate between exact date or 'day in month/year'.  See Schedule examples.
 *
 * @return {string|null}
 */
CreateScheduleTimeWindowBody.prototype.getDateRecursBy = function() {
    return this.dateRecursBy;
};

/**
 * Setter for DateRecursBy
 * 
 * @param {string|null} value 
 */
CreateScheduleTimeWindowBody.prototype.setDateRecursBy = function(value) {
    this.dateRecursBy = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
CreateScheduleTimeWindowBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
CreateScheduleTimeWindowBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = CreateScheduleTimeWindowBody;