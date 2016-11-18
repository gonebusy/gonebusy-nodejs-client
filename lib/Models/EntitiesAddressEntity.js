
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesAddressEntity
 *
 * @constructor
 */
EntitiesAddressEntity = function (obj) {
    if(!obj) {
        this.city = null;     
        this.country = null;     
        this.countryCode = null;     
        this.latitude = null;     
        this.line1 = null;     
        this.line2 = null;     
        this.longitude = null;     
        this.postalCode = null;     
        this.province = null;     
        this.state = null;     
        //Append to variable dictionary
        this._variableDict['countryCode'] = 'country_code';
        this._variableDict['postalCode'] = 'postal_code';
    } else {
        this.city = obj.city;
        this.country = obj.country;
        this.countryCode = obj.country_code;
        this.latitude = obj.latitude;
        this.line1 = obj.line1;
        this.line2 = obj.line2;
        this.longitude = obj.longitude;
        this.postalCode = obj.postal_code;
        this.province = obj.province;
        this.state = obj.state;
        //Append to variable dictionary
        this._variableDict['countryCode'] = 'country_code';
        this._variableDict['postalCode'] = 'postal_code';
    }
};

EntitiesAddressEntity.prototype = new BaseModel();
EntitiesAddressEntity.prototype.constructor = EntitiesAddressEntity;

/**
 * city of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getCity = function() {
    return this.city;
};

/**
 * Setter for City
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setCity = function(value) {
    this.city = value;
};

/**
 * country of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getCountry = function() {
    return this.country;
};

/**
 * Setter for Country
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setCountry = function(value) {
    this.country = value;
};

/**
 * country code of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getCountryCode = function() {
    return this.countryCode;
};

/**
 * Setter for CountryCode
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setCountryCode = function(value) {
    this.countryCode = value;
};

/**
 * latitude of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getLatitude = function() {
    return this.latitude;
};

/**
 * Setter for Latitude
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setLatitude = function(value) {
    this.latitude = value;
};

/**
 * line 1 of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getLine1 = function() {
    return this.line1;
};

/**
 * Setter for Line1
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setLine1 = function(value) {
    this.line1 = value;
};

/**
 * line 2 of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getLine2 = function() {
    return this.line2;
};

/**
 * Setter for Line2
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setLine2 = function(value) {
    this.line2 = value;
};

/**
 * longitude of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getLongitude = function() {
    return this.longitude;
};

/**
 * Setter for Longitude
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setLongitude = function(value) {
    this.longitude = value;
};

/**
 * postal code of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getPostalCode = function() {
    return this.postalCode;
};

/**
 * Setter for PostalCode
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setPostalCode = function(value) {
    this.postalCode = value;
};

/**
 * province of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getProvince = function() {
    return this.province;
};

/**
 * Setter for Province
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setProvince = function(value) {
    this.province = value;
};

/**
 * state of Address
 *
 * @return {string|null}
 */
EntitiesAddressEntity.prototype.getState = function() {
    return this.state;
};

/**
 * Setter for State
 * 
 * @param {string|null} value 
 */
EntitiesAddressEntity.prototype.setState = function(value) {
    this.state = value;
};


module.exports = EntitiesAddressEntity;