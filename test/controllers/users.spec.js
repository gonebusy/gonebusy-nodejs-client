const specs = require(testPath + '/support/controllers/users');

describe('Controller Users', function () {
    const names = ['getUsers', 'getUsersPros', 'createUser', 'updateUserById', 'getUserById'];

    _.each(names, function (name) {
        describe('#' + name, function () {
            const spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolve promise', spec.promiseResolved);
            it('resolve correct response', spec.correctInstance);
            it('resolve correct content', spec.correctContent);
        });
    });
});
