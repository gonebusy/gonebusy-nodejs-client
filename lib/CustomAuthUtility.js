/**
  * gonebusy
  *
  * This file was automatically generated for GoneBusy Inc. by APIMATIC v2.0 ( https://apimatic.io ) on 11/18/2016
  */

var configuration = require('./configuration');

var CustomAuthUtility = {

    /**
     * Appends the necessary custom credentials for making this authorized call
     * @param	{HttpRequest} request    The out going request to access the resource
     */
    appendCustomAuthParams:function(request) {
        // TODO: Add your custom authentication here
        // The following properties are available to use
      // configuration.authorization
        // 
        // ie. Add a header through:
        //request.headers["key"] = "value"

    }
};

module.exports = CustomAuthUtility;