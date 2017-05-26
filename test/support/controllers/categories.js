const CategoriesController = require('../../../lib/Controllers/CategoriesController');
const GetCategoriesResponse = require('../../../lib/Models/GetCategoriesResponse');
const CreateCategoryResponse = require('../../../lib/Models/CreateCategoryResponse');
const GetCategoryByIdResponse = require('../../../lib/Models/GetCategoryByIdResponse');

const categoriesFixturesPath = `${fixturesPath}/categories`;

const indexParams = { user_id: 0, page: 1, per_page: 10 };

const getCategories = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/categories')
            .query(indexParams)
            .replyWithFile(200, `${categoriesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            CategoriesController.getCategories(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            CategoriesController.getCategories(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.an.instanceof(GetCategoriesResponse);
    },
    correctContent() {
        return expect(
            CategoriesController.getCategories(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.have.property('categories').and.have.lengthOf(1);
    }
};

const createParams = {
    name: 'string', description: 'string', short_name: 'string', long_name: 'string', parent_category_id: 0 };

const createCategory = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/categories/new', createParams)
            .replyWithFile(201, `${categoriesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            CategoriesController.createCategory(configuration.authorization, createParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            CategoriesController.createCategory(configuration.authorization, createParams)
        ).to.eventually.be.an.instanceof(CreateCategoryResponse);
    },
    correctContent() {
        return expect(
            CategoriesController.createCategory(configuration.authorization, createParams)
        ).to.eventually.have.property('category').and.be.a('object').and.have.property('id');
    }
};

const categoryId = 123;

const getCategoryById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/categories/${categoryId}`)
            .replyWithFile(200, `${categoriesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            CategoriesController.getCategoryById(configuration.authorization, categoryId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            CategoriesController.getCategoryById(configuration.authorization, categoryId)
        ).to.eventually.be.an.instanceof(GetCategoryByIdResponse);
    },
    correctContent() {
        return expect(
            CategoriesController.getCategoryById(configuration.authorization, categoryId)
        ).to.eventually.have.property('category').and.be.a('object').and.have.property('id').and.equal(categoryId);
    }
};

module.exports = {
    getCategories,
    createCategory,
    getCategoryById
};
