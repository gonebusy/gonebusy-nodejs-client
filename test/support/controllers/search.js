const SearchQueryResponse = require('../../../lib/Models/SearchQueryResponse');

const searchFixturesPath = `${fixturesPath}/search`;

const query = 'text';
const requestParams = _.chain(configuration).pick('authorization').assign({ query }).value();

const searchQuery = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/search/${query}`)
            .replyWithFile(200, `${searchFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SearchController.searchQuery(requestParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SearchController.searchQuery(requestParams)).to.eventually
            .be.an.instanceof(SearchQueryResponse);
    },
    correctContent() {
        return expect(gonebusy.SearchController.searchQuery(requestParams)).to.eventually
            .have.property('results').and.have.all.keys(['services', 'users']);
    }
};

module.exports = {
    searchQuery
};
