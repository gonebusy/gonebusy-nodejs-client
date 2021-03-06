/**
 * gonebusy
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of EntitiesUserResponse
 */
class EntitiesUserResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.resourceId = this.constructor.getValue(obj.resourceId || obj.resource_id);
        this.accountManagerId =
          this.constructor.getValue(obj.accountManagerId
     || obj.account_manager_id);
        this.email = this.constructor.getValue(obj.email);
        this.phone = this.constructor.getValue(obj.phone);
        this.firstName = this.constructor.getValue(obj.firstName || obj.first_name);
        this.lastName = this.constructor.getValue(obj.lastName || obj.last_name);
        this.disabled = this.constructor.getValue(obj.disabled);
        this.businessName = this.constructor.getValue(obj.businessName || obj.business_name);
        this.externalUrl = this.constructor.getValue(obj.externalUrl || obj.external_url);
        this.permalink = this.constructor.getValue(obj.permalink);
        this.timezone = this.constructor.getValue(obj.timezone);
        this.address = this.constructor.getValue(obj.address);
        this.role = this.constructor.getValue(obj.role);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'resourceId', realName: 'resource_id' },
            { name: 'accountManagerId', realName: 'account_manager_id' },
            { name: 'email', realName: 'email' },
            { name: 'phone', realName: 'phone' },
            { name: 'firstName', realName: 'first_name' },
            { name: 'lastName', realName: 'last_name' },
            { name: 'disabled', realName: 'disabled' },
            { name: 'businessName', realName: 'business_name' },
            { name: 'externalUrl', realName: 'external_url' },
            { name: 'permalink', realName: 'permalink' },
            { name: 'timezone', realName: 'timezone' },
            { name: 'address', realName: 'address', type: 'EntitiesAddressEntity' },
            { name: 'role', realName: 'role' },
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

module.exports = EntitiesUserResponse;
