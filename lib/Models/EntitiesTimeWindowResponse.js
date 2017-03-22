
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesTimeWindowResponse
 *
 * @constructor
 */
EntitiesTimeWindowResponse = function (obj) {
    if(!obj) {
        this.dateRecursBy = null;     
        this.days = null;     
        this.endDate = null;     
        this.endTime = null;     
        this.frequency = null;     
        this.id = null;     
        this.negation = null;     
        this.occurrence = null;     
        this.recursBy = null;     
        this.startDate = null;     
        this.startTime = null;     
        this.totalMinutes = null;     
        //Append to variable dictionary
        this._variableDict['dateRecursBy'] = 'date_recurs_by';
        this._variableDict['endDate'] = 'end_date';
        this._variableDict['endTime'] = 'end_time';
        this._variableDict['recursBy'] = 'recurs_by';
        this._variableDict['startDate'] = 'start_date';
        this._variableDict['startTime'] = 'start_time';
        this._variableDict['totalMinutes'] = 'total_minutes';
    } else {
        this.dateRecursBy = obj.date_recurs_by;
        this.days = obj.days;
        this.endDate = new Date(obj.end_date);
        this.endTime = obj.end_time;
        this.frequency = obj.frequency;
        this.id = obj.id;
        this.negation = obj.negation;
        this.occurrence = obj.occurrence;
        this.recursBy = obj.recurs_by;
        this.startDate = new Date(obj.start_date);
        this.startTime = obj.start_time;
        this.totalMinutes = obj.total_minutes;
        //Append to variable dictionary
        this._variableDict['dateRecursBy'] = 'date_recurs_by';
        this._variableDict['endDate'] = 'end_date';
        this._variableDict['endTime'] = 'end_time';
        this._variableDict['recursBy'] = 'recurs_by';
        this._variableDict['startDate'] = 'start_date';
        this._variableDict['startTime'] = 'start_time';
        this._variableDict['totalMinutes'] = 'total_minutes';
    }
};

EntitiesTimeWindowResponse.prototype = new BaseModel();
EntitiesTimeWindowResponse.prototype.constructor = EntitiesTimeWindowResponse;

/**
 * date_recurs_by
 *
 * @return {string|null}
 */
EntitiesTimeWindowResponse.prototype.getDateRecursBy = function() {
    return this.dateRecursBy;
};

/**
 * Setter for DateRecursBy
 * 
 * @param {string|null} value 
 */
EntitiesTimeWindowResponse.prototype.setDateRecursBy = function(value) {
    this.dateRecursBy = value;
};

/**
 * array of days of week TimeWindow falls on
 *
 * @return {array|null}
 */
EntitiesTimeWindowResponse.prototype.getDays = function() {
    return this.days;
};

/**
 * Setter for Days
 * 
 * @param {array|null} value 
 */
EntitiesTimeWindowResponse.prototype.setDays = function(value) {
    this.days = value;
};

/**
 * end date
 *
 * @return {dateTime|null}
 */
EntitiesTimeWindowResponse.prototype.getEndDate = function() {
    return this.endDate;
};

/**
 * Setter for EndDate
 * 
 * @param {dateTime|null} value 
 */
EntitiesTimeWindowResponse.prototype.setEndDate = function(value) {
    this.endDate = value;
};

/**
 * end time
 *
 * @return {string|null}
 */
EntitiesTimeWindowResponse.prototype.getEndTime = function() {
    return this.endTime;
};

/**
 * Setter for EndTime
 * 
 * @param {string|null} value 
 */
EntitiesTimeWindowResponse.prototype.setEndTime = function(value) {
    this.endTime = value;
};

/**
 * frequency
 *
 * @return {string|null}
 */
EntitiesTimeWindowResponse.prototype.getFrequency = function() {
    return this.frequency;
};

/**
 * Setter for Frequency
 * 
 * @param {string|null} value 
 */
EntitiesTimeWindowResponse.prototype.setFrequency = function(value) {
    this.frequency = value;
};

/**
 * id of TimeWindow
 *
 * @return {int|null}
 */
EntitiesTimeWindowResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesTimeWindowResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * true is available, false is unavailable
 *
 * @return {bool|null}
 */
EntitiesTimeWindowResponse.prototype.getNegation = function() {
    return this.negation;
};

/**
 * Setter for Negation
 * 
 * @param {bool|null} value 
 */
EntitiesTimeWindowResponse.prototype.setNegation = function(value) {
    this.negation = value;
};

/**
 * occurrence
 *
 * @return {string|null}
 */
EntitiesTimeWindowResponse.prototype.getOccurrence = function() {
    return this.occurrence;
};

/**
 * Setter for Occurrence
 * 
 * @param {string|null} value 
 */
EntitiesTimeWindowResponse.prototype.setOccurrence = function(value) {
    this.occurrence = value;
};

/**
 * recurs by
 *
 * @return {string|null}
 */
EntitiesTimeWindowResponse.prototype.getRecursBy = function() {
    return this.recursBy;
};

/**
 * Setter for RecursBy
 * 
 * @param {string|null} value 
 */
EntitiesTimeWindowResponse.prototype.setRecursBy = function(value) {
    this.recursBy = value;
};

/**
 * start date
 *
 * @return {dateTime|null}
 */
EntitiesTimeWindowResponse.prototype.getStartDate = function() {
    return this.startDate;
};

/**
 * Setter for StartDate
 * 
 * @param {dateTime|null} value 
 */
EntitiesTimeWindowResponse.prototype.setStartDate = function(value) {
    this.startDate = value;
};

/**
 * start time
 *
 * @return {string|null}
 */
EntitiesTimeWindowResponse.prototype.getStartTime = function() {
    return this.startTime;
};

/**
 * Setter for StartTime
 * 
 * @param {string|null} value 
 */
EntitiesTimeWindowResponse.prototype.setStartTime = function(value) {
    this.startTime = value;
};

/**
 * total minutes spanned
 *
 * @return {int|null}
 */
EntitiesTimeWindowResponse.prototype.getTotalMinutes = function() {
    return this.totalMinutes;
};

/**
 * Setter for TotalMinutes
 * 
 * @param {int|null} value 
 */
EntitiesTimeWindowResponse.prototype.setTotalMinutes = function(value) {
    this.totalMinutes = value;
};


module.exports = EntitiesTimeWindowResponse;
