const configuration = require('../../lib/configuration');
const nock = require('nock');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const _ = require('lodash');

chai.use(chaiAsPromised);
nock.disableNetConnect();
configuration.authorization = 'Token 123123123';

global.nock = nock;
global.expect = chai.expect;
global.configuration = configuration;
global._ = _;

global.gonebusy = require('../../lib/index');

global.testPath = __dirname.slice(0, -8);
global.rootPath = testPath.slice(0, -5);

global.fixturesPath = `${testPath}/fixtures`;
