const specs = require('../support/controllers/users');

describe('Controller Users', () => {
    const names = ['getUsers', 'createUser', 'updateUserById', 'getUserById'];

    _.each(names, (name) => {
        describe(`#${name}`, () => {
            const spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolve promise', spec.promiseResolved);
            it('resolve correct response', spec.correctInstance);
            it('resolve correct content', spec.correctContent);
        });
    });
});
