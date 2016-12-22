const GetSchedulesResponse = require(rootPath + '/lib/Models/GetSchedulesResponse');
const CreateScheduleResponse = require(rootPath + '/lib/Models/CreateScheduleResponse');
const DeleteScheduleByIdResponse = require(rootPath + '/lib/Models/DeleteScheduleByIdResponse');
const GetScheduleByIdResponse = require(rootPath + '/lib/Models/GetScheduleByIdResponse');
const CreateScheduleTimeWindowResponse = require(rootPath + '/lib/Models/CreateScheduleTimeWindowResponse');
const DeleteScheduleTimeWindowByIdResponse = require(rootPath + '/lib/Models/DeleteScheduleTimeWindowByIdResponse');
const UpdateScheduleTimeWindowByIdResponse = require(rootPath + '/lib/Models/UpdateScheduleTimeWindowByIdResponse');

const SchedulesController = Promise.promisifyAll(gonebusy.SchedulesController);
const schedulesFixturesPath = fixturesPath + '/schedules';

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getSchedules = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/schedules')
            .query(indexParams)
            .replyWithFile(200, schedulesFixturesPath + '/index.json');
    },
    promiseResolved: function () {
        return expect(SchedulesController.getSchedulesAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(SchedulesController.getSchedulesAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetSchedulesResponse);
    },
    correctContent: function () {
        return expect(SchedulesController.getSchedulesAsync(requestIndexParams)).to.eventually
            .have.property('schedules').and.have.lengthOf(1);
    }
};

const createTimeWindowParams = {
    start_date: '2016-12-19',
    end_date: '2016-12-19',
    start_time: 'string',
    end_time: 'string',
    total_minutes: 0,
    days: 'string',
    recurs_by: 'once',
    frequency: 'single',
    occurrence: '4th_to_last',
    date_recurs_by: 'day_in_month'
};
const createParams = _.assign({ service_id: 0, user_id: 0, resource_id: 0 }, createTimeWindowParams);
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createScheduleBody: createParams })
    .value();

const createSchedule = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .post('/schedules/new', createParams)
            .replyWithFile(201, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(SchedulesController.createScheduleAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(SchedulesController.createScheduleAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateScheduleResponse);
    },
    correctContent: function () {
        return expect(SchedulesController.createScheduleAsync(requestCreateParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id');
    }
};

const scheduleId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: scheduleId }).value();

const deleteScheduleById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .delete('/schedules/' + scheduleId)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(SchedulesController.deleteScheduleByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(SchedulesController.deleteScheduleByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(DeleteScheduleByIdResponse);
    },
    correctContent: function () {
        return expect(SchedulesController.deleteScheduleByIdAsync(requestInstanceParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const getScheduleById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/schedules/' + scheduleId)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(SchedulesController.getScheduleByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(SchedulesController.getScheduleByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetScheduleByIdResponse);
    },
    correctContent: function () {
        return expect(SchedulesController.getScheduleByIdAsync(requestInstanceParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const requestCreateTimeWindowParams = _.chain(configuration).pick('authorization').assign({
    createScheduleTimeWindowBody: createTimeWindowParams,
    id: scheduleId
}).value();

const createScheduleTimeWindow = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .post('/schedules/' + scheduleId + '/time_windows/new', createTimeWindowParams)
            .replyWithFile(201, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(SchedulesController.createScheduleTimeWindowAsync(requestCreateTimeWindowParams)).to.eventually
            .be.resolved;
    },
    correctInstance: function () {
        return expect(SchedulesController.createScheduleTimeWindowAsync(requestCreateTimeWindowParams)).to.eventually
            .be.an.instanceof(CreateScheduleTimeWindowResponse);
    },
    correctContent: function () {
        return expect(SchedulesController.createScheduleTimeWindowAsync(requestCreateTimeWindowParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id');
    }
};


const scheduleTimeWindowId = 0;
const requestTimeWindowInstanceParams = _.assign({ timeWindowId: scheduleTimeWindowId }, requestInstanceParams);

const deleteScheduleTimeWindowById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .delete('/schedules/' + scheduleId + '/time_windows/' + scheduleTimeWindowId)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(SchedulesController.deleteScheduleTimeWindowByIdAsync(requestTimeWindowInstanceParams))
            .to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(SchedulesController.deleteScheduleTimeWindowByIdAsync(requestTimeWindowInstanceParams))
            .to.eventually.be.an.instanceof(DeleteScheduleTimeWindowByIdResponse);
    },
    correctContent: function () {
        return expect(SchedulesController.deleteScheduleTimeWindowByIdAsync(requestTimeWindowInstanceParams))
            .to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const updateTimeWindowParams = createTimeWindowParams;
const requestUpdateTimeWindowParams = _.assign(
    { updateScheduleTimeWindowByIdBody: createTimeWindowParams },
    requestTimeWindowInstanceParams
);

const updateScheduleTimeWindowById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .put('/schedules/' + scheduleId + '/time_windows/' + scheduleTimeWindowId, updateTimeWindowParams)
            .replyWithFile(200, schedulesFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(SchedulesController.updateScheduleTimeWindowByIdAsync(requestUpdateTimeWindowParams))
            .to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(SchedulesController.updateScheduleTimeWindowByIdAsync(requestUpdateTimeWindowParams))
            .to.eventually.be.an.instanceof(UpdateScheduleTimeWindowByIdResponse);
    },
    correctContent: function () {
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
