
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SearchQueryResponse
 *
 * @constructor
 */
SearchQueryResponse = function (obj) {
    if(!obj) {
        this.results = null;     
    } else {
        this.results = new EntitiesSearchResponse(obj.results);
    }
};

SearchQueryResponse.prototype = new BaseModel();
SearchQueryResponse.prototype.constructor = SearchQueryResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {EntitiesSearchResponse|null}
 */
SearchQueryResponse.prototype.getResults = function() {
    return this.results;
};

/**
 * Setter for Results
 * 
 * @param {EntitiesSearchResponse|null} value 
 */
SearchQueryResponse.prototype.setResults = function(value) {
    this.results = value;
};


module.exports = SearchQueryResponse;