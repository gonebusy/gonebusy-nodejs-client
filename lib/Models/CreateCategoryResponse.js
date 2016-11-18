
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateCategoryResponse
 *
 * @constructor
 */
CreateCategoryResponse = function (obj) {
    if(!obj) {
        this.category = null;     
    } else {
        this.category = new EntitiesCategoryResponse(obj.category);
    }
};

CreateCategoryResponse.prototype = new BaseModel();
CreateCategoryResponse.prototype.constructor = CreateCategoryResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesCategoryResponse|null}
 */
CreateCategoryResponse.prototype.getCategory = function() {
    return this.category;
};

/**
 * Setter for Category
 * 
 * @param {EntitiesCategoryResponse|null} value 
 */
CreateCategoryResponse.prototype.setCategory = function(value) {
    this.category = value;
};


module.exports = CreateCategoryResponse;