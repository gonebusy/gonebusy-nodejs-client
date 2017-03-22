
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesAvailabilityResponse
 *
 * @constructor
 */
EntitiesAvailabilityResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.ownerId = null;     
        this.resources = null;     
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
    } else {
        this.id = obj.id;
        this.ownerId = obj.owner_id;
        this.resources = obj.resources.map(function(model){
            return new EntitiesResourceAvailabilities(model);
        });
        //Append to variable dictionary
        this._variableDict['ownerId'] = 'owner_id';
    }
};

EntitiesAvailabilityResponse.prototype = new BaseModel();
EntitiesAvailabilityResponse.prototype.constructor = EntitiesAvailabilityResponse;

/**
 * id of Service
 *
 * @return {int|null}
 */
EntitiesAvailabilityResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesAvailabilityResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * id of owner of Service
 *
 * @return {int|null}
 */
EntitiesAvailabilityResponse.prototype.getOwnerId = function() {
    return this.ownerId;
};

/**
 * Setter for OwnerId
 * 
 * @param {int|null} value 
 */
EntitiesAvailabilityResponse.prototype.setOwnerId = function(value) {
    this.ownerId = value;
};

/**
 * array of Resource ids and available time slots
 *
 * @return {array|null}
 */
EntitiesAvailabilityResponse.prototype.getResources = function() {
    return this.resources;
};

/**
 * Setter for Resources
 * 
 * @param {array|null} value 
 */
EntitiesAvailabilityResponse.prototype.setResources = function(value) {
    this.resources = value;
};


module.exports = EntitiesAvailabilityResponse;
