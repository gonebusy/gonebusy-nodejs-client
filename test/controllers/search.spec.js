describe('Controller Search', function() {
    describe('#searchQuery', function() {
        var spec = require(testPath + '/support/controllers/search').searchQuery;

        beforeEach('nock requests', spec.nockRequest);

        it('resolve promise', spec.promiseResolved);
        it('resolve correct response', spec.correctInstance);
        it('resolve correct content', spec.correctContent);
    });
});
