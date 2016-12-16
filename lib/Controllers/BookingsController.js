/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _CustomAuthUtility = require('../CustomAuthUtility'),
    _APIHelper = require('../APIHelper');

var BookingsController = {

    /**
     * Create a Booking with params
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {CreateBookingBody} createBookingBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    createBooking: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/bookings/new";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "Authorization": input.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.createBookingBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.createBookingBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function formatter (_data) {
            _data.data = new CreateBookingResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return list of Bookings.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {int|null} page    Optional parameter: Page offset to fetch.
     *     {int|null} perPage    Optional parameter: Number of results to return per page.
     *     {string|null} states    Optional parameter: Comma-separated list of Booking states to retrieve only Bookings in those states.  Leave blank to retrieve all Bookings.
     *     {int|null} userId    Optional parameter: Retrieve Bookings owned only by this User Id.  You must be authorized to manage this User Id.
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    getBookings: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/bookings";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page": (null != input.page)? input.page: 1,
            "per_page": (null != input.perPage)? input.perPage: 10,
            "states": input.states,
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
            _data.data = new GetBookingsResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Cancel a Booking by id
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
    cancelBookingById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/bookings/{id}";
        
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
            _data.data = new CancelBookingByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Update a Booking by id
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
    updateBookingById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/bookings/{id}";
        
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
            method: "PUT",
            headers: _headers
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new UpdateBookingByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return a Booking by id.
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
    getBookingById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/bookings/{id}";
        
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
            _data.data = new GetBookingByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    }

};

module.exports = BookingsController;
