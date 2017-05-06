const GetUsersResponse = require('../../../lib/Models/GetUsersResponse');
const CreateUserResponse = require('../../../lib/Models/CreateUserResponse');
const GetUserByIdResponse = require('../../../lib/Models/GetUserByIdResponse');
const UpdateUserByIdResponse = require('../../../lib/Models/UpdateUserByIdResponse');

const usersFixturesPath = `${fixturesPath}/users`;

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getUsers = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/users')
            .query(indexParams)
            .replyWithFile(200, `${usersFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(gonebusy.UsersController.getUsers(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.UsersController.getUsers(requestIndexParams)).to.eventually
            .be.an.instanceof(GetUsersResponse);
    },
    correctContent() {
        return expect(gonebusy.UsersController.getUsers(requestIndexParams)).to.eventually
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
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/users/new', createParams)
            .replyWithFile(201, `${usersFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.UsersController.createUser(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.UsersController.createUser(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateUserResponse);
    },
    correctContent() {
        return expect(gonebusy.UsersController.createUser(requestCreateParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id');
    }
};

const userId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: userId }).value();

const getUserById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/users/${userId}`)
            .replyWithFile(200, `${usersFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.UsersController.getUserById(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.UsersController.getUserById(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetUserByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.UsersController.getUserById(requestInstanceParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

const updateParams = createParams;
const requestUpdateParams = _.assign({ updateUserByIdBody: updateParams }, requestInstanceParams);

const updateUserById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/users/${userId}`, updateParams)
            .replyWithFile(200, `${usersFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.UsersController.updateUserById(requestUpdateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.UsersController.updateUserById(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdateUserByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.UsersController.updateUserById(requestUpdateParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUserById,
    getUserById
};
