const SearchQueryResponse = require(rootPath + '/lib/Models/SearchQueryResponse');

const SearchController = Promise.promisifyAll(gonebusy.SearchController);
const searchFixturesPath = fixturesPath + '/search';

const query = 'text';
const requestParams = _.chain(configuration).pick('authorization').assign({ query: query }).value();

const searchQuery = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/search/' + query)
            .replyWithFile(200, searchFixturesPath + '/index.json');
    },
    promiseResolved: function () {
        return expect(SearchController.searchQueryAsync(requestParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(SearchController.searchQueryAsync(requestParams)).to.eventually
            .be.an.instanceof(SearchQueryResponse);
    },
    correctContent: function () {
        return expect(SearchController.searchQueryAsync(requestParams)).to.eventually
            .have.property('results').and.have.all.keys(['services', 'users']);
    }
};

module.exports = {
    searchQuery: searchQuery
};
