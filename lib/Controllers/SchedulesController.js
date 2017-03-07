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
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {DeleteScheduleTimeWindowByIdResponse}
     */
    deleteScheduleTimeWindowById: function (input, callback) {
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
            headers: _headers,
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new DeleteScheduleTimeWindowByIdResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Not Found", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
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
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CreateScheduleTimeWindowResponse}
     */
    createScheduleTimeWindow: function (input, callback) {
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
            body : _APIHelper.jsonSerialize(input.createScheduleTimeWindowBody),
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new CreateScheduleTimeWindowResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Not Found", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 422) {
                callback({errorMessage: "Unprocessable Entity", errorCode: 422, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
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
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {DeleteScheduleByIdResponse}
     */
    deleteScheduleById: function (input, callback) {
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
            headers: _headers,
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new DeleteScheduleByIdResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Not Found", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
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
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetScheduleByIdResponse}
     */
    getScheduleById: function (input, callback) {
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
            headers: _headers,
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new GetScheduleByIdResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Not Found", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 410) {
                callback({errorMessage: "Gone", errorCode: 410, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
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
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CreateScheduleResponse}
     */
    createSchedule: function (input, callback) {
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
            body : _APIHelper.jsonSerialize(input.createScheduleBody),
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new CreateScheduleResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Not Found", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 422) {
                callback({errorMessage: "Unprocessable Entity", errorCode: 422, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
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
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UpdateScheduleTimeWindowByIdResponse}
     */
    updateScheduleTimeWindowById: function (input, callback) {
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
            body : _APIHelper.jsonSerialize(input.updateScheduleTimeWindowByIdBody),
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new UpdateScheduleTimeWindowByIdResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Not Found", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 422) {
                callback({errorMessage: "Unprocessable Entity", errorCode: 422, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Return all Schedules that your account has access to.  Includes Schedules for your own User as well as any Users for which you are the Account Manager.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} authorization    Required parameter: A valid API key, in the format 'Token API_KEY'
     *     {int|null} page    Optional parameter: Page offset to fetch.
     *     {int|null} perPage    Optional parameter: Number of results to return per page.
     *     {int|null} resourceId    Optional parameter: Retrieve Schedules only for this Resource.  You, or provided :user_id, must be authorized to manage this Resource.
     *     {int|null} serviceId    Optional parameter: Retrieve Schedules only for this Service.  You, or provided :user_id, must be authorized to manage this Service.
     *     {int|null} userId    Optional parameter: Retrieve Schedules owned only by this User Id.  You must be authorized to manage this User Id.
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetSchedulesResponse}
     */
    getSchedules: function (input, callback) {
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/schedules";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page": (null != input.page)? input.page: 1,
            "per_page": (null != input.perPage)? input.perPage: 10,
            "resource_id": input.resourceId,
            "service_id": input.serviceId,
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
            headers: _headers,
        };
        //append custom auth authorization
        _CustomAuthUtility.appendCustomAuthParams(_options);

        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new GetSchedulesResponse(parsed);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 400) {
                callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 401) {
                callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 403) {
                callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 404) {
                callback({errorMessage: "Not Found", errorCode: 404, errorResponse:_response.body}, null, _context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:_response.body}, null, _context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = SchedulesController;
