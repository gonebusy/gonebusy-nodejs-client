/**
 * Created by Kartik Andalam on 9/8/15.
 * Copyright (c) 2015 APIMatic. All rights reserved.
 *
 */
var HttpContext = require("./HttpContext");
var HttpResponse = require("../Response/HttpResponse");
var request = require("request");
var APIHelper = require('../../APIHelper');
var Q = require('q');

var convertHttpRequest = function (req) {
    //Convert to request's version of http request

    var options = {
        url: req.queryUrl,
        method: req.method,
        headers: req.headers
    };
    if (req.username) {
        options.auth = {user:req.username, pass:req.password};
    }
    if (req.body) {
        options.body = req.body;
    }
    if (req.formData) {
        //Need to add to request's formdata object directly
        //options.formData = APIHelper.formDataEncodeObject(req.formData);
    }
    if (req.form) {
        options.form = APIHelper.urlEncodeObject(req.form);
        options.headers["content-type"] = 'application/x-www-form-urlencoded';
    }
    return options;
}

var appendFormdata = function (form, data) {
    var dataArray = APIHelper.formDataEncodeObject(data);
    for (var index in dataArray) {
        var key = dataArray[index].key
        var value = dataArray[index].value;
        form.append(key, value);
    }
}

var convertHttpResponse = function (resp) {
    var response = new HttpResponse();
    if(resp) {
        response.body = resp.body;
        response.headers = resp.headers;
        response.statusCode = resp.statusCode;
    }

    return response;
}

var resolveDeferred = function (deferred, error, response, context) {
    if(error) {
        deferred.reject({message: error.message, code: error.code, context: context});
    } else if (response.statusCode >= 200 && response.statusCode <= 206) {
        var parsed = JSON.parse(response.body);
        deferred.resolve({data: parsed, context: context});
    } else {
        var messagesByStatus = {
            400: "Bad Request",
            401: "Unauthorized/Missing Token",
            403: "Forbidden",
            404: "Not Found",
            422: "Unprocessable Entity",
            500: "Unexpected error"
        };
        var data = {
            message: messagesByStatus[response.statusCode] || "HTTP Response Not OK",
            code: response.statusCode,
            response: response.body,
            context: context
        };

        deferred.reject(data);
    }
}

/**
 * Execute a given HttpRequest to get string response back
 * @param	{HttpRequest | HttpBodyRequest} request    The query string builder to replace the template parameters
 * @param	{Array} parameters    The parameters to replace in the queryBuilder
 *
 * @return {promise}
 */
function executeRequest(req) {

    //Convert abstracted request to request's http request
    var convertedRequest = convertHttpRequest(req);
    var context = new HttpContext();
    context.request = req;

    var deferred = Q.defer();

    //Make a temp callback
    var internalCallback = function (error, res, body) {
        var response = convertHttpResponse(res);
        context.response = response;
        resolveDeferred(deferred, error, response, context)
    };

    //Make the request;
    var r = request(convertedRequest, internalCallback);

    //Add formdata directly.
    if (req.formData) {
        var form = r.form();
        appendFormdata(form, req.formData);
    }

    return deferred.promise;
}
module.exports = executeRequest;
