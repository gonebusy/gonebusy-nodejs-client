var CategoriesController = Promise.promisifyAll(gonebusy.CategoriesController),
    categoriesFixturesPath = fixturesPath + '/categories';

var indexParams = {page: 1, per_page: 10},
    requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

var getCategories = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/categories')
            .query(indexParams)
            .replyWithFile(200, categoriesFixturesPath + '/index.json');
    },
    promiseResolved: function() {
        return expect(CategoriesController.getCategoriesAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(CategoriesController.getCategoriesAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetCategoriesResponse);
    },
    correctContent: function() {
        return expect(CategoriesController.getCategoriesAsync(requestIndexParams)).to.eventually
            .have.property('categories').and.have.lengthOf(1);
    }
};

var createParams = {service_id: 0, date: 'string', time: 'string', resource_id: 0, duration: 0, user_id: 0},
    requestCreateParams = _.chain(configuration).pick('authorization').assign({createCategoryBody: createParams}).value();

var createCategory = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .post('/categories/new', createParams)
            .replyWithFile(201, categoriesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(CategoriesController.createCategoryAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(CategoriesController.createCategoryAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateCategoryResponse);
    },
    correctContent: function() {
        return expect(CategoriesController.createCategoryAsync(requestCreateParams)).to.eventually
            .have.property('category').and.be.a('object').and.have.property('id');
    }
};

var categoryId = 0,
    requestInstanceParams = _.chain(configuration).pick('authorization').assign({id: categoryId}).value();

var getCategoryById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/categories/' + categoryId)
            .replyWithFile(200, categoriesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(CategoriesController.getCategoryByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(CategoriesController.getCategoryByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetCategoryByIdResponse);
    },
    correctContent: function() {
        return expect(CategoriesController.getCategoryByIdAsync(requestInstanceParams)).to.eventually
            .have.property('category').and.be.a('object').and.have.property('id').and.equal(categoryId);
    }
};

module.exports = {
    getCategories: getCategories,
    createCategory: createCategory,
    getCategoryById: getCategoryById
};
