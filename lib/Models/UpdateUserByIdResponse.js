
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateUserByIdResponse
 *
 * @constructor
 */
UpdateUserByIdResponse = function (obj) {
    if(!obj) {
        this.user = null;     
    } else {
        this.user = new EntitiesUserResponse(obj.user);
    }
};

UpdateUserByIdResponse.prototype = new BaseModel();
UpdateUserByIdResponse.prototype.constructor = UpdateUserByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesUserResponse|null}
 */
UpdateUserByIdResponse.prototype.getUser = function() {
    return this.user;
};

/**
 * Setter for User
 * 
 * @param {EntitiesUserResponse|null} value 
 */
UpdateUserByIdResponse.prototype.setUser = function(value) {
    this.user = value;
};


module.exports = UpdateUserByIdResponse;