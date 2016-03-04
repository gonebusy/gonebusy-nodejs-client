/**
 * gonebusy
 *
 * This file was automatically generated for GoneBusy Inc. by APIMATIC BETA v2.0 on 03/04/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var UsersController = {

    /**
     * Return all Users that your account has access to.  Includes your own User as well as any Users for which you are the Account Manager.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} apiKey    Required parameter: Valid API Key for your GoneBusy account (edit in top nav)
     *     {int|null} page    Optional parameter: Page offset to fetch.
     *     {int|null} perPage    Optional parameter: Number of results to return per page.
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetUsersResponse}
     */
    getUsers : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/users";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "api_key" : input.apiKey,
            "page" : (null != input.page)? input.page: 1,
            "per_page" : (null != input.perPage)? input.perPage: 10
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Create a User
     * @param {CreateUserBody} createUserBody    Required parameter: the content of the request
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CreateUserResponse}
     */
    createUser : function(createUserBody, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/users/new";
        
        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        APIHelper.cleanObject(createUserBody);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(createUserBody),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 422) {
                    callback({errorMessage: "Unprocessable Entity", errorCode: 422, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Return list of active Pro Users.
     * @param {string} apiKey    Required parameter: Valid API Key for your GoneBusy account (edit in top nav)
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetUsersProsResponse}
     */
    getUsersPros : function(apiKey, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/users/pros";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "api_key" : apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Return a User by id.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} apiKey    Required parameter: Valid API Key for your GoneBusy account (edit in top nav)
     *     {string} id    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetUserByIdResponse}
     */
    getUserById : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/users/{id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "id" : input.id
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "api_key" : input.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 404) {
                    callback({errorMessage: "Not Found", errorCode: 404, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Update a User by id, with params.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} id    Required parameter: TODO: type description here
     *     {UpdateUserByIdBody} updateUserByIdBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UpdateUserByIdResponse}
     */
    updateUserById : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/users/{id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "id" : input.id
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        APIHelper.cleanObject(input.updateUserByIdBody);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "PUT",
            headers: headers,
            body : APIHelper.jsonSerialize(input.updateUserByIdBody),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 404) {
                    callback({errorMessage: "Not Found", errorCode: 404, errorResponse:response.body},null,context);
                } else if (response.statusCode == 422) {
                    callback({errorMessage: "Unprocessable Entity", errorCode: 422, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Register a User as a Pro with params.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} id    Required parameter: TODO: type description here
     *     {RegisterUserAsProBody} registerUserAsProBody    Required parameter: the content of the request
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {RegisterUserAsProResponse}
     */
    registerUserAsPro : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/users/{id}/register_pro";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "id" : input.id
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        APIHelper.cleanObject(input.registerUserAsProBody);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "PUT",
            headers: headers,
            body : APIHelper.jsonSerialize(input.registerUserAsProBody),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Bad Request", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized/Missing Token", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = UsersController;