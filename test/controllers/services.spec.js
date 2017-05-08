const specs = require('../support/controllers/services');

describe('Controller Services', () => {
    const names = ['getServices', 'createService', 'updateServiceById', 'getServiceById', 'deleteServiceById',
        'getServiceAvailableSlotsById'];

    _.each(names, (name) => {
        describe(`#${name}`, () => {
            const spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolves promise', spec.promiseResolved);
            it('resolves correct response', spec.correctInstance);
            it('resolves correct content', spec.correctContent);
        });
    });
});
