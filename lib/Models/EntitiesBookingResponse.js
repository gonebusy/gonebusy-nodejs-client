
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesBookingResponse
 *
 * @constructor
 */
EntitiesBookingResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.ownerId = null;     
        this.timeWindow = null;     
        this.userMessage = null;     
        this.workflowState = null;     
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['timeWindow'] = 'time_window';
        this._variableDict['userMessage'] = 'user_message';
        this._variableDict['workflowState'] = 'workflow_state';
    } else {
        this.id = obj.id;
        this.ownerId = obj.owner_id;
        this.timeWindow = new EntitiesTimeWindowResponse(obj.time_window);
        this.userMessage = obj.user_message;
        this.workflowState = obj.workflow_state;
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
        this._variableDict['timeWindow'] = 'time_window';
        this._variableDict['userMessage'] = 'user_message';
        this._variableDict['workflowState'] = 'workflow_state';
    }
};

EntitiesBookingResponse.prototype = new BaseModel();
EntitiesBookingResponse.prototype.constructor = EntitiesBookingResponse;

/**
 * id of Booking
 *
 * @return {int|null}
 */
EntitiesBookingResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesBookingResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * id of owner of Booking
 *
 * @return {int|null}
 */
EntitiesBookingResponse.prototype.getOwnerId = function() {
    return this.ownerId;
};

/**
 * Setter for OwnerId
 * 
 * @param {int|null} value 
 */
EntitiesBookingResponse.prototype.setOwnerId = function(value) {
    this.ownerId = value;
};

/**
 * TimeWindow corresponding to Booking
 *
 * @return {EntitiesTimeWindowResponse|null}
 */
EntitiesBookingResponse.prototype.getTimeWindow = function() {
    return this.timeWindow;
};

/**
 * Setter for TimeWindow
 * 
 * @param {EntitiesTimeWindowResponse|null} value 
 */
EntitiesBookingResponse.prototype.setTimeWindow = function(value) {
    this.timeWindow = value;
};

/**
 * user requesting Booking may include a message
 *
 * @return {string|null}
 */
EntitiesBookingResponse.prototype.getUserMessage = function() {
    return this.userMessage;
};

/**
 * Setter for UserMessage
 * 
 * @param {string|null} value 
 */
EntitiesBookingResponse.prototype.setUserMessage = function(value) {
    this.userMessage = value;
};

/**
 * status of Booking
 *
 * @return {string|null}
 */
EntitiesBookingResponse.prototype.getWorkflowState = function() {
    return this.workflowState;
};

/**
 * Setter for WorkflowState
 * 
 * @param {string|null} value 
 */
EntitiesBookingResponse.prototype.setWorkflowState = function(value) {
    this.workflowState = value;
};


module.exports = EntitiesBookingResponse;
