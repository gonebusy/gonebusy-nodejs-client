const ServicesController = require('../../../lib/Controllers/ServicesController');
const GetServicesResponse = require('../../../lib/Models/GetServicesResponse');
const CreateServiceResponse = require('../../../lib/Models/CreateServiceResponse');
const GetServiceByIdResponse = require('../../../lib/Models/GetServiceByIdResponse');
const DeleteServiceByIdResponse = require('../../../lib/Models/DeleteServiceByIdResponse');
const UpdateServiceByIdResponse = require('../../../lib/Models/UpdateServiceByIdResponse');
const GetServiceAvailableSlotsByIdResponse = require('../../../lib/Models/GetServiceAvailableSlotsByIdResponse');

const servicesFixturesPath = `${fixturesPath}/services`;

const indexParams = { user_id: 0, page: 1, per_page: 10 };

const getServices = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/services')
            .query(indexParams)
            .replyWithFile(200, `${servicesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            ServicesController.getServices(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ServicesController.getServices(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.an.instanceof(GetServicesResponse);
    },
    correctContent() {
        return expect(
            ServicesController.getServices(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.have.property('services').and.have.lengthOf(1);
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

const createService = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/services/new', createParams)
            .replyWithFile(201, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ServicesController.createService(configuration.authorization, createParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ServicesController.createService(configuration.authorization, createParams)
        ).to.eventually.be.an.instanceof(CreateServiceResponse);
    },
    correctContent() {
        return expect(
            ServicesController.createService(configuration.authorization, createParams)
        ).to.eventually.have.property('service').and.be.a('object').and.have.property('id');
    }
};

const serviceId = 123;

const getServiceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/services/${serviceId}`)
            .replyWithFile(200, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ServicesController.getServiceById(configuration.authorization, serviceId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ServicesController.getServiceById(configuration.authorization, serviceId)
        ).to.eventually.be.an.instanceof(GetServiceByIdResponse);
    },
    correctContent() {
        return expect(
            ServicesController.getServiceById(configuration.authorization, serviceId)
        ).to.eventually.have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const deleteServiceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/services/${serviceId}`)
            .replyWithFile(200, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ServicesController.deleteServiceById(configuration.authorization, serviceId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ServicesController.deleteServiceById(configuration.authorization, serviceId)
        ).to.eventually.be.an.instanceof(DeleteServiceByIdResponse);
    },
    correctContent() {
        return expect(
            ServicesController.deleteServiceById(configuration.authorization, serviceId)
        ).to.eventually.have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
    }
};

const updateParams = _.omit(createParams, 'user_id');

const updateServiceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/services/${serviceId}`, updateParams)
            .replyWithFile(200, `${servicesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ServicesController.updateServiceById(configuration.authorization, serviceId, updateParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ServicesController.updateServiceById(configuration.authorization, serviceId, updateParams)
        ).to.eventually.be.an.instanceof(UpdateServiceByIdResponse);
    },
    correctContent() {
        return expect(
            ServicesController.updateServiceById(configuration.authorization, serviceId, updateParams)
        ).to.eventually.have.property('service').and.be.a('object').and.have.property('id').and.equal(serviceId);
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
        return expect(
            ServicesController.getServiceAvailableSlotsById(configuration.authorization, serviceId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ServicesController.getServiceAvailableSlotsById(configuration.authorization, serviceId)
        ).to.eventually.be.an.instanceof(GetServiceAvailableSlotsByIdResponse);
    },
    correctContent() {
        return expect(
            ServicesController.getServiceAvailableSlotsById(configuration.authorization, serviceId)
        ).to.eventually.have.property('service').and.be.a('object').and.have.property('resources').and.be.a('array');
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
