var PricingModelsController = Promise.promisifyAll(gonebusy.PricingModelsController),
    pricingFixturesPath = fixturesPath + '/pricing_models';

var indexParams = {page: 1, per_page: 10},
    requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

var getPricingModels = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/pricing_models')
            .query(indexParams)
            .replyWithFile(200, pricingFixturesPath + '/index.json');
    },
    promiseResolved: function() {
        return expect(PricingModelsController.getPricingModelsAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(PricingModelsController.getPricingModelsAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetPricingModelsResponse);
    },
    correctContent: function() {
        return expect(PricingModelsController.getPricingModelsAsync(requestIndexParams)).to.eventually
            .have.property('pricingModels').and.have.lengthOf(1);
    }
};

var createParams = {name: 'string', type: 'string', user_id: 0, notes: 'string', price: 0, currency: 'string'},
    requestCreateParams = _.chain(configuration).pick('authorization').assign({createPricingModelBody: createParams})
        .value();

var createPricingModel = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .post('/pricing_models/new', createParams)
            .replyWithFile(201, pricingFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(PricingModelsController.createPricingModelAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(PricingModelsController.createPricingModelAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreatePricingModelResponse);
    },
    correctContent: function() {
        return expect(PricingModelsController.createPricingModelAsync(requestCreateParams)).to.eventually
            .have.property('pricingModels').and.be.a('object').and.have.property('id');
    }
};

var pricingModelsId = 0,
    requestInstanceParams = _.chain(configuration).pick('authorization').assign({id: pricingModelsId}).value();

var getPricingModelById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/pricing_models/' + pricingModelsId)
            .replyWithFile(200, pricingFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(PricingModelsController.getPricingModelByIdAsync(requestInstanceParams)).to.eventually
            .be.resolved;
    },
    correctInstance: function() {
        return expect(PricingModelsController.getPricingModelByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetPricingModelByIdResponse);
    },
    correctContent: function() {
        return expect(PricingModelsController.getPricingModelByIdAsync(requestInstanceParams)).to.eventually
            .have.property('pricingModels').and.be.a('object').and.have.property('id').and.equal(pricingModelsId);
    }
};

var updateParams = {name: 'string', notes: 'string', price: 0, currency: 'string'},
    requestUpdateParams = _.assign({updatePricingModelByIdBody: updateParams}, requestInstanceParams);

var updatePricingModelById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .put('/pricing_models/' + pricingModelsId, updateParams)
            .replyWithFile(200, pricingFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(PricingModelsController.updatePricingModelByIdAsync(requestUpdateParams)).to.eventually
            .be.resolved;
    },
    correctInstance: function() {
        return expect(PricingModelsController.updatePricingModelByIdAsync(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdatePricingModelByIdResponse);
    },
    correctContent: function() {
        return expect(PricingModelsController.updatePricingModelByIdAsync(requestUpdateParams)).to.eventually
            .have.property('pricingModels').and.be.a('object').and.have.property('id').and.equal(pricingModelsId);
    }
};

module.exports = {
    getPricingModels: getPricingModels,
    createPricingModel: createPricingModel,
    updatePricingModelById: updatePricingModelById,
    getPricingModelById: getPricingModelById
};
