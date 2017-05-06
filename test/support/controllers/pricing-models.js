const GetPricingModelsResponse = require('../../../lib/Models/GetPricingModelsResponse');
const CreatePricingModelResponse = require('../../../lib/Models/CreatePricingModelResponse');
const GetPricingModelByIdResponse = require('../../../lib/Models/GetPricingModelByIdResponse');
const UpdatePricingModelByIdResponse = require('../../../lib/Models/UpdatePricingModelByIdResponse');

const PricingModelsController = Promise.promisifyAll(gonebusy.PricingModelsController);
const pricingFixturesPath = `${fixturesPath}/pricing_models`;

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getPricingModels = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/pricing_models')
            .query(indexParams)
            .replyWithFile(200, `${pricingFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(PricingModelsController.getPricingModelsAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(PricingModelsController.getPricingModelsAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetPricingModelsResponse);
    },
    correctContent() {
        return expect(PricingModelsController.getPricingModelsAsync(requestIndexParams)).to.eventually
            .have.property('pricingModels').and.have.lengthOf(1);
    }
};

const createParams = { name: 'string', type: 'string', user_id: 0, notes: 'string', price: 0, currency: 'string' };
const requestCreateParams = _.chain(configuration).pick('authorization')
    .assign({ createPricingModelBody: createParams }).value();

const createPricingModel = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/pricing_models/new', createParams)
            .replyWithFile(201, `${pricingFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(PricingModelsController.createPricingModelAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(PricingModelsController.createPricingModelAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreatePricingModelResponse);
    },
    correctContent() {
        return expect(PricingModelsController.createPricingModelAsync(requestCreateParams)).to.eventually
            .have.property('pricingModel').and.be.a('object').and.have.property('id');
    }
};

const pricingModelId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: pricingModelId }).value();

const getPricingModelById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/pricing_models/${pricingModelId}`)
            .replyWithFile(200, `${pricingFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(PricingModelsController.getPricingModelByIdAsync(requestInstanceParams)).to.eventually
            .be.resolved;
    },
    correctInstance() {
        return expect(PricingModelsController.getPricingModelByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetPricingModelByIdResponse);
    },
    correctContent() {
        return expect(PricingModelsController.getPricingModelByIdAsync(requestInstanceParams)).to.eventually
            .have.property('pricingModel').and.be.a('object').and.have.property('id').and.equal(pricingModelId);
    }
};

const updateParams = { name: 'string', notes: 'string', price: 0, currency: 'string' };
const requestUpdateParams = _.assign({ updatePricingModelByIdBody: updateParams }, requestInstanceParams);

const updatePricingModelById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/pricing_models/${pricingModelId}`, updateParams)
            .replyWithFile(200, `${pricingFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(PricingModelsController.updatePricingModelByIdAsync(requestUpdateParams)).to.eventually
            .be.resolved;
    },
    correctInstance() {
        return expect(PricingModelsController.updatePricingModelByIdAsync(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdatePricingModelByIdResponse);
    },
    correctContent() {
        return expect(PricingModelsController.updatePricingModelByIdAsync(requestUpdateParams)).to.eventually
            .have.property('pricingModel').and.be.a('object').and.have.property('id').and.equal(pricingModelId);
    }
};

module.exports = {
    getPricingModels,
    createPricingModel,
    updatePricingModelById,
    getPricingModelById
};
