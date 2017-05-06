const GetCategoriesResponse = require('../../../lib/Models/GetCategoriesResponse');
const CreateCategoryResponse = require('../../../lib/Models/CreateCategoryResponse');
const GetCategoryByIdResponse = require('../../../lib/Models/GetCategoryByIdResponse');

const categoriesFixturesPath = `${fixturesPath}/categories`;

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getCategories = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/categories')
            .query(indexParams)
            .replyWithFile(200, `${categoriesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            gonebusy.CategoriesController.getCategories(requestIndexParams)
                    .then(() => {})
                    .catch(() => {})
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.CategoriesController.getCategories(requestIndexParams)).to.eventually
            .be.an.instanceof(GetCategoriesResponse);
    },
    correctContent() {
        return expect(gonebusy.CategoriesController.getCategories(requestIndexParams)).to.eventually
            .have.property('categories').and.have.lengthOf(1);
    }
};

const createParams = {
    name: 'string', description: 'string', short_name: 'string', long_name: 'string', parent_category_id: 0 };
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createCategoryBody: createParams })
    .value();

const createCategory = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/categories/new', createParams)
            .replyWithFile(201, `${categoriesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            gonebusy.CategoriesController.createCategory(requestCreateParams)
                    .then(() => {})
                    .catch(() => {})
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.CategoriesController.createCategory(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateCategoryResponse);
    },
    correctContent() {
        return expect(gonebusy.CategoriesController.createCategory(requestCreateParams)).to.eventually
            .have.property('category').and.be.a('object').and.have.property('id');
    }
};

const categoryId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: categoryId }).value();

const getCategoryById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/categories/${categoryId}`)
            .replyWithFile(200, `${categoriesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.CategoriesController.getCategoryById(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.CategoriesController.getCategoryById(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetCategoryByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.CategoriesController.getCategoryById(requestInstanceParams)).to.eventually
            .have.property('category').and.be.a('object').and.have.property('id').and.equal(categoryId);
    }
};

module.exports = {
    getCategories,
    createCategory,
    getCategoryById
};
