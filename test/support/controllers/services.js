const GetServicesResponse = require(rootPath + '/lib/Models/GetServicesResponse');
const CreateServiceResponse = require(rootPath + '/lib/Models/CreateServiceResponse');
const GetServiceByIdResponse = require(rootPath + '/lib/Models/GetServiceByIdResponse');
const DeleteServiceByIdResponse = require(rootPath + '/lib/Models/DeleteServiceByIdResponse');
const UpdateServiceByIdResponse = require(rootPath + '/lib/Models/UpdateServiceByIdResponse');
const GetServiceAvailableSlotsByIdResponse = require(rootPath + '/lib/Models/GetServiceAvailableSlotsByIdResponse');

const ServicesController = Promise.promisifyAll(gonebusy.ServicesController);
const servicesFixturesPath = fixturesPath + '/services';

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getServices = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/services')
            .query(indexParams)
            .replyWithFile(200, servicesFixturesPath + '/index.json');
    },
    promiseResolved: function () {
        return expect(ServicesController.getServicesAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(ServicesController.getServicesAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetServicesResponse);
    },
    correctContent: function () {
        return expect(ServicesController.getServicesAsync(requestIndexParams)).to.eventually
            .have.property('services').and.have.lengthOf(1);
    }
};

const createParams = {
    name: 'string',
    description: 'string',
    duration: 0,
    user_id: 0,
    short_name: 'string',
    price_model_id: 0,
    resources: 'string',
    categories: 'string'
};
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createServiceBody: createParams })
    .value();

const createService = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .post('/services/new', createParams)
            .replyWithFile(201, servicesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(ServicesController.createServiceAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(ServicesController.createServiceAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateServiceResponse);
    },
    correctContent: function () {
        return expect(ServicesController.createServiceAsync(requestCreateParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id');
    }
};

const serviceId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: serviceId }).value();

const getServiceById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/services/' + serviceId)
            .replyWithFile(200, servicesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(ServicesController.getServiceByIdAsync(requestInstanceParams)).to.eventually
            .be.resolved;
    },
    correctInstance: function () {
        return expect(ServicesController.getServiceByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetServiceByIdResponse);
    },
    correctContent: function () {
        return expect(ServicesController.getServiceByIdAsync(requestInstanceParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const deleteServiceById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .delete('/services/' + serviceId)
            .replyWithFile(200, servicesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(ServicesController.deleteServiceByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(ServicesController.deleteServiceByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(DeleteServiceByIdResponse);
    },
    correctContent: function () {
        return expect(ServicesController.deleteServiceByIdAsync(requestInstanceParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const updateParams = _.omit(createParams, 'user_id');
const requestUpdateParams = _.assign({ updateServiceByIdBody: updateParams }, requestInstanceParams);

const updateServiceById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .put('/services/' + serviceId, updateParams)
            .replyWithFile(200, servicesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(ServicesController.updateServiceByIdAsync(requestUpdateParams)).to.eventually
            .be.resolved;
    },
    correctInstance: function () {
        return expect(ServicesController.updateServiceByIdAsync(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdateServiceByIdResponse);
    },
    correctContent: function () {
        return expect(ServicesController.updateServiceByIdAsync(requestUpdateParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const getServiceAvailableSlotsById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/services/' + serviceId + '/available_slots')
            .query({})
            .replyWithFile(200, servicesFixturesPath + '/available-slots.json');
    },
    promiseResolved: function () {
        return expect(ServicesController.getServiceAvailableSlotsByIdAsync(requestInstanceParams))
            .to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(ServicesController.getServiceAvailableSlotsByIdAsync(requestInstanceParams))
            .to.eventually.be.an.instanceof(GetServiceAvailableSlotsByIdResponse);
    },
    correctContent: function () {
        return expect(ServicesController.getServiceAvailableSlotsByIdAsync(requestInstanceParams))
            .to.eventually.have.property('service').and.be.a('object').and.have.property('resources').and.be.a('array');
    }
};

module.exports = {
    getServices: getServices,
    createService: createService,
    updateServiceById: updateServiceById,
    getServiceById: getServiceById,
    deleteServiceById: deleteServiceById,
    getServiceAvailableSlotsById: getServiceAvailableSlotsById
};
