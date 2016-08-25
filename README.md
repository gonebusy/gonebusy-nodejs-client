Gonebusy
=================


How To Install: 
=============
The generated code relies on node package manager (npm) being available to resolve dependencies.
Once published you will need copy the folder 'gonebusy-nodejs-client' in to your 'node_modules' folder.

  
How To Use:
===========
The following shows how import the controllers and use:

1) Import the module:

        var gonebusy = require('gonebusy-nodejs-client');
2) Configure any authentication parameters. For example:

        var config = gonebusy.configuration;
        config.apikey = a_secret_key;

3) Access various controllers by:

        var controller = gonebusy.XYZ;
        controller.getItems(id, callback);
    

