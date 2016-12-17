#Getting started

## Sandbox

We have a Sandbox environment to play with!

Just use [sandbox.gonebusy.com](http://sandbox.gonebusy.com) instead of where you see beta.gonebusy.com referenced, including where to create an account to retrieve your API Key.

The Sandbox environment is completely separate from the Live site - that includes meaning your Sandbox API Key will not work in the Live environment.

## Sample Client Usage

The following shows how to import the library and use it with Bluebird Promises:

1. Configure your package.json:

    ```js
    {
        "dependencies": {
            "gonebusy-nodejs-client": "^0.0.2",
            "bluebird": "^3.3.5"
        }
    }
    ```

1. ```npm install```

1. Import the module:

    ```js
    > gonebusy = require('gonebusy-nodejs-client')
    ```

1. Configure the BASEURI for Sandbox testing

    ```js
    > gonebusy.configuration.BASEURI = 'http://sandbox.gonebusy.com/api/v1'
    ```
    
1. Configure your API Key:

    ```js
    > gonebusy.configuration.authorization = 'Token ac98ed08b5b0a9e7c43a233aeba841ce' // Default Sandbox token
    ```

1. Require Bluebird:

    ```js
    > Promise = require('bluebird').Promise
    ```
    
1. Promisify all ServicesController methods:

    ```js
    > services = Promise.promisifyAll(gonebusy.ServicesController)
    ```

1. Get a list of Services for the current user:

    ```js
    > services.getServicesAsync(gonebusy.configuration).then((result)=>{console.log(result);})
    Promise {
      _bitField: 0,
      _fulfillmentHandler0: undefined,
      _rejectionHandler0: undefined,
      _promise0: undefined,
      _receiver0: undefined }
    > BaseModel {
      services: 
       [ BaseModel {
           categories: [],
           description: 'A Service for Samples',
           duration: 30,
           id: 197264885,
           isActive: true,
           name: 'Sample Service',
           ownerId: 8552697701,
           priceModelId: 2,
           resources: [Object],
           shortName: null } ] }
   ```
   
