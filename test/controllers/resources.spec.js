const specs = require(testPath + '/support/controllers/resources');

describe('Controller Resources', function () {
    const names = ['getResources', 'getResourceThings', 'createResource', 'deleteResourceById', 'updateResourceById',
        'getResourceById'];

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
