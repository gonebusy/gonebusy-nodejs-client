const specs = require('../support/controllers/pricing-models');

describe('Controller PricingModels', () => {
    const names = ['getPricingModels', 'createPricingModel', 'updatePricingModelById', 'getPricingModelById'];

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
