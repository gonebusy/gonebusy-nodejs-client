
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateScheduleTimeWindowByIdBody
 *
 * @constructor
 */
function UpdateScheduleTimeWindowByIdBody() {
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

UpdateScheduleTimeWindowByIdBody.prototype = new BaseModel();
UpdateScheduleTimeWindowByIdBody.prototype.constructor = BaseModel;

/**
 * Start Date of TimeWindow. Several formats are supported: '2014-10-31', 'October 31, 2014'.
 *
 * @return {DateTime|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getStartDate = function() {
    return this.startDate;
};

/**
 * Setter for StartDate
 * 
 * @param {DateTime|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setStartDate = function(value) {
    this.startDate = value;
};

/**
 * End Date of TimeWindow, leave blank for infinitely available. Several formats are supported: '2014-10-31', 'October 31, 2014'.
 *
 * @return {DateTime|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getEndDate = function() {
    return this.endDate;
};

/**
 * Setter for EndDate
 * 
 * @param {DateTime|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setEndDate = function(value) {
    this.endDate = value;
};

/**
 * Start Time of first TimeWindow.  Several formats are supported: '9am', '09:00', '9:00', '0900'
 *
 * @return {string|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getStartTime = function() {
    return this.startTime;
};

/**
 * Setter for StartTime
 * 
 * @param {string|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setStartTime = function(value) {
    this.startTime = value;
};

/**
 * End Time of first TimeWindow.  Several formats are supported: '5pm', '17:00', '1700'
 *
 * @return {string|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getEndTime = function() {
    return this.endTime;
};

/**
 * Setter for EndTime
 * 
 * @param {string|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setEndTime = function(value) {
    this.endTime = value;
};

/**
 * Optional total number of minutes in TimeWindow.  Useful when duration of window is greater than 24 hours.
 *
 * @return {int|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getTotalMinutes = function() {
    return this.totalMinutes;
};

/**
 * Setter for TotalMinutes
 * 
 * @param {int|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setTotalMinutes = function(value) {
    this.totalMinutes = value;
};

/**
 * List of comma-separated days of the week this window of time falls on.  If provided, at least one must be specified.
 *
 * @return {string|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getDays = function() {
    return this.days;
};

/**
 * Setter for Days
 * 
 * @param {string|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setDays = function(value) {
    this.days = value;
};

/**
 * One of the possible recurrence values
 *
 * @return {string|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getRecursBy = function() {
    return this.recursBy;
};

/**
 * Setter for RecursBy
 * 
 * @param {string|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setRecursBy = function(value) {
    this.recursBy = value;
};

/**
 * Optional frequency of recurrence as specified by :recurs_by.  E.g, :single, :every, :every_other, etc. If not provided, assumed to be :every
 *
 * @return {string|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getFrequency = function() {
    return this.frequency;
};

/**
 * Setter for Frequency
 * 
 * @param {string|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setFrequency = function(value) {
    this.frequency = value;
};

/**
 * Optional occurrence of frequency. E.g, :first, :2nd, :last, :2nd_to_last, etc.  If not provided, assumed to be :every.  See Schedule examples.
 *
 * @return {string|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getOccurrence = function() {
    return this.occurrence;
};

/**
 * Setter for Occurrence
 * 
 * @param {string|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setOccurrence = function(value) {
    this.occurrence = value;
};

/**
 * Required only when :recurs_by is 'monthly' or 'yearly' to differentiate between exact date or 'day in month/year'.  See Schedule examples.
 *
 * @return {string|null}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getDateRecursBy = function() {
    return this.dateRecursBy;
};

/**
 * Setter for DateRecursBy
 * 
 * @param {string|null} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setDateRecursBy = function(value) {
    this.dateRecursBy = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
UpdateScheduleTimeWindowByIdBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
UpdateScheduleTimeWindowByIdBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = UpdateScheduleTimeWindowByIdBody;