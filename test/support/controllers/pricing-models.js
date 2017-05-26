const PricingModelsController = require('../../../lib/Controllers/PricingModelsController');
const GetPricingModelsResponse = require('../../../lib/Models/GetPricingModelsResponse');
const CreatePricingModelResponse = require('../../../lib/Models/CreatePricingModelResponse');
const GetPricingModelByIdResponse = require('../../../lib/Models/GetPricingModelByIdResponse');
const UpdatePricingModelByIdResponse = require('../../../lib/Models/UpdatePricingModelByIdResponse');

const pricingFixturesPath = `${fixturesPath}/pricing_models`;

const indexParams = { user_id: 0, page: 1, per_page: 10 };

const getPricingModels = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/pricing_models')
            .query(indexParams)
            .replyWithFile(200, `${pricingFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            PricingModelsController.getPricingModels(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            PricingModelsController.getPricingModels(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.an.instanceof(GetPricingModelsResponse);
    },
    correctContent() {
        return expect(
            PricingModelsController.getPricingModels(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.have.property('pricingModels').and.have.lengthOf(1);
    }
};

const createParams = { name: 'string', type: 'string', user_id: 0, notes: 'string', price: 0, currency: 'string' };

const createPricingModel = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/pricing_models/new', createParams)
            .replyWithFile(201, `${pricingFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            PricingModelsController.createPricingModel(configuration.authorization, createParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            PricingModelsController.createPricingModel(configuration.authorization, createParams)
        ).to.eventually.be.an.instanceof(CreatePricingModelResponse);
    },
    correctContent() {
        return expect(
            PricingModelsController.createPricingModel(configuration.authorization, createParams)
        ).to.eventually.have.property('pricingModel').and.be.a('object').and.have.property('id');
    }
};

const pricingModelId = 123;

const getPricingModelById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/pricing_models/${pricingModelId}`)
            .replyWithFile(200, `${pricingFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            PricingModelsController.getPricingModelById(configuration.authorization, pricingModelId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            PricingModelsController.getPricingModelById(configuration.authorization, pricingModelId)
        ).to.eventually.be.an.instanceof(GetPricingModelByIdResponse);
    },
    correctContent() {
        return expect(
            PricingModelsController.getPricingModelById(configuration.authorization, pricingModelId)
        ).to.eventually.have.property('pricingModel').and.be.a('object')
            .and.have.property('id').and.equal(pricingModelId);
    }
};

const updateParams = { name: 'string', notes: 'string', price: 0, currency: 'string' };

const updatePricingModelById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/pricing_models/${pricingModelId}`, updateParams)
            .replyWithFile(200, `${pricingFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            PricingModelsController.updatePricingModelById(configuration.authorization, pricingModelId, updateParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            PricingModelsController.updatePricingModelById(configuration.authorization, pricingModelId, updateParams)
        ).to.eventually.be.an.instanceof(UpdatePricingModelByIdResponse);
    },
    correctContent() {
        return expect(
            PricingModelsController.updatePricingModelById(configuration.authorization, pricingModelId, updateParams)
        ).to.eventually.have.property('pricingModel').and.be.a('object')
            .and.have.property('id').and.equal(pricingModelId);
    }
};

module.exports = {
    getPricingModels,
    createPricingModel,
    updatePricingModelById,
    getPricingModelById
};
