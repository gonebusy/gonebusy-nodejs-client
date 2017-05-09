const specs = require('../support/controllers/resources');

describe('Controller Resources', () => {
    const names = ['getResources', 'getResourceThings', 'createResource', 'deleteResourceById', 'updateResourceById',
        'getResourceById'];

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
