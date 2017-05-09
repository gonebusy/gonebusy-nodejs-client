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
    gonebusy.ServicesController.getServices({authorization}).then((result)=>{
        console.log(result);
    }).catch((e)=>{
        console.log(e);
    })
    ```
    
    Output of `console.log()`:
    ```
    BaseModel {
    services: 
     [ BaseModel {
         categories: [],
         description: 'A Service for Samples',
         duration: 30,
         maxDuration: 30,
         id: 197264885,
         isActive: true,
         name: 'Sample Service',
         ownerId: 8552697701,
         priceModelId: 2,
         resources: [Object],
         shortName: null } ] }
   ```
   
## Using Request Body Helpers

For any controller operations that expect a request body, or a set of params, there exist CreateXXXBody/UpdateXXXByIdBody/etc. helper objects corresponding to the operation.  The helper objects allow your request code to be constructed with params that conform to the GoneBusy API while still supporting Node/ES6-style property access.

The following is an example of how to use the CreateServiceBody helper object when creating a new Service:

1. Create an instance of CreateServiceBody to wrap your desired attributes into an object:

    ```js
    var new_service = new CreateServiceBody({
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
    gonebusy.ServicesController.createService({
        authorization: 'Token ac98ed08b5b0a9e7c43a233aeba841ce',
        createServiceBody: new_service
    }).then((result)=>{
        console.log(result);
    }).catch((e)=>{
        console.log(e);
    })
    ```
    
    Output of `console.log()`:
    ```js
    BaseModel {
    service: 
     BaseModel {
       categories: [],
       description: 'Sample Service for Testing',
       duration: 30,
       maxDuration: 30,
       id: 4667058921,
       isActive: true,
       name: 'My Sample Service',
       ownerId: 6845037920,
       priceModelId: 3,
       resources: [ 512294687 ],
       shortName: 'My Sample x2' } }
    ```
    
## Using Response Helpers

Just as with Request Body helpers, there are Response helper objects corresponding to each CreateXXXBody/UpdateXXXByIdBody/etc. operation.  

When using Promises, the success result will be a Response instance as follows:

```js
gonebusy.ServicesController.createService({
    authorization: 'Token ac98ed08b5b0a9e7c43a233aeba841ce',
    createServiceBody: new_service
}).then((resp)=>{
    console.log(resp.getService());
}).catch((e)=>{
    console.log(e);
})
```

Output of `console.log()`:
```js
BaseModel {
categories: [],
description: 'Sample Service for Testing',
duration: 30,
maxDuration: 30,
id: 4667058921,
isActive: true,
name: 'My Sample Service',
ownerId: 6845037920,
priceModelId: 3,
resources: [ 512294687 ],
shortName: 'My Sample x2' }
```

In this example, the result of `resp.getService()` is an instance of `EntitiesServiceResponse`.
