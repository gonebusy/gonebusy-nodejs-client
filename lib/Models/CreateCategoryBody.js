
/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateCategoryBody
 *
 * @constructor
 */
CreateCategoryBody = function (obj) {
    if(!obj) {
        this.description = null;     
        this.name = null;     
        this.longName = null;     
        this.parentCategoryId = null;     
        this.shortName = null;     
        //Append to variable dictionary
        this._variableDict['longName'] = 'long_name';
        this._variableDict['parentCategoryId'] = 'parent_category_id';
        this._variableDict['shortName'] = 'short_name';
    } else {
        this.description = obj.description;
        this.name = obj.name;
        this.longName = obj.long_name;
        this.parentCategoryId = obj.parent_category_id;
        this.shortName = obj.short_name;
        //Append to variable dictionary
        this._variableDict['longName'] = 'long_name';
        this._variableDict['parentCategoryId'] = 'parent_category_id';
        this._variableDict['shortName'] = 'short_name';
    }
};

CreateCategoryBody.prototype = new BaseModel();
CreateCategoryBody.prototype.constructor = CreateCategoryBody;

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


module.exports = CreateCategoryBody;