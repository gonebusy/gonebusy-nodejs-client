
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of GetCategoriesResponse
 *
 * @constructor
 */
GetCategoriesResponse = function (obj) {
    if(!obj) {
        this.categories = null;     
    } else {
        this.categories = obj.categories.map(function(model){
            return new EntitiesCategoryResponse(model);
        });
    }
};

GetCategoriesResponse.prototype = new BaseModel();
GetCategoriesResponse.prototype.constructor = GetCategoriesResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
GetCategoriesResponse.prototype.getCategories = function() {
    return this.categories;
};

/**
 * Setter for Categories
 * 
 * @param {array|null} value 
 */
GetCategoriesResponse.prototype.setCategories = function(value) {
    this.categories = value;
};


module.exports = GetCategoriesResponse;