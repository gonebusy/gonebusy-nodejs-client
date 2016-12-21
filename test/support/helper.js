var configuration = require('../../lib/configuration'),
    nock = require('nock'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    _ = require('lodash');

chai.use(chaiAsPromised);
nock.disableNetConnect();
configuration.authorization = 'Token 123123123';

global.nock = nock;
global.expect = chai.expect;
global.configuration = configuration;
global._ = _;

global.gonebusy = require('../../lib/index');
global.Promise = require('bluebird').Promise;

global.testPath = __dirname.slice(0, -8);

global.fixturesPath = testPath + '/fixtures';
