
/**
 * gonebusy
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EntitiesCategoryResponse
 *
 * @constructor
 */
EntitiesCategoryResponse = function (obj) {
    if(!obj) {
        this.description = null;     
        this.id = null;     
        this.isActive = null;     
        this.longName = null;     
        this.name = null;     
        this.parentCategoryId = null;     
        this.shortName = null;     
        this.subcategories = null;     
        //Append to variable dictionary
        this._variableDict['isActive'] = 'is_active';
        this._variableDict['longName'] = 'long_name';
        this._variableDict['parentCategoryId'] = 'parent_category_id';
        this._variableDict['shortName'] = 'short_name';
    } else {
        this.description = obj.description;
        this.id = obj.id;
        this.isActive = obj.is_active;
        this.longName = obj.long_name;
        this.name = obj.name;
        this.parentCategoryId = obj.parent_category_id;
        this.shortName = obj.short_name;
        this.subcategories = obj.subcategories;
        //Append to variable dictionary
        this._variableDict['isActive'] = 'is_active';
        this._variableDict['longName'] = 'long_name';
        this._variableDict['parentCategoryId'] = 'parent_category_id';
        this._variableDict['shortName'] = 'short_name';
    }
};

EntitiesCategoryResponse.prototype = new BaseModel();
EntitiesCategoryResponse.prototype.constructor = EntitiesCategoryResponse;

/**
 * description of Category
 *
 * @return {string|null}
 */
EntitiesCategoryResponse.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
EntitiesCategoryResponse.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * id of Category
 *
 * @return {int|null}
 */
EntitiesCategoryResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int|null} value 
 */
EntitiesCategoryResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * status of Category
 *
 * @return {bool|null}
 */
EntitiesCategoryResponse.prototype.getIsActive = function() {
    return this.isActive;
};

/**
 * Setter for IsActive
 * 
 * @param {bool|null} value 
 */
EntitiesCategoryResponse.prototype.setIsActive = function(value) {
    this.isActive = value;
};

/**
 * extended name for Category
 *
 * @return {string|null}
 */
EntitiesCategoryResponse.prototype.getLongName = function() {
    return this.longName;
};

/**
 * Setter for LongName
 * 
 * @param {string|null} value 
 */
EntitiesCategoryResponse.prototype.setLongName = function(value) {
    this.longName = value;
};

/**
 * name of Category
 *
 * @return {string|null}
 */
EntitiesCategoryResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
EntitiesCategoryResponse.prototype.setName = function(value) {
    this.name = value;
};

/**
 * id of parent Category, if any
 *
 * @return {int|null}
 */
EntitiesCategoryResponse.prototype.getParentCategoryId = function() {
    return this.parentCategoryId;
};

/**
 * Setter for ParentCategoryId
 * 
 * @param {int|null} value 
 */
EntitiesCategoryResponse.prototype.setParentCategoryId = function(value) {
    this.parentCategoryId = value;
};

/**
 * abbreviated name for Category
 *
 * @return {string|null}
 */
EntitiesCategoryResponse.prototype.getShortName = function() {
    return this.shortName;
};

/**
 * Setter for ShortName
 * 
 * @param {string|null} value 
 */
EntitiesCategoryResponse.prototype.setShortName = function(value) {
    this.shortName = value;
};

/**
 * array of subcategory ids, if any
 *
 * @return {array|null}
 */
EntitiesCategoryResponse.prototype.getSubcategories = function() {
    return this.subcategories;
};

/**
 * Setter for Subcategories
 * 
 * @param {array|null} value 
 */
EntitiesCategoryResponse.prototype.setSubcategories = function(value) {
    this.subcategories = value;
};


module.exports = EntitiesCategoryResponse;
