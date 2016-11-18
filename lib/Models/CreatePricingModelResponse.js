
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreatePricingModelResponse
 *
 * @constructor
 */
CreatePricingModelResponse = function (obj) {
    if(!obj) {
        this.pricingModels = null;     
        //Append to variable dictionary
        this._variableDict['pricingModels'] = 'pricing_models';
    } else {
        this.pricingModels = new EntitiesPricingModelResponse(obj.pricing_models);
        //Append to variable dictionary
        this._variableDict['pricingModels'] = 'pricing_models';
    }
};

CreatePricingModelResponse.prototype = new BaseModel();
CreatePricingModelResponse.prototype.constructor = CreatePricingModelResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesPricingModelResponse|null}
 */
CreatePricingModelResponse.prototype.getPricingModels = function() {
    return this.pricingModels;
};

/**
 * Setter for PricingModels
 * 
 * @param {EntitiesPricingModelResponse|null} value 
 */
CreatePricingModelResponse.prototype.setPricingModels = function(value) {
    this.pricingModels = value;
};


module.exports = CreatePricingModelResponse;