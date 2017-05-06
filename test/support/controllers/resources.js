const GetResourcesResponse = require('../../../lib/Models/GetResourcesResponse');
const GetResourceThingsResponse = require('../../../lib/Models/GetResourceThingsResponse');
const CreateResourceResponse = require('../../../lib/Models/CreateResourceResponse');
const DeleteResourceByIdResponse = require('../../../lib/Models/DeleteResourceByIdResponse');
const GetResourceByIdResponse = require('../../../lib/Models/GetResourceByIdResponse');
const UpdateResourceByIdResponse = require('../../../lib/Models/UpdateResourceByIdResponse');

const ResourcesController = Promise.promisifyAll(gonebusy.ResourcesController);
const resourcesFixturesPath = `${fixturesPath}/resources`;

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getResources = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/resources')
            .query(indexParams)
            .replyWithFile(200, `${resourcesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(ResourcesController.getResourcesAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(ResourcesController.getResourcesAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetResourcesResponse);
    },
    correctContent() {
        return expect(ResourcesController.getResourcesAsync(requestIndexParams)).to.eventually
            .have.property('resources').and.have.lengthOf(1);
    }
};

const getResourceThings = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/resources/things')
            .query(indexParams)
            .replyWithFile(200, `${resourcesFixturesPath}/things/index.json`);
    },
    promiseResolved() {
        return expect(ResourcesController.getResourceThingsAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(ResourcesController.getResourceThingsAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetResourceThingsResponse);
    },
    correctContent() {
        return expect(ResourcesController.getResourceThingsAsync(requestIndexParams)).to.eventually
            .have.property('things').and.have.lengthOf(1);
    }
};

const createParams = { service_id: 0, date: 'string', time: 'string', resource_id: 0, duration: 0, user_id: 0 };
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createResourceBody: createParams })
    .value();

const createResource = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/resources/new', createParams)
            .replyWithFile(201, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(ResourcesController.createResourceAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(ResourcesController.createResourceAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateResourceResponse);
    },
    correctContent() {
        return expect(ResourcesController.createResourceAsync(requestCreateParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id');
    }
};

const resourceId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: resourceId }).value();

const deleteResourceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/resources/${resourceId}`)
            .replyWithFile(200, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(ResourcesController.deleteResourceByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(ResourcesController.deleteResourceByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(DeleteResourceByIdResponse);
    },
    correctContent() {
        return expect(ResourcesController.deleteResourceByIdAsync(requestInstanceParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

const getResourceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/resources/${resourceId}`)
            .replyWithFile(200, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(ResourcesController.getResourceByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(ResourcesController.getResourceByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetResourceByIdResponse);
    },
    correctContent() {
        return expect(ResourcesController.getResourceByIdAsync(requestInstanceParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

const updateParams = { name: 'string', description: 'string', capacity: 0, gender: 'F', thing_type_id: 0 };
const requestUpdateParams = _.assign({ updateResourceByIdBody: updateParams }, requestInstanceParams);

const updateResourceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/resources/${resourceId}`, updateParams)
            .replyWithFile(200, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(ResourcesController.updateResourceByIdAsync(requestUpdateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(ResourcesController.updateResourceByIdAsync(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdateResourceByIdResponse);
    },
    correctContent() {
        return expect(ResourcesController.updateResourceByIdAsync(requestUpdateParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

module.exports = {
    getResources,
    getResourceThings,
    createResource,
    deleteResourceById,
    getResourceById,
    updateResourceById
};
