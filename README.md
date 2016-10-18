# Gonebusy

## Sandbox

We have a Sandbox environment to play with!

Just use [sandbox.gonebusy.com](http://sandbox.gonebusy.com) instead of where you see beta.gonebusy.com referenced, including where to create an account to retrieve your API Key.  

The Sandbox environment is completely separate from the Live site - that includes meaning your Sandbox API Key will not work in the Live environment.

## How To Install: 

The generated code relies on node package manager (npm) being available to resolve dependencies.
Once published you will need copy the folder 'gonebusy-nodejs-client' in to your 'node_modules' folder.

## How To Use:

The following shows how import the controllers and use:

1) Import the module:

        var gonebusy = require('gonebusy-nodejs-client');
2) Configure any authentication parameters. For example:

        var config = gonebusy.configuration;
        config.apikey = a_secret_key;

3) Access various controllers by:

        var controller = gonebusy.XYZ;
        controller.getItems(id, callback);
    

