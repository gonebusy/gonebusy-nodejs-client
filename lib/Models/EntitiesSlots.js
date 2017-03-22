
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesSlots
 *
 * @constructor
 */
EntitiesSlots = function (obj) {
    if(!obj) {
        this.date = null;     
        this.slots = null;     
    } else {
        this.date = new Date(obj.date);
        this.slots = obj.slots;
    }
};

EntitiesSlots.prototype = new BaseModel();
EntitiesSlots.prototype.constructor = EntitiesSlots;

/**
 * date of availability
 *
 * @return {dateTime|null}
 */
EntitiesSlots.prototype.getDate = function() {
    return this.date;
};

/**
 * Setter for Date
 * 
 * @param {dateTime|null} value 
 */
EntitiesSlots.prototype.setDate = function(value) {
    this.date = value;
};

/**
 * array of available time slots
 *
 * @return {array|null}
 */
EntitiesSlots.prototype.getSlots = function() {
    return this.slots;
};

/**
 * Setter for Slots
 * 
 * @param {array|null} value 
 */
EntitiesSlots.prototype.setSlots = function(value) {
    this.slots = value;
};


module.exports = EntitiesSlots;
