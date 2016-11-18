#Getting started

## Sandbox

We have a Sandbox environment to play with!

Just use [sandbox.gonebusy.com](http://sandbox.gonebusy.com) instead of where you see beta.gonebusy.com referenced, including where to create an account to retrieve your API Key.

The Sandbox environment is completely separate from the Live site - that includes meaning your Sandbox API Key will not work in the Live environment.

## Installation

The SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies.
Once published you will need copy the folder `gonebusy` in to your `node_modules` folder.

## Usage

The following shows how import and use the controller:

1. Import the module:

    ```js
    var gonebusy = require('gonebusy');
    ```

2. Configure any authentication parameters. For example:

    ```js
    var config = gonebusy.configuration;
    config.authorization = "Token <your API key>";
    ```

3. Access various controllers by:

    ```js
    var controller = gonebusy.XYZ;
    controller.getItems(id, callback);
    ```
