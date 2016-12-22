const spec = require(testPath + '/support/controllers/search').searchQuery;

describe('Controller Search', function () {
    describe('#searchQuery', function () {

        beforeEach('nock requests', spec.nockRequest);

        it('resolve promise', spec.promiseResolved);
        it('resolve correct response', spec.correctInstance);
        it('resolve correct content', spec.correctContent);
    });
});
