
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CancelBookingByIdResponse
 *
 * @constructor
 */
CancelBookingByIdResponse = function (obj) {
    if(!obj) {
        this.booking = null;     
    } else {
        this.booking = new EntitiesBookingResponse(obj.booking);
    }
};

CancelBookingByIdResponse.prototype = new BaseModel();
CancelBookingByIdResponse.prototype.constructor = CancelBookingByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesBookingResponse|null}
 */
CancelBookingByIdResponse.prototype.getBooking = function() {
    return this.booking;
};

/**
 * Setter for Booking
 * 
 * @param {EntitiesBookingResponse|null} value 
 */
CancelBookingByIdResponse.prototype.setBooking = function(value) {
    this.booking = value;
};


module.exports = CancelBookingByIdResponse;