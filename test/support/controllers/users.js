var UsersController = Promise.promisifyAll(gonebusy.UsersController),
    usersFixturesPath = fixturesPath + '/users';

var indexParams = {page: 1, per_page: 10},
    requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

var getUsers = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/users')
            .query(indexParams)
            .replyWithFile(200, usersFixturesPath + '/index.json');
    },
    promiseResolved: function() {
        return expect(UsersController.getUsersAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(UsersController.getUsersAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetUsersResponse);
    },
    correctContent: function() {
        return expect(UsersController.getUsersAsync(requestIndexParams)).to.eventually
            .have.property('users').and.have.lengthOf(1);
    }
};

var getUsersPros = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/users/pros')
            .query(indexParams)
            .replyWithFile(200, usersFixturesPath + '/index.json');
    },
    promiseResolved: function() {
        return expect(UsersController.getUsersProsAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(UsersController.getUsersProsAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetUsersProsResponse);
    },
    correctContent: function() {
        return expect(UsersController.getUsersProsAsync(requestIndexParams)).to.eventually
            .have.property('users').and.have.lengthOf(1);
    }
};

var createParams = {email: 'string', first_name: 'string', last_name: 'string', business_name: 'string',
        external_url: 'string', permalink: 'string', timezone: 'string'},
    requestCreateParams = _.chain(configuration).pick('authorization').assign({createUserBody: createParams}).value();

var createUser = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .post('/users/new', createParams)
            .replyWithFile(201, usersFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(UsersController.createUserAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(UsersController.createUserAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateUserResponse);
    },
    correctContent: function() {
        return expect(UsersController.createUserAsync(requestCreateParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id');
    }
};

var userId = 0,
    requestInstanceParams = _.chain(configuration).pick('authorization').assign({id: userId}).value();

var getUserById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/users/' + userId)
            .replyWithFile(200, usersFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(UsersController.getUserByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(UsersController.getUserByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetUserByIdResponse);
    },
    correctContent: function() {
        return expect(UsersController.getUserByIdAsync(requestInstanceParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

var updateParams = createParams,
    requestUpdateParams = _.assign({updateUserByIdBody: updateParams}, requestInstanceParams);

var updateUserById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .put('/users/' + userId, updateParams)
            .replyWithFile(200, usersFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(UsersController.updateUserByIdAsync(requestUpdateParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(UsersController.updateUserByIdAsync(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdateUserByIdResponse);
    },
    correctContent: function() {
        return expect(UsersController.updateUserByIdAsync(requestUpdateParams)).to.eventually
            .have.property('user').and.be.a('object').and.have.property('id').and.equal(userId);
    }
};

module.exports = {
    getUsers: getUsers,
    getUsersPros: getUsersPros,
    createUser: createUser,
    updateUserById: updateUserById,
    getUserById: getUserById
};
