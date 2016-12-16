/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _CustomAuthUtility = require('../CustomAuthUtility'),
    _APIHelper = require('../APIHelper');

var UsersController = {

    /**
     * Update a User by id, with params.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {string} id    Required parameter: Example: 
     *     {UpdateUserByIdBody} updateUserByIdBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    updateUserById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/users/{id}";
        
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
        _APIHelper.cleanObject(input.updateUserByIdBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.updateUserByIdBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new UpdateUserByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return a User by id.
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
    getUserById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/users/{id}";
        
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
            _data.data = new GetUserByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return list of active Pro Users.
     * @param {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *
     * @return {promise}
     */
    getUsersPros: function (authorization, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/users/pros";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "Authorization": authorization
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
            _data.data = new GetUsersProsResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Create a User
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {CreateUserBody} createUserBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    createUser: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/users/new";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "Authorization": input.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.createUserBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.createUserBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new CreateUserResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return all Users that your account has access to.  Includes your own User as well as any Users for which you are the Account Manager.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {int|null} page    Optional parameter: Page offset to fetch.
     *     {int|null} perPage    Optional parameter: Number of results to return per page.
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    getUsers: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/users";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page": (null != input.page)? input.page: 1,
            "per_page": (null != input.perPage)? input.perPage: 10
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
            _data.data = new GetUsersResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    }

};

module.exports = UsersController;
