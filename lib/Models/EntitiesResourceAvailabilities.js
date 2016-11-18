
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesResourceAvailabilities
 *
 * @constructor
 */
EntitiesResourceAvailabilities = function (obj) {
    if(!obj) {
        this.availableSlots = null;     
        this.id = null;     
        //Append to variable dictionary
        this._variableDict['availableSlots'] = 'available_slots';
    } else {
        this.availableSlots = obj.available_slots.map(function(model){
            return new EntitiesSlots(model);
        });
        this.id = obj.id;
        //Append to variable dictionary
        this._variableDict['availableSlots'] = 'available_slots';
    }
};

EntitiesResourceAvailabilities.prototype = new BaseModel();
EntitiesResourceAvailabilities.prototype.constructor = EntitiesResourceAvailabilities;

/**
 * array of available date and time slots
 *
 * @return {array|null}
 */
EntitiesResourceAvailabilities.prototype.getAvailableSlots = function() {
    return this.availableSlots;
};

/**
 * Setter for AvailableSlots
 * 
 * @param {array|null} value 
 */
EntitiesResourceAvailabilities.prototype.setAvailableSlots = function(value) {
    this.availableSlots = value;
};

/**
 * id of Resource
 *
 * @return {int|null}
 */
EntitiesResourceAvailabilities.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesResourceAvailabilities.prototype.setId = function(value) {
    this.id = value;
};


module.exports = EntitiesResourceAvailabilities;