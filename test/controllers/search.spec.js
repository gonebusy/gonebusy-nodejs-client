const spec = require('../support/controllers/search').searchQuery;

describe('Controller Search', () => {
    describe('#searchQuery', () => {

        beforeEach('nock requests', spec.nockRequest);

        it('resolve promise', spec.promiseResolved);
        it('resolve correct response', spec.correctInstance);
        it('resolve correct content', spec.correctContent);
    });
});
