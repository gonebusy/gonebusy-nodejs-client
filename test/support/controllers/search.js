const SearchController = require('../../../lib/Controllers/SearchController');
const SearchQueryResponse = require('../../../lib/Models/SearchQueryResponse');

const searchFixturesPath = `${fixturesPath}/search`;

const query = 'text';

const searchQuery = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/search/${query}`)
            .replyWithFile(200, `${searchFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            SearchController.searchQuery(configuration.authorization, query)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SearchController.searchQuery(configuration.authorization, query)
        ).to.eventually.be.an.instanceof(SearchQueryResponse);
    },
    correctContent() {
        return expect(
            SearchController.searchQuery(configuration.authorization, query)
        ).to.eventually.have.property('results').and.have.all.keys(['services', 'users']);
    }
};

module.exports = {
    searchQuery
};
