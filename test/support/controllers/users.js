const GetUsersResponse = require(rootPath + '/lib/Models/GetUsersResponse');
const CreateUserResponse = require(rootPath + '/lib/Models/CreateUserResponse');
const GetUserByIdResponse = require(rootPath + '/lib/Models/GetUserByIdResponse');
const UpdateUserByIdResponse = require(rootPath + '/lib/Models/UpdateUserByIdResponse');

const UsersController = Promise.promisifyAll(gonebusy.UsersController);
const usersFixturesPath = fixturesPath + '/users';

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getUsers = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/users')
            .query(indexParams)
            .replyWithFile(200, usersFixturesPath + '/index.json');
    },
    promiseResolved: function () {
        return expect(UsersController.getUsersAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(UsersController.getUsersAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetUsersResponse);
    },
    correctContent: function () {
        return expect(UsersController.getUsersAsync(requestIndexParams)).to.eventually
            .have.property('users').and.have.lengthOf(1);
    }
};

const createParams = {
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    business_name: 'string',
    external_url: 'string',
    permalink: 'string',
    timezone: 'string'
};
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createUserBody: createParams })
    .value();

const createUser = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .post('/users/new', createParams)
            .replyWithFile(201, usersFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(UsersController.createUserAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(UsersController.createUserAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateUserResponse);
    },
    correctContent: function () {
        return expect(UsersController.createUserAsync(requestCreateParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id');
    }
};

const userId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: userId }).value();

const getUserById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/users/' + userId)
            .replyWithFile(200, usersFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(UsersController.getUserByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(UsersController.getUserByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetUserByIdResponse);
    },
    correctContent: function () {
        return expect(UsersController.getUserByIdAsync(requestInstanceParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

const updateParams = createParams;
const requestUpdateParams = _.assign({ updateUserByIdBody: updateParams }, requestInstanceParams);

const updateUserById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .put('/users/' + userId, updateParams)
            .replyWithFile(200, usersFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(UsersController.updateUserByIdAsync(requestUpdateParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(UsersController.updateUserByIdAsync(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdateUserByIdResponse);
    },
    correctContent: function () {
        return expect(UsersController.updateUserByIdAsync(requestUpdateParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    updateUserById: updateUserById,
    getUserById: getUserById
};
