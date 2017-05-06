const specs = require('../support/controllers/schedules');

describe('Controller Schedules', () => {
    const names = ['getSchedules', 'createSchedule', 'deleteScheduleById', 'getScheduleById',
        'createScheduleTimeWindow', 'deleteScheduleTimeWindowById', 'updateScheduleTimeWindowById'];

    _.each(names, (name) => {
        describe(`#${name}`, () => {
            const spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolves promise', spec.promiseResolved);
            it('resolves correct response', spec.correctInstance);
            it('resolves correct content', spec.correctContent);
        });
    });
});
