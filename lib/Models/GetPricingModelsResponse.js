
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetPricingModelsResponse
 *
 * @constructor
 */
GetPricingModelsResponse = function (obj) {
    if(!obj) {
        this.pricingModels = null;     
        //Append to variable dictionary
        this._variableDict['pricingModels'] = 'pricing_models';
    } else {
        this.pricingModels = obj.pricing_models.map(function(model){
            return new EntitiesPricingModelResponse(model);
        });
        //Append to variable dictionary
        this._variableDict['pricingModels'] = 'pricing_models';
    }
};

GetPricingModelsResponse.prototype = new BaseModel();
GetPricingModelsResponse.prototype.constructor = GetPricingModelsResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetPricingModelsResponse.prototype.getPricingModels = function() {
    return this.pricingModels;
};

/**
 * Setter for PricingModels
 * 
 * @param {array|null} value 
 */
GetPricingModelsResponse.prototype.setPricingModels = function(value) {
    this.pricingModels = value;
};


module.exports = GetPricingModelsResponse;