const SchedulesController = require('../../../lib/Controllers/SchedulesController');
const GetSchedulesResponse = require('../../../lib/Models/GetSchedulesResponse');
const CreateScheduleResponse = require('../../../lib/Models/CreateScheduleResponse');
const DeleteScheduleByIdResponse = require('../../../lib/Models/DeleteScheduleByIdResponse');
const GetScheduleByIdResponse = require('../../../lib/Models/GetScheduleByIdResponse');
const CreateScheduleTimeWindowResponse = require('../../../lib/Models/CreateScheduleTimeWindowResponse');
const DeleteScheduleTimeWindowByIdResponse = require('../../../lib/Models/DeleteScheduleTimeWindowByIdResponse');
const UpdateScheduleTimeWindowByIdResponse = require('../../../lib/Models/UpdateScheduleTimeWindowByIdResponse');

const schedulesFixturesPath = `${fixturesPath}/schedules`;

const indexParams = {
    user_id: 0,
    resource_id: 0,
    service_id: 0,
    page: 1,
    per_page: 10
};

const getSchedules = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/schedules')
            .query(indexParams)
            .replyWithFile(200, `${schedulesFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            SchedulesController.getSchedules(
                configuration.authorization,
                indexParams.user_id,
                indexParams.resource_id,
                indexParams.service_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SchedulesController.getSchedules(
                configuration.authorization,
                indexParams.user_id,
                indexParams.resource_id,
                indexParams.service_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.an.instanceof(GetSchedulesResponse);
    },
    correctContent() {
        return expect(
            SchedulesController.getSchedules(
                configuration.authorization,
                indexParams.user_id,
                indexParams.resource_id,
                indexParams.service_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.have.property('schedules').and.have.lengthOf(1);
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
const createParams = _.assign({ service_id: 0, user_id: 123, resource_id: 0 }, createTimeWindowParams);

const createSchedule = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/schedules/new', createParams)
            .replyWithFile(201, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            SchedulesController.createSchedule(configuration.authorization, createParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SchedulesController.createSchedule(configuration.authorization, createParams)
        ).to.eventually.be.an.instanceof(CreateScheduleResponse);
    },
    correctContent() {
        return expect(
            SchedulesController.createSchedule(configuration.authorization, createParams)
        ).to.eventually.have.property('schedule').and.be.a('object').and.have.property('id');
    }
};

const scheduleId = 123;

const deleteScheduleById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/schedules/${scheduleId}`)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            SchedulesController.deleteScheduleById(configuration.authorization, scheduleId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SchedulesController.deleteScheduleById(configuration.authorization, scheduleId)
        ).to.eventually.be.an.instanceof(DeleteScheduleByIdResponse);
    },
    correctContent() {
        return expect(
            SchedulesController.deleteScheduleById(configuration.authorization, scheduleId)
        ).to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const getScheduleById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/schedules/${scheduleId}`)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            SchedulesController.getScheduleById(configuration.authorization, scheduleId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SchedulesController.getScheduleById(configuration.authorization, scheduleId)
        ).to.eventually.be.an.instanceof(GetScheduleByIdResponse);
    },
    correctContent() {
        return expect(
            SchedulesController.getScheduleById(configuration.authorization, scheduleId)
        ).to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const createScheduleTimeWindow = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post(`/schedules/${scheduleId}/time_windows/new`, createTimeWindowParams)
            .replyWithFile(201, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            SchedulesController.createScheduleTimeWindow(
                configuration.authorization, scheduleId, createTimeWindowParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SchedulesController.createScheduleTimeWindow(
                configuration.authorization, scheduleId, createTimeWindowParams)
        ).to.eventually.be.an.instanceof(CreateScheduleTimeWindowResponse);
    },
    correctContent() {
        return expect(
            SchedulesController.createScheduleTimeWindow(
                configuration.authorization, scheduleId, createTimeWindowParams)
        ).to.eventually.have.property('schedule').and.be.a('object').and.have.property('id');
    }
};


const timeWindowId = 456;

const deleteScheduleTimeWindowById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/schedules/${scheduleId}/time_windows/${timeWindowId}`)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            SchedulesController.deleteScheduleTimeWindowById(configuration.authorization, scheduleId, timeWindowId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SchedulesController.deleteScheduleTimeWindowById(configuration.authorization, scheduleId, timeWindowId)
        ).to.eventually.be.an.instanceof(DeleteScheduleTimeWindowByIdResponse);
    },
    correctContent() {
        return expect(
            SchedulesController.deleteScheduleTimeWindowById(configuration.authorization, scheduleId, timeWindowId)
        ).to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
    }
};

const updateTimeWindowParams = createTimeWindowParams;

const updateScheduleTimeWindowById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/schedules/${scheduleId}/time_windows/${timeWindowId}`, updateTimeWindowParams)
            .replyWithFile(200, `${schedulesFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            SchedulesController.updateScheduleTimeWindowById(
                configuration.authorization, scheduleId, timeWindowId, updateTimeWindowParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            SchedulesController.updateScheduleTimeWindowById(
                configuration.authorization, scheduleId, timeWindowId, updateTimeWindowParams)
        ).to.eventually.be.an.instanceof(UpdateScheduleTimeWindowByIdResponse);
    },
    correctContent() {
        return expect(
            SchedulesController.updateScheduleTimeWindowById(
                configuration.authorization, scheduleId, timeWindowId, updateTimeWindowParams)
        ).to.eventually.have.property('schedule').and.be.a('object').and.have.property('id').and.equal(scheduleId);
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
