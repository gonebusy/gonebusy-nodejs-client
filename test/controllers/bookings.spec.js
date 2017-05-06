const specs = require('../support/controllers/bookings');

describe('Controller Bookings', () => {
    const names = ['getBookings', 'createBooking', 'cancelBookingById', 'updateBookingById', 'getBookingById'];

    _.each(names, (name) => {
        describe(`#${name}`, () => {
            const spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolve promise', spec.promiseResolved);
            it('resolve correct response', spec.correctInstance);
            it('resolve correct content', spec.correctContent);
        });
    });
});
