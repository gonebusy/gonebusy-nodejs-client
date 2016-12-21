var SchedulesController = Promise.promisifyAll(gonebusy.SchedulesController),
    schedulesFixturesPath = fixturesPath + '/schedules';

var indexParams = {page: 1, per_page: 10},
    requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

var getSchedules = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/schedules')
            .query(indexParams)
            .replyWithFile(200, schedulesFixturesPath + '/index.json');
    },
    promiseResolved: function() {
        return expect(SchedulesController.getSchedulesAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(SchedulesController.getSchedulesAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetSchedulesResponse);
    },
    correctContent: function() {
        return expect(SchedulesController.getSchedulesAsync(requestIndexParams)).to.eventually
            .have.property('schedules').and.have.lengthOf(1);
    }
};

var createTimeWindowParams = {start_date: '2016-12-19', end_date: '2016-12-19', start_time: 'string',
        end_time: 'string', total_minutes: 0, days: 'string', recurs_by: 'once', frequency: 'single',
        occurrence: '4th_to_last', date_recurs_by: 'day_in_month'},
    createParams = _.assign({service_id: 0, user_id: 0, resource_id: 0}, createTimeWindowParams),
    requestCreateParams = _.chain(configuration).pick('authorization').assign({createScheduleBody: createParams}).value();

var createSchedule = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .post('/schedules/new', createParams)
            .replyWithFile(201, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(SchedulesController.createScheduleAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(SchedulesController.createScheduleAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateScheduleResponse);
    },
    correctContent: function() {
        return expect(SchedulesController.createScheduleAsync(requestCreateParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id');
    }
};

var scheduleId = 0,
    requestInstanceParams = _.chain(configuration).pick('authorization').assign({id: scheduleId}).value();

var deleteScheduleById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .delete('/schedules/' + scheduleId)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(SchedulesController.deleteScheduleByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(SchedulesController.deleteScheduleByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(DeleteScheduleByIdResponse);
    },
    correctContent: function() {
        return expect(SchedulesController.deleteScheduleByIdAsync(requestInstanceParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

var getScheduleById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .get('/schedules/' + scheduleId)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(SchedulesController.getScheduleByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(SchedulesController.getScheduleByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetScheduleByIdResponse);
    },
    correctContent: function() {
        return expect(SchedulesController.getScheduleByIdAsync(requestInstanceParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

var requestCreateTimeWindowParams = _.chain(configuration).pick('authorization').assign({
        createScheduleTimeWindowBody: createTimeWindowParams,
        id: scheduleId
    }).value();

var createScheduleTimeWindow = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .post('/schedules/' + scheduleId + '/time_windows/new', createTimeWindowParams)
            .replyWithFile(201, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(SchedulesController.createScheduleTimeWindowAsync(requestCreateTimeWindowParams)).to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(SchedulesController.createScheduleTimeWindowAsync(requestCreateTimeWindowParams)).to.eventually
            .be.an.instanceof(CreateScheduleTimeWindowResponse);
    },
    correctContent: function() {
        return expect(SchedulesController.createScheduleTimeWindowAsync(requestCreateTimeWindowParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id');
    }
};


var scheduleTimeWindowId = 0,
    requestTimeWindowInstanceParams = _.assign({timeWindowId: scheduleTimeWindowId}, requestInstanceParams);

var deleteScheduleTimeWindowById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .delete('/schedules/' + scheduleId + '/time_windows/' + scheduleTimeWindowId)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(SchedulesController.deleteScheduleTimeWindowByIdAsync(requestTimeWindowInstanceParams))
            .to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(SchedulesController.deleteScheduleTimeWindowByIdAsync(requestTimeWindowInstanceParams))
            .to.eventually.be.an.instanceof(DeleteScheduleTimeWindowByIdResponse);
    },
    correctContent: function() {
        return expect(SchedulesController.deleteScheduleTimeWindowByIdAsync(requestTimeWindowInstanceParams))
            .to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

var updateTimeWindowParams = createTimeWindowParams,
    requestUpdateTimeWindowParams = _.assign(
        {updateScheduleTimeWindowByIdBody: createTimeWindowParams},
        requestTimeWindowInstanceParams
    );

var updateScheduleTimeWindowById = {
    nockRequest: function() {
        nock(configuration.BASEURI)
            .put('/schedules/' + scheduleId + '/time_windows/' + scheduleTimeWindowId, updateTimeWindowParams)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function() {
        return expect(SchedulesController.updateScheduleTimeWindowByIdAsync(requestUpdateTimeWindowParams))
            .to.eventually.be.resolved;
    },
    correctInstance: function() {
        return expect(SchedulesController.updateScheduleTimeWindowByIdAsync(requestUpdateTimeWindowParams))
            .to.eventually.be.an.instanceof(UpdateScheduleTimeWindowByIdResponse);
    },
    correctContent: function() {
        return expect(SchedulesController.updateScheduleTimeWindowByIdAsync(requestUpdateTimeWindowParams))
            .to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

module.exports = {
    getSchedules: getSchedules,
    createSchedule: createSchedule,
    deleteScheduleById: deleteScheduleById,
    getScheduleById: getScheduleById,
    createScheduleTimeWindow: createScheduleTimeWindow,
    deleteScheduleTimeWindowById: deleteScheduleTimeWindowById,
    updateScheduleTimeWindowById: updateScheduleTimeWindowById
};
