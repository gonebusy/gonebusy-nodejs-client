const ResourcesController = require('../../../lib/Controllers/ResourcesController');
const GetResourcesResponse = require('../../../lib/Models/GetResourcesResponse');
const GetResourceThingsResponse = require('../../../lib/Models/GetResourceThingsResponse');
const CreateResourceResponse = require('../../../lib/Models/CreateResourceResponse');
const DeleteResourceByIdResponse = require('../../../lib/Models/DeleteResourceByIdResponse');
const GetResourceByIdResponse = require('../../../lib/Models/GetResourceByIdResponse');
const UpdateResourceByIdResponse = require('../../../lib/Models/UpdateResourceByIdResponse');

const resourcesFixturesPath = `${fixturesPath}/resources`;

const indexParams = { user_id: '06c711d1-7e2b-408f-b466-2c70c68fdc24', page: 1, per_page: 10 };

const getResources = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/resources')
            .query(indexParams)
            .replyWithFile(200, `${resourcesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            ResourcesController.getResources(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ResourcesController.getResources(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.an.instanceof(GetResourcesResponse);
    },
    correctContent() {
        return expect(
            ResourcesController.getResources(
                configuration.authorization,
                indexParams.user_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.have.property('resources').and.have.lengthOf(1);
    }
};

const thingParams = { page: 1, per_page: 10 };

const getResourceThings = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/resources/things')
            .query(thingParams)
            .replyWithFile(200, `${resourcesFixturesPath}/things/index.json`);
    },
    promiseResolved() {
        return expect(
            ResourcesController.getResourceThings(configuration.authorization, thingParams.page, thingParams.per_page)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ResourcesController.getResourceThings(configuration.authorization, thingParams.page, thingParams.per_page)
        ).to.eventually.be.an.instanceof(GetResourceThingsResponse);
    },
    correctContent() {
        return expect(
            ResourcesController.getResourceThings(configuration.authorization, thingParams.page, thingParams.per_page)
        ).to.eventually.have.property('things').and.have.lengthOf(1);
    }
};

const createParams = {
    service_id: '3f58d6bb-59ba-4e7f-aeaa-2544c384d9d7',
    date: 'string',
    time: 'string',
    resource_id: '1f021e11-67c4-4014-b5c5-7a9874bdc67b',
    duration: 0,
    user_id: '06c711d1-7e2b-408f-b466-2c70c68fdc24'
};

const createResource = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/resources/new', createParams)
            .replyWithFile(201, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ResourcesController.createResource(configuration.authorization, createParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ResourcesController.createResource(configuration.authorization, createParams)
        ).to.eventually.be.an.instanceof(CreateResourceResponse);
    },
    correctContent() {
        return expect(
            ResourcesController.createResource(configuration.authorization, createParams)
        ).to.eventually.have.property('resource').and.be.a('object').and.have.property('id');
    }
};

const resourceId = '1f021e11-67c4-4014-b5c5-7a9874bdc67b';

const deleteResourceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/resources/${resourceId}`)
            .replyWithFile(200, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ResourcesController.deleteResourceById(configuration.authorization, resourceId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ResourcesController.deleteResourceById(configuration.authorization, resourceId)
        ).to.eventually.be.an.instanceof(DeleteResourceByIdResponse);
    },
    correctContent() {
        return expect(
            ResourcesController.deleteResourceById(configuration.authorization, resourceId)
        ).to.eventually.have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

const getResourceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/resources/${resourceId}`)
            .replyWithFile(200, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ResourcesController.getResourceById(configuration.authorization, resourceId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ResourcesController.getResourceById(configuration.authorization, resourceId)
        ).to.eventually.be.an.instanceof(GetResourceByIdResponse);
    },
    correctContent() {
        return expect(
            ResourcesController.getResourceById(configuration.authorization, resourceId)
        ).to.eventually.have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

const updateParams = { name: 'string', description: 'string', capacity: 0, gender: 'F', thing_type_id: 0 };

const updateResourceById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/resources/${resourceId}`, updateParams)
            .replyWithFile(200, `${resourcesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            ResourcesController.updateResourceById(configuration.authorization, resourceId, updateParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            ResourcesController.updateResourceById(configuration.authorization, resourceId, updateParams)
        ).to.eventually.be.an.instanceof(UpdateResourceByIdResponse);
    },
    correctContent() {
        return expect(
            ResourcesController.updateResourceById(configuration.authorization, resourceId, updateParams)
        ).to.eventually.have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
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
