/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _CustomAuthUtility = require('../CustomAuthUtility'),
    _APIHelper = require('../APIHelper');

var ServicesController = {

    /**
     * Delete a Service by id
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {string} id    Required parameter: Example: 
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    deleteServiceById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/services/{id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id": input.id
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Authorization": input.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "DELETE",
            headers: _headers
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new DeleteServiceByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Update a Service with params.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {string} id    Required parameter: Example: 
     *     {UpdateServiceByIdBody} updateServiceByIdBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    updateServiceById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/services/{id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id": input.id
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "Authorization": input.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.updateServiceByIdBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.updateServiceByIdBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new UpdateServiceByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return a Service by id.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {string} id    Required parameter: Example: 
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    getServiceById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/services/{id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id": input.id
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Authorization": input.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new GetServiceByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Create a Service with params.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {CreateServiceBody} createServiceBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    createService: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/services/new";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "Authorization": input.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.createServiceBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.createServiceBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new CreateServiceResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return list of Services.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {int|null} page    Optional parameter: Page offset to fetch.
     *     {int|null} perPage    Optional parameter: Number of results to return per page.
     *     {int|null} userId    Optional parameter: Retrieve Services provided by the User specified by Id.  You must be authorized to manage this User Id.
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    getServices: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/services";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page": (null != input.page)? input.page: 1,
            "per_page": (null != input.perPage)? input.perPage: 10,
            "user_id": input.userId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Authorization": input.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new GetServicesResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return available times for a Service.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {string} id    Required parameter: Example: 
     *     {dateTime|null} date    Optional parameter: Date to check for availability.  Either this field or a date range employing start_date and end_date must be supplied.  If date is provided, start_date/end_date are ignored.  Several formats are supported: '2014-10-31', 'October 31, 2014'.
     *     {dateTime|null} endDate    Optional parameter: End Date of a range to check for availability.  If supplied, date must not be supplied and start_date must be supplied.  Several formats are supported: '2014-10-31', 'October 31, 2014'.
     *     {dateTime|null} startDate    Optional parameter: Start Date of a range to check for availability.  If supplied, date must not be supplied and end_date must be supplied.  Several formats are supported: '2014-10-31', 'October 31, 2014'.
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    getServiceAvailableSlotsById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/services/{id}/available_slots";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id": input.id
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "date": input.date,
            "end_date": input.endDate,
            "start_date": input.startDate
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Authorization": input.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new GetServiceAvailableSlotsByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    }

};

module.exports = ServicesController;
