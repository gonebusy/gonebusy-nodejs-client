
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateBookingResponse
 *
 * @constructor
 */
CreateBookingResponse = function (obj) {
    if(!obj) {
        this.booking = null;     
    } else {
        this.booking = new EntitiesBookingResponse(obj.booking);
    }
};

CreateBookingResponse.prototype = new BaseModel();
CreateBookingResponse.prototype.constructor = CreateBookingResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesBookingResponse|null}
 */
CreateBookingResponse.prototype.getBooking = function() {
    return this.booking;
};

/**
 * Setter for Booking
 * 
 * @param {EntitiesBookingResponse|null} value 
 */
CreateBookingResponse.prototype.setBooking = function(value) {
    this.booking = value;
};


module.exports = CreateBookingResponse;