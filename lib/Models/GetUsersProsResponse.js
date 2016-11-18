
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetUsersProsResponse
 *
 * @constructor
 */
GetUsersProsResponse = function (obj) {
    if(!obj) {
        this.users = null;     
    } else {
        this.users = obj.users.map(function(model){
            return new EntitiesUserResponse(model);
        });
    }
};

GetUsersProsResponse.prototype = new BaseModel();
GetUsersProsResponse.prototype.constructor = GetUsersProsResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetUsersProsResponse.prototype.getUsers = function() {
    return this.users;
};

/**
 * Setter for Users
 * 
 * @param {array|null} value 
 */
GetUsersProsResponse.prototype.setUsers = function(value) {
    this.users = value;
};


module.exports = GetUsersProsResponse;