/**
 * gonebusy
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateResourceByIdBody
 */
class UpdateResourceByIdBody extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.description = this.constructor.getValue(obj.description);
        this.capacity = this.constructor.getValue(obj.capacity);
        this.gender = this.constructor.getValue(obj.gender);
        this.thingTypeId = this.constructor.getValue(obj.thingTypeId || obj.thing_type_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'description', realName: 'description' },
            { name: 'capacity', realName: 'capacity' },
            { name: 'gender', realName: 'gender' },
            { name: 'thingTypeId', realName: 'thing_type_id' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = UpdateResourceByIdBody;
