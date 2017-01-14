
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesUserResponse
 *
 * @constructor
 */
EntitiesUserResponse = function (obj) {
    if(!obj) {
        this.accountManagerId = null;     
        this.address = null;     
        this.businessName = null;     
        this.disabled = null;     
        this.email = null;     
        this.externalUrl = null;     
        this.firstName = null;     
        this.id = null;     
        this.lastName = null;     
        this.permalink = null;     
        this.phone = null;     
        this.resourceId = null;     
        this.role = null;     
        this.timezone = null;     
        //Append to variable dictionary
        this._variableDict['accountManagerId'] = 'account_manager_id';
        this._variableDict['businessName'] = 'business_name';
        this._variableDict['externalUrl'] = 'external_url';
        this._variableDict['firstName'] = 'first_name';
        this._variableDict['lastName'] = 'last_name';
        this._variableDict['resourceId'] = 'resource_id';
    } else {
        this.accountManagerId = obj.account_manager_id;
        this.address = new EntitiesAddressEntity(obj.address);
        this.businessName = obj.business_name;
        this.disabled = obj.disabled;
        this.email = obj.email;
        this.externalUrl = obj.external_url;
        this.firstName = obj.first_name;
        this.id = obj.id;
        this.lastName = obj.last_name;
        this.permalink = obj.permalink;
        this.phone = obj.phone;
        this.resourceId = obj.resource_id;
        this.role = obj.role;
        this.timezone = obj.timezone;
        //Append to variable dictionary
        this._variableDict['accountManagerId'] = 'account_manager_id';
        this._variableDict['businessName'] = 'business_name';
        this._variableDict['externalUrl'] = 'external_url';
        this._variableDict['firstName'] = 'first_name';
        this._variableDict['lastName'] = 'last_name';
        this._variableDict['resourceId'] = 'resource_id';
    }
};

EntitiesUserResponse.prototype = new BaseModel();
EntitiesUserResponse.prototype.constructor = EntitiesUserResponse;

/**
 * id of Account Manager user for User
 *
 * @return {int|null}
 */
EntitiesUserResponse.prototype.getAccountManagerId = function() {
    return this.accountManagerId;
};

/**
 * Setter for AccountManagerId
 * 
 * @param {int|null} value 
 */
EntitiesUserResponse.prototype.setAccountManagerId = function(value) {
    this.accountManagerId = value;
};

/**
 * address of User
 *
 * @return {EntitiesAddressEntity|null}
 */
EntitiesUserResponse.prototype.getAddress = function() {
    return this.address;
};

/**
 * Setter for Address
 * 
 * @param {EntitiesAddressEntity|null} value 
 */
EntitiesUserResponse.prototype.setAddress = function(value) {
    this.address = value;
};

/**
 * business name for User
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getBusinessName = function() {
    return this.businessName;
};

/**
 * Setter for BusinessName
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setBusinessName = function(value) {
    this.businessName = value;
};

/**
 * status of user
 *
 * @return {bool|null}
 */
EntitiesUserResponse.prototype.getDisabled = function() {
    return this.disabled;
};

/**
 * Setter for Disabled
 * 
 * @param {bool|null} value 
 */
EntitiesUserResponse.prototype.setDisabled = function(value) {
    this.disabled = value;
};

/**
 * email of User
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getEmail = function() {
    return this.email;
};

/**
 * Setter for Email
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setEmail = function(value) {
    this.email = value;
};

/**
 * external url to business
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getExternalUrl = function() {
    return this.externalUrl;
};

/**
 * Setter for ExternalUrl
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setExternalUrl = function(value) {
    this.externalUrl = value;
};

/**
 * first name of User
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getFirstName = function() {
    return this.firstName;
};

/**
 * Setter for FirstName
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setFirstName = function(value) {
    this.firstName = value;
};

/**
 * id of User
 *
 * @return {int|null}
 */
EntitiesUserResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesUserResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * last name of User
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getLastName = function() {
    return this.lastName;
};

/**
 * Setter for LastName
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setLastName = function(value) {
    this.lastName = value;
};

/**
 * permalink of User
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getPermalink = function() {
    return this.permalink;
};

/**
 * Setter for Permalink
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setPermalink = function(value) {
    this.permalink = value;
};

/**
 * phone number of User
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getPhone = function() {
    return this.phone;
};

/**
 * Setter for Phone
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setPhone = function(value) {
    this.phone = value;
};

/**
 * id of defacto Resource for User
 *
 * @return {int|null}
 */
EntitiesUserResponse.prototype.getResourceId = function() {
    return this.resourceId;
};

/**
 * Setter for ResourceId
 * 
 * @param {int|null} value 
 */
EntitiesUserResponse.prototype.setResourceId = function(value) {
    this.resourceId = value;
};

/**
 * User account type
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getRole = function() {
    return this.role;
};

/**
 * Setter for Role
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setRole = function(value) {
    this.role = value;
};

/**
 * timezone of User,
 *
 * @return {string|null}
 */
EntitiesUserResponse.prototype.getTimezone = function() {
    return this.timezone;
};

/**
 * Setter for Timezone
 * 
 * @param {string|null} value 
 */
EntitiesUserResponse.prototype.setTimezone = function(value) {
    this.timezone = value;
};


module.exports = EntitiesUserResponse;
