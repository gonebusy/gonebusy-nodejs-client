
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetBookingsResponse
 *
 * @constructor
 */
GetBookingsResponse = function (obj) {
    if(!obj) {
        this.bookings = null;     
    } else {
        this.bookings = obj.bookings.map(function(model){
            return new EntitiesBookingResponse(model);
        });
    }
};

GetBookingsResponse.prototype = new BaseModel();
GetBookingsResponse.prototype.constructor = GetBookingsResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetBookingsResponse.prototype.getBookings = function() {
    return this.bookings;
};

/**
 * Setter for Bookings
 * 
 * @param {array|null} value 
 */
GetBookingsResponse.prototype.setBookings = function(value) {
    this.bookings = value;
};


module.exports = GetBookingsResponse;