const GetServicesResponse = require('../../../lib/Models/GetServicesResponse');
const CreateServiceResponse = require('../../../lib/Models/CreateServiceResponse');
const GetServiceByIdResponse = require('../../../lib/Models/GetServiceByIdResponse');
const DeleteServiceByIdResponse = require('../../../lib/Models/DeleteServiceByIdResponse');
const UpdateServiceByIdResponse = require('../../../lib/Models/UpdateServiceByIdResponse');
const GetServiceAvailableSlotsByIdResponse = require('../../../lib/Models/GetServiceAvailableSlotsByIdResponse');

const servicesFixturesPath = `${fixturesPath}/services`;

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getServices = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/services')
            .query(indexParams)
            .replyWithFile(200, `${servicesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(gonebusy.ServicesController.getServices(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.ServicesController.getServices(requestIndexParams)).to.eventually
            .be.an.instanceof(GetServicesResponse);
    },
    correctContent() {
        return expect(gonebusy.ServicesController.getServices(requestIndexParams)).to.eventually
            .have.property('services').and.have.lengthOf(1);
    }
};

const createParams = {
    name: 'string',
    description: 'string',
    duration: 0,
    max_duration: 0,
    user_id: 0,
    short_name: 'string',
    price_model_id: 0,
    resources: 'string',
    categories: 'string'
};
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createServiceBody: createParams })
    .value();

const createService = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/services/new', createParams)
            .replyWithFile(201, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.ServicesController.createService(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.ServicesController.createService(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateServiceResponse);
    },
    correctContent() {
        return expect(gonebusy.ServicesController.createService(requestCreateParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id');
    }
};

const serviceId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: serviceId }).value();

const getServiceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/services/${serviceId}`)
            .replyWithFile(200, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.ServicesController.getServiceById(requestInstanceParams)).to.eventually
            .be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.ServicesController.getServiceById(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetServiceByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.ServicesController.getServiceById(requestInstanceParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const deleteServiceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/services/${serviceId}`)
            .replyWithFile(200, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.ServicesController.deleteServiceById(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.ServicesController.deleteServiceById(requestInstanceParams)).to.eventually
            .be.an.instanceof(DeleteServiceByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.ServicesController.deleteServiceById(requestInstanceParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const updateParams = _.omit(createParams, 'user_id');
const requestUpdateParams = _.assign({ updateServiceByIdBody: updateParams }, requestInstanceParams);

const updateServiceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/services/${serviceId}`, updateParams)
            .replyWithFile(200, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.ServicesController.updateServiceById(requestUpdateParams)).to.eventually
            .be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.ServicesController.updateServiceById(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdateServiceByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.ServicesController.updateServiceById(requestUpdateParams)).to.eventually
            .have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const getServiceAvailableSlotsById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/services/${serviceId}/available_slots`)
            .query({})
            .replyWithFile(200, `${servicesFixturesPath}/available-slots.json`);
    },
    promiseResolved() {
        return expect(gonebusy.ServicesController.getServiceAvailableSlotsById(requestInstanceParams))
            .to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.ServicesController.getServiceAvailableSlotsById(requestInstanceParams))
            .to.eventually.be.an.instanceof(GetServiceAvailableSlotsByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.ServicesController.getServiceAvailableSlotsById(requestInstanceParams))
            .to.eventually.have.property('service').and.be.a('object').and.have.property('resources').and.be.a('array');
    }
};

module.exports = {
    getServices,
    createService,
    updateServiceById,
    getServiceById,
    deleteServiceById,
    getServiceAvailableSlotsById
};
