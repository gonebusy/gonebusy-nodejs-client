const specs = require('../support/controllers/services');

describe('Controller Services', () => {
    const names = ['getServices', 'createService', 'updateServiceById', 'getServiceById', 'deleteServiceById',
        'getServiceAvailableSlotsById'];

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
