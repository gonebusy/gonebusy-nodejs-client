const specs = require('../support/controllers/bookings');

describe('Controller Bookings', () => {
    const names = ['getBookings', 'createBooking', 'cancelBookingById', 'updateBookingById', 'getBookingById'];

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
