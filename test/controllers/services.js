const specs = require(testPath + '/support/controllers/services');

describe('Controller Schedules', function () {
    const names = ['getServices', 'createService', 'updateServiceById', 'getServiceById', 'deleteServiceById',
        'getServiceAvailableSlotsById'];

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
