const UsersController = require('../../../lib/Controllers/UsersController');
const GetUsersResponse = require('../../../lib/Models/GetUsersResponse');
const CreateUserResponse = require('../../../lib/Models/CreateUserResponse');
const GetUserByIdResponse = require('../../../lib/Models/GetUserByIdResponse');
const UpdateUserByIdResponse = require('../../../lib/Models/UpdateUserByIdResponse');

const usersFixturesPath = `${fixturesPath}/users`;

const indexParams = { page: 1, per_page: 10 };

const getUsers = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/users')
            .query(indexParams)
            .replyWithFile(200, `${usersFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            UsersController.getUsers(configuration.authorization, indexParams.page, indexParams.per_page)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            UsersController.getUsers(configuration.authorization, indexParams.page, indexParams.per_page)
        ).to.eventually.be.an.instanceof(GetUsersResponse);
    },
    correctContent() {
        return expect(
            UsersController.getUsers(configuration.authorization, indexParams.page, indexParams.per_page)
        ).to.eventually.have.property('users').and.have.lengthOf(1);
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

const createUser = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/users/new', createParams)
            .replyWithFile(201, `${usersFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            UsersController.createUser(configuration.authorization, createParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            UsersController.createUser(configuration.authorization, createParams)
        ).to.eventually.be.an.instanceof(CreateUserResponse);
    },
    correctContent() {
        return expect(
            UsersController.createUser(configuration.authorization, createParams)
        ).to.eventually.have.property('user').and.be.a('object').and.have.property('id');
    }
};

const userId = 123;

const getUserById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/users/${userId}`)
            .replyWithFile(200, `${usersFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            UsersController.getUserById(configuration.authorization, userId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            UsersController.getUserById(configuration.authorization, userId)
        ).to.eventually.be.an.instanceof(GetUserByIdResponse);
    },
    correctContent() {
        return expect(
            UsersController.getUserById(configuration.authorization, userId)
        ).to.eventually.have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

const updateParams = createParams;

const updateUserById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/users/${userId}`, updateParams)
            .replyWithFile(200, `${usersFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            UsersController.updateUserById(configuration.authorization, userId, updateParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            UsersController.updateUserById(configuration.authorization, userId, updateParams)
        ).to.eventually.be.an.instanceof(UpdateUserByIdResponse);
    },
    correctContent() {
        return expect(
            UsersController.updateUserById(configuration.authorization, userId, updateParams)
        ).to.eventually.have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUserById,
    getUserById
};
