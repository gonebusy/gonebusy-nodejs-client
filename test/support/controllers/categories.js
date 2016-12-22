const GetCategoriesResponse = require(rootPath + '/lib/Models/GetCategoriesResponse');
const CreateCategoryResponse = require(rootPath + '/lib/Models/CreateCategoryResponse');
const GetCategoryByIdResponse = require(rootPath + '/lib/Models/GetCategoryByIdResponse');

const CategoriesController = Promise.promisifyAll(gonebusy.CategoriesController);
const categoriesFixturesPath = fixturesPath + '/categories';

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getCategories = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/categories')
            .query(indexParams)
            .replyWithFile(200, categoriesFixturesPath + '/index.json');
    },
    promiseResolved: function () {
        return expect(CategoriesController.getCategoriesAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(CategoriesController.getCategoriesAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetCategoriesResponse);
    },
    correctContent: function () {
        return expect(CategoriesController.getCategoriesAsync(requestIndexParams)).to.eventually
            .have.property('categories').and.have.lengthOf(1);
    }
};

const createParams = { service_id: 0, date: 'string', time: 'string', resource_id: 0, duration: 0, user_id: 0 };
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createCategoryBody: createParams })
    .value();

const createCategory = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .post('/categories/new', createParams)
            .replyWithFile(201, categoriesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(CategoriesController.createCategoryAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(CategoriesController.createCategoryAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateCategoryResponse);
    },
    correctContent: function () {
        return expect(CategoriesController.createCategoryAsync(requestCreateParams)).to.eventually
            .have.property('category').and.be.a('object').and.have.property('id');
    }
};

const categoryId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: categoryId }).value();

const getCategoryById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/categories/' + categoryId)
            .replyWithFile(200, categoriesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(CategoriesController.getCategoryByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(CategoriesController.getCategoryByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetCategoryByIdResponse);
    },
    correctContent: function () {
        return expect(CategoriesController.getCategoryByIdAsync(requestInstanceParams)).to.eventually
            .have.property('category').and.be.a('object').and.have.property('id').and.equal(categoryId);
    }
};

module.exports = {
    getCategories: getCategories,
    createCategory: createCategory,
    getCategoryById: getCategoryById
};
