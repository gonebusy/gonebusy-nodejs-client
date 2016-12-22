const specs = require(testPath + '/support/controllers/schedules');

describe('Controller Schedules', function () {
    const names = ['getSchedules', 'createSchedule', 'deleteScheduleById', 'getScheduleById',
        'createScheduleTimeWindow', 'deleteScheduleTimeWindowById', 'updateScheduleTimeWindowById'];

    _.each(names, function (name) {
        describe('#' + name, function () {
            const spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolve promise', spec.promiseResolved);
            it('resolve correct response', spec.correctInstance);
            it('resolve correct content', spec.correctContent);
        });
    });
});
