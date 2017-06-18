const BookingsController = require('../../../lib/Controllers/BookingsController');
const GetBookingsResponse = require('../../../lib/Models/GetBookingsResponse');
const CreateBookingResponse = require('../../../lib/Models/CreateBookingResponse');
const CancelBookingByIdResponse = require('../../../lib/Models/CancelBookingByIdResponse');
const UpdateBookingByIdResponse = require('../../../lib/Models/UpdateBookingByIdResponse');
const GetBookingByIdResponse = require('../../../lib/Models/GetBookingByIdResponse');

const bookingsFixturesPath = `${fixturesPath}/bookings`;

const indexParams = {
    user_id: 0,
    states: 'string',
    booker_id: 0,
    page: 1,
    per_page: 10
};

const getBookings = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/bookings')
            .query(indexParams)
            .replyWithFile(200, `${bookingsFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(
            BookingsController.getBookings(
                configuration.authorization,
                indexParams.user_id,
                indexParams.states,
                indexParams.booker_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            BookingsController.getBookings(
                configuration.authorization,
                indexParams.user_id,
                indexParams.states,
                indexParams.booker_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.be.an.instanceof(GetBookingsResponse);
    },
    correctContent() {
        return expect(
            BookingsController.getBookings(
                configuration.authorization,
                indexParams.user_id,
                indexParams.states,
                indexParams.booker_id,
                indexParams.page,
                indexParams.per_page
            )
        ).to.eventually.have.property('bookings').and.have.lengthOf(1);
    }
};

const createParams = {
    service_id: 0,
    date: 'string',
    time: 'string',
    resource_id: 0,
    duration: 0,
    user_id: 0,
    end_date: '2017-05-09',
    recurs_by: 'once',
    frequency: 'single',
    days: 'string',
    occurrence: '4th_to_last',
    date_recurs_by: 'day_in_month',
    name: 'my booking',
    description: 'my description'
};

const createBooking = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/bookings/new', createParams)
            .replyWithFile(201, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            BookingsController.createBooking(configuration.authorization, createParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            BookingsController.createBooking(configuration.authorization, createParams)
        ).to.eventually.be.an.instanceof(CreateBookingResponse);
    },
    correctContent() {
        return expect(
            BookingsController.createBooking(configuration.authorization, createParams)
        ).to.eventually.have.property('booking').and.be.a('object').and.have.property('id');
    }
};

const bookingId = 123;
const cancelParams = { cancel_recurring: false, date: '2017-05-05', end_date: '2017-05-05' };

const cancelBookingById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/bookings/${bookingId}`)
            .query(cancelParams)
            .replyWithFile(200, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            BookingsController.cancelBookingById(
                configuration.authorization,
                bookingId,
                cancelParams.date,
                cancelParams.end_date,
                cancelParams.cancel_recurring
            )
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            BookingsController.cancelBookingById(
                configuration.authorization,
                bookingId,
                cancelParams.date,
                cancelParams.end_date,
                cancelParams.cancel_recurring
            )
        ).to.eventually.be.an.instanceof(CancelBookingByIdResponse);
    },
    correctContent() {
        return expect(
            BookingsController.cancelBookingById(
                configuration.authorization,
                bookingId,
                cancelParams.date,
                cancelParams.end_date,
                cancelParams.cancel_recurring
            )
        ).to.eventually.have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};


const updateParams = _.omit(createParams, ['resource_id', 'service_id']);
const updateBookingById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/bookings/${bookingId}`)
            .replyWithFile(200, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            BookingsController.updateBookingById(configuration.authorization, bookingId, updateParams)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            BookingsController.updateBookingById(configuration.authorization, bookingId, updateParams)
        ).to.eventually.be.an.instanceof(UpdateBookingByIdResponse);
    },
    correctContent() {
        return expect(
            BookingsController.updateBookingById(configuration.authorization, bookingId, updateParams)
        ).to.eventually.have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

const getBookingById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/bookings/${bookingId}`)
            .replyWithFile(200, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(
            BookingsController.getBookingById(configuration.authorization, bookingId)
        ).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(
            BookingsController.getBookingById(configuration.authorization, bookingId)
        ).to.eventually.be.an.instanceof(GetBookingByIdResponse);
    },
    correctContent() {
        return expect(
            BookingsController.getBookingById(configuration.authorization, bookingId)
        ).to.eventually.have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

module.exports = {
    getBookings,
    createBooking,
    cancelBookingById,
    updateBookingById,
    getBookingById
};
