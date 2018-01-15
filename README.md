[![Build Status](https://travis-ci.org/gonebusy/gonebusy-nodejs-client.svg?branch=master)](https://travis-ci.org/gonebusy/gonebusy-nodejs-client)
[![npm version](https://badge.fury.io/js/gonebusy-nodejs-client.svg)](https://badge.fury.io/js/gonebusy-nodejs-client)

# Getting Started

## Install

```bash
npm install --only=production --save gonebusy-nodejs-client
```

## Sandbox

We have a Sandbox environment to play with!

Just use [sandbox.gonebusy.com](https://sandbox.gonebusy.com) instead of where you see beta.gonebusy.com referenced, including where to create an account to retrieve your API Key.

The Sandbox environment is completely separate from the Live site - that includes meaning your Sandbox API Key will not work in the Live environment.

## Quick Start

Have you followed **Install** above?

The following shows how to import the library and use it with Bluebird Promises:

Then try the following:

1. Import the module:

    ```js
    var gonebusy = require('gonebusy-nodejs-client');
    ```

1. Configure the environment for Sandbox testing

    ```js
    gonebusy.Configuration.currentEnvironment = 'sandbox'
    ```

1. Configure your API Key:

    ```js
    var authorization = 'Token ac98ed08b5b0a9e7c43a233aeba841ce'; // Default Sandbox token
    ```

1. Get a list of Services for the current user:

    ```js
    gonebusy.ServicesController.getServices(authorization).then((result)=>{
        console.log(result);
    }).catch((e)=>{
        console.log(e);
    })
    ```

    Output of `console.log()`:
    ```
    GetServicesResponse {
    services:
     [ EntitiesServiceResponse {
         id: '3f58d6bb-59ba-4e7f-aeaa-2544c384d9d7',
         ownerId: '281ce067-50dc-4746-ac78-ded592655699',
         name: 'name',
         shortName: 'short_name',
         duration: 15,
         maxDuration: 15,
         description: A Service for Samples,
         priceModelId: '5d9cea4f-9e6a-46bd-9c7f-6195a88753eb',
         isActive: true,
         categories: [],
         resources: [],
         schedules: [] },
     ...
     ]
   }
   ```

## Using Request Body Helpers

For any controller operations that expect a request body, or a set of params, there exist CreateXXXBody/UpdateXXXByIdBody/etc. helper objects corresponding to the operation.  The helper objects allow your request code to be constructed with params that conform to the GoneBusy API while still supporting Node/ES6-style property access.

The following is an example of how to use the CreateServiceBody helper object when creating a new Service:

1. Create an instance of CreateServiceBody to wrap your desired attributes into an object:

    ```js
    var new_service = new gonebusy.CreateServiceBody({
      name: 'My Sample Service',
      duration: 30,
      max_duration: 30,
      description: 'Sample Service for Testing',
      short_name: 'MyService'
    });
    ```

2. Note that the property passed to the constructor uses snake_case but the underlying `BaseModel` object allows access via ES6 camelCase or even a traditional getter:

    ```js
    new_service.shortName;
    new_service.getShortName();
    ```

    Both output:
    ```js
    'MyService'
    ```

    Setters work as well:
    ```js
    new_service.setShortName('My Sample x2');
    new_service.getShortName();
    ```

    Outputs:
    ```js
    'My Sample x2'
    ```

3. Let's send off the request to create our new Service:

    ```js
    gonebusy.ServicesController.createService(
        'Token ac98ed08b5b0a9e7c43a233aeba841ce',
        new_service
        ).then((result)=>{
            console.log(result);
        }).catch((e)=>{
            console.log(e);
        })
    ```

    Output of `console.log()`:
    ```js
      CreateServiceResponse {
        service:
          EntitiesServiceResponse {
              id: 'eaf76f54-f994-11e7-9c01-4fba28763be3',
              ownerId: '00000000-0000-0000-0000-000000000080',
              name: 'My Sample Service',
              shortName: 'MyService x2',
              duration: 30,
              maxDuration: 30,
              description: 'Sample Service for Testing',
              priceModelId: 'eafb2bbc-f994-11e7-9c03-83290988f60b',
              isActive: true,
              categories: [],
              resources: [ '00000000-0000-0000-0000-000000000034' ],
              schedules: [ 'eb0246c2-f994-11e7-9c04-639c2510affb' ] } }
    ```

## Using Response Helpers

Just as with Request Body helpers, there are Response helper objects corresponding to each CreateXXXBody/UpdateXXXByIdBody/etc. operation.
