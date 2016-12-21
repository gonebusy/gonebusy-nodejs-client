describe('Controller Users', function() {
    var specs = require(testPath + '/support/controllers/users');
    var names = ['getUsers', 'getUsersPros', 'createUser', 'updateUserById', 'getUserById'];

    _.each(names, function(name) {
        describe('#' + name, function() {
            var spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolve promise', spec.promiseResolved);
            it('resolve correct response', spec.correctInstance);
            it('resolve correct content', spec.correctContent);
        });
    });
});
