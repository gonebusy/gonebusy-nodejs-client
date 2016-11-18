
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesSearchResponse
 *
 * @constructor
 */
EntitiesSearchResponse = function (obj) {
    if(!obj) {
        this.services = null;     
        this.users = null;     
    } else {
        this.services = obj.services.map(function(model){
            return new EntitiesServiceResponse(model);
        });
        this.users = obj.users.map(function(model){
            return new EntitiesUserResponse(model);
        });
    }
};

EntitiesSearchResponse.prototype = new BaseModel();
EntitiesSearchResponse.prototype.constructor = EntitiesSearchResponse;

/**
 * array of Services matching query
 *
 * @return {array|null}
 */
EntitiesSearchResponse.prototype.getServices = function() {
    return this.services;
};

/**
 * Setter for Services
 * 
 * @param {array|null} value 
 */
EntitiesSearchResponse.prototype.setServices = function(value) {
    this.services = value;
};

/**
 * array of Users matching query
 *
 * @return {array|null}
 */
EntitiesSearchResponse.prototype.getUsers = function() {
    return this.users;
};

/**
 * Setter for Users
 * 
 * @param {array|null} value 
 */
EntitiesSearchResponse.prototype.setUsers = function(value) {
    this.users = value;
};


module.exports = EntitiesSearchResponse;