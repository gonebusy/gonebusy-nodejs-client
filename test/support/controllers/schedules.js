const GetSchedulesResponse = require('../../../lib/Models/GetSchedulesResponse');
const CreateScheduleResponse = require('../../../lib/Models/CreateScheduleResponse');
const DeleteScheduleByIdResponse = require('../../../lib/Models/DeleteScheduleByIdResponse');
const GetScheduleByIdResponse = require('../../../lib/Models/GetScheduleByIdResponse');
const CreateScheduleTimeWindowResponse = require('../../../lib/Models/CreateScheduleTimeWindowResponse');
const DeleteScheduleTimeWindowByIdResponse = require('../../../lib/Models/DeleteScheduleTimeWindowByIdResponse');
const UpdateScheduleTimeWindowByIdResponse = require('../../../lib/Models/UpdateScheduleTimeWindowByIdResponse');

const schedulesFixturesPath = `${fixturesPath}/schedules`;

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getSchedules = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/schedules')
            .query(indexParams)
            .replyWithFile(200, `${schedulesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SchedulesController.getSchedules(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SchedulesController.getSchedules(requestIndexParams)).to.eventually
            .be.an.instanceof(GetSchedulesResponse);
    },
    correctContent() {
        return expect(gonebusy.SchedulesController.getSchedules(requestIndexParams)).to.eventually
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
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/schedules/new', createParams)
            .replyWithFile(201, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SchedulesController.createSchedule(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SchedulesController.createSchedule(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateScheduleResponse);
    },
    correctContent() {
        return expect(gonebusy.SchedulesController.createSchedule(requestCreateParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id');
    }
};

const scheduleId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: scheduleId }).value();

const deleteScheduleById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/schedules/${scheduleId}`)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SchedulesController.deleteScheduleById(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SchedulesController.deleteScheduleById(requestInstanceParams)).to.eventually
            .be.an.instanceof(DeleteScheduleByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.SchedulesController.deleteScheduleById(requestInstanceParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const getScheduleById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/schedules/${scheduleId}`)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SchedulesController.getScheduleById(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SchedulesController.getScheduleById(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetScheduleByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.SchedulesController.getScheduleById(requestInstanceParams)).to.eventually
            .have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const requestCreateTimeWindowParams = _.chain(configuration).pick('authorization').assign({
    createScheduleTimeWindowBody: createTimeWindowParams,
    id: scheduleId
}).value();

const createScheduleTimeWindow = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post(`/schedules/${scheduleId}/time_windows/new`, createTimeWindowParams)
            .replyWithFile(201, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SchedulesController.createScheduleTimeWindow(requestCreateTimeWindowParams))
            .to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SchedulesController.createScheduleTimeWindow(requestCreateTimeWindowParams))
            .to.eventually.be.an.instanceof(CreateScheduleTimeWindowResponse);
    },
    correctContent() {
        return expect(gonebusy.SchedulesController.createScheduleTimeWindow(requestCreateTimeWindowParams))
            .to.eventually.have.property('schedule').and.be.a('object').and.have.property('id');
    }
};


const scheduleTimeWindowId = 0;
const requestTimeWindowInstanceParams = _.assign({ timeWindowId: scheduleTimeWindowId }, requestInstanceParams);

const deleteScheduleTimeWindowById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/schedules/${scheduleId}/time_windows/${scheduleTimeWindowId}`)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SchedulesController.deleteScheduleTimeWindowById(requestTimeWindowInstanceParams))
            .to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SchedulesController.deleteScheduleTimeWindowById(requestTimeWindowInstanceParams))
            .to.eventually.be.an.instanceof(DeleteScheduleTimeWindowByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.SchedulesController.deleteScheduleTimeWindowById(requestTimeWindowInstanceParams))
            .to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const updateTimeWindowParams = createTimeWindowParams;
const requestUpdateTimeWindowParams = _.assign(
    { updateScheduleTimeWindowByIdBody: createTimeWindowParams },
    requestTimeWindowInstanceParams
);

const updateScheduleTimeWindowById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/schedules/${scheduleId}/time_windows/${scheduleTimeWindowId}`, updateTimeWindowParams)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(gonebusy.SchedulesController.updateScheduleTimeWindowById(requestUpdateTimeWindowParams))
            .to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(gonebusy.SchedulesController.updateScheduleTimeWindowById(requestUpdateTimeWindowParams))
            .to.eventually.be.an.instanceof(UpdateScheduleTimeWindowByIdResponse);
    },
    correctContent() {
        return expect(gonebusy.SchedulesController.updateScheduleTimeWindowById(requestUpdateTimeWindowParams))
            .to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

module.exports = {
    getSchedules,
    createSchedule,
    deleteScheduleById,
    getScheduleById,
    createScheduleTimeWindow,
    deleteScheduleTimeWindowById,
    updateScheduleTimeWindowById
};
