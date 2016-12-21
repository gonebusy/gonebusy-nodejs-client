var ResourcesController = Promise.promisifyAll(gonebusy.ResourcesController),
    resourcesFixturesPath = fixturesPath + '/resources';

var indexParams = {page: 1, per_page: 10},
    requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

var getResources = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/resources')
            .query(indexParams)
            .replyWithFile(200, resourcesFixturesPath + '/index.json');
    },
    promiseResolved: function() {
        return expect(ResourcesController.getResourcesAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(ResourcesController.getResourcesAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetResourcesResponse);
    },
    correctContent: function() {
        return expect(ResourcesController.getResourcesAsync(requestIndexParams)).to.eventually
            .have.property('resources').and.have.lengthOf(1);
    }
};

var getResourceThings = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/resources/things')
            .query(indexParams)
            .replyWithFile(200, resourcesFixturesPath + '/things/index.json');
    },
    promiseResolved: function() {
        return expect(ResourcesController.getResourceThingsAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(ResourcesController.getResourceThingsAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetResourceThingsResponse);
    },
    correctContent: function() {
        return expect(ResourcesController.getResourceThingsAsync(requestIndexParams)).to.eventually
            .have.property('things').and.have.lengthOf(1);
    }
};

var createParams = {service_id: 0, date: 'string', time: 'string', resource_id: 0, duration: 0, user_id: 0},
    requestCreateParams = _.chain(configuration).pick('authorization').assign({createResourceBody: createParams}).value();

var createResource = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .post('/resources/new', createParams)
            .replyWithFile(201, resourcesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(ResourcesController.createResourceAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(ResourcesController.createResourceAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateResourceResponse);
    },
    correctContent: function() {
        return expect(ResourcesController.createResourceAsync(requestCreateParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id');
    }
};

var resourceId = 0,
    requestInstanceParams = _.chain(configuration).pick('authorization').assign({id: resourceId}).value();

var deleteResourceById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .delete('/resources/' + resourceId)
            .replyWithFile(200, resourcesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(ResourcesController.deleteResourceByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(ResourcesController.deleteResourceByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(DeleteResourceByIdResponse);
    },
    correctContent: function() {
        return expect(ResourcesController.deleteResourceByIdAsync(requestInstanceParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

var getResourceById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/resources/' + resourceId)
            .replyWithFile(200, resourcesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(ResourcesController.getResourceByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(ResourcesController.getResourceByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetResourceByIdResponse);
    },
    correctContent: function() {
        return expect(ResourcesController.getResourceByIdAsync(requestInstanceParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

var updateParams = {name: 'string', description: 'string', capacity: 0, gender: 'F', thing_type_id: 0},
    requestUpdateParams = _.assign({updateResourceByIdBody: updateParams}, requestInstanceParams);

var updateResourceById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .put('/resources/' + resourceId, updateParams)
            .replyWithFile(200, resourcesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(ResourcesController.updateResourceByIdAsync(requestUpdateParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(ResourcesController.updateResourceByIdAsync(requestUpdateParams)).to.eventually
            .be.an.instanceof(UpdateResourceByIdResponse);
    },
    correctContent: function() {
        return expect(ResourcesController.updateResourceByIdAsync(requestUpdateParams)).to.eventually
            .have.property('resource').and.be.a('object').and.have.property('id').and.equal(resourceId);
    }
};

module.exports = {
    getResources: getResources,
    getResourceThings: getResourceThings,
    createResource: createResource,
    deleteResourceById: deleteResourceById,
    getResourceById: getResourceById,
    updateResourceById: updateResourceById
};
