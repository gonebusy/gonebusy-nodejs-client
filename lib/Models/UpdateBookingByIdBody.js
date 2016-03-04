
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateBookingByIdBody
 *
 * @constructor
 */
function UpdateBookingByIdBody() {
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['apiKey'] = 'api_key';
}

UpdateBookingByIdBody.prototype = new BaseModel();
UpdateBookingByIdBody.prototype.constructor = BaseModel;

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
UpdateBookingByIdBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
UpdateBookingByIdBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = UpdateBookingByIdBody;