
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetPricingModelByIdResponse
 *
 * @constructor
 */
GetPricingModelByIdResponse = function (obj) {
    if(!obj) {
        this.pricingModel = null;     
        //Append to variable dictionary
        this._variableDict['pricingModel'] = 'pricing_model';
    } else {
        this.pricingModel = new EntitiesPricingModelResponse(obj.pricing_model);
        //Append to variable dictionary
        this._variableDict['pricingModel'] = 'pricing_model';
    }
};

GetPricingModelByIdResponse.prototype = new BaseModel();
GetPricingModelByIdResponse.prototype.constructor = GetPricingModelByIdResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesPricingModelResponse|null}
 */
GetPricingModelByIdResponse.prototype.getPricingModel = function() {
    return this.pricingModel;
};

/**
 * Setter for PricingModel
 * 
 * @param {EntitiesPricingModelResponse|null} value 
 */
GetPricingModelByIdResponse.prototype.setPricingModel = function(value) {
    this.pricingModel = value;
};


module.exports = GetPricingModelByIdResponse;
