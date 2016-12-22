const specs = require(testPath + '/support/controllers/pricing-models');

describe('Controller PricingModels', function () {
    const names = ['getPricingModels', 'createPricingModel', 'updatePricingModelById', 'getPricingModelById'];

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
