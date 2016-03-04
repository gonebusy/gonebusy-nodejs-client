
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateCategoryBody
 *
 * @constructor
 */
function CreateCategoryBody() {
    this.name = null;     
    this.description = null;     
    this.shortName = null;     
    this.longName = null;     
    this.parentCategoryId = null;     
    this.apiKey = null;     
    //Append to variable dictionary
    this._variableDict['shortName'] = 'short_name';
    this._variableDict['longName'] = 'long_name';
    this._variableDict['parentCategoryId'] = 'parent_category_id';
    this._variableDict['apiKey'] = 'api_key';
}

CreateCategoryBody.prototype = new BaseModel();
CreateCategoryBody.prototype.constructor = BaseModel;

/**
 * Category Name
 *
 * @return {string}
 */
CreateCategoryBody.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
CreateCategoryBody.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Category Description
 *
 * @return {string}
 */
CreateCategoryBody.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string} value 
 */
CreateCategoryBody.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * Optional abbreviated Category name
 *
 * @return {string|null}
 */
CreateCategoryBody.prototype.getShortName = function() {
    return this.shortName;
};

/**
 * Setter for ShortName
 * 
 * @param {string|null} value 
 */
CreateCategoryBody.prototype.setShortName = function(value) {
    this.shortName = value;
};

/**
 * Optional full name of Category
 *
 * @return {string|null}
 */
CreateCategoryBody.prototype.getLongName = function() {
    return this.longName;
};

/**
 * Setter for LongName
 * 
 * @param {string|null} value 
 */
CreateCategoryBody.prototype.setLongName = function(value) {
    this.longName = value;
};

/**
 * Optional Id of Parent Category
 *
 * @return {int|null}
 */
CreateCategoryBody.prototype.getParentCategoryId = function() {
    return this.parentCategoryId;
};

/**
 * Setter for ParentCategoryId
 * 
 * @param {int|null} value 
 */
CreateCategoryBody.prototype.setParentCategoryId = function(value) {
    this.parentCategoryId = value;
};

/**
 * Valid API Key for your GoneBusy account
 * (edit in top nav)
 *
 * @return {string}
 */
CreateCategoryBody.prototype.getApiKey = function() {
    return this.apiKey;
};

/**
 * Setter for ApiKey
 * 
 * @param {string} value 
 */
CreateCategoryBody.prototype.setApiKey = function(value) {
    this.apiKey = value;
};

module.exports = CreateCategoryBody;