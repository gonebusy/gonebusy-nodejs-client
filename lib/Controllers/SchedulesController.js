/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _CustomAuthUtility = require('../CustomAuthUtility'),
    _APIHelper = require('../APIHelper');

var SchedulesController = {

    /**
     * Delete a TimeWindow from a Schedule
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {string} id    Required parameter: Example: 
     *     {string} timeWindowId    Required parameter: Example: 
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    deleteScheduleTimeWindowById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules/{id}/time_windows/{time_window_id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id": input.id,
            "time_window_id": input.timeWindowId
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
            _data.data = new DeleteScheduleTimeWindowByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Add a TimeWindow to a Schedule.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {CreateScheduleTimeWindowBody} createScheduleTimeWindowBody    Required parameter: the content of the request
     *     {string} id    Required parameter: Example: 
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    createScheduleTimeWindow: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules/{id}/time_windows/new";
        
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
        _APIHelper.cleanObject(input.createScheduleTimeWindowBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.createScheduleTimeWindowBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new CreateScheduleTimeWindowResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Delete a Schedule
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
    deleteScheduleById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules/{id}";
        
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
            _data.data = new DeleteScheduleByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return a Schedule by id.
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
    getScheduleById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules/{id}";
        
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
            _data.data = new GetScheduleByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Create a Schedule with params.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {CreateScheduleBody} createScheduleBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    createSchedule: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules/new";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "Authorization": input.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.createScheduleBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.createScheduleBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new CreateScheduleResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Update a TimeWindow for a Schedule.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {string} id    Required parameter: Example: 
     *     {string} timeWindowId    Required parameter: Example: 
     *     {UpdateScheduleTimeWindowByIdBody} updateScheduleTimeWindowByIdBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    updateScheduleTimeWindowById: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules/{id}/time_windows/{time_window_id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id": input.id,
            "time_window_id": input.timeWindowId
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
        _APIHelper.cleanObject(input.updateScheduleTimeWindowByIdBody);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "PUT",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.updateScheduleTimeWindowByIdBody)
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        //Build the response processing.
        function formatter (_data) {
            _data.data = new UpdateScheduleTimeWindowByIdResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    },


    /**
     * Return all Schedules that your account has access to.  Includes Schedules for your own User as well as any Users for which you are the Account Manager.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {int|null} page    Optional parameter: Page offset to fetch.
     *     {int|null} perPage    Optional parameter: Number of results to return per page.
     *     {int|null} userId    Optional parameter: Retrieve Schedules owned only by this User Id.  You must be authorized to manage this User Id.
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     *
     * @return {promise}
     */
    getSchedules: function (input) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules";
        
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
            _data.data = new GetSchedulesResponse(_data.data);
            return _data;
        }
        return _request(_options).then(formatter);
    }

};

module.exports = SchedulesController;
